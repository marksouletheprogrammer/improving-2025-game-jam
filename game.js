// T-Rex Runner Game

class TRexRunner {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Game states
        this.gameState = 'start'; // 'start', 'playing', 'paused', 'gameOver'
        this.score = 0;
        this.gameSpeed = 4;
        this.groundY = this.canvas.height - 50;
        
        // Player (T-Rex)
        this.player = {
            x: 100,
            y: this.groundY - 50,
            width: 40,
            height: 50,
            velocityY: 0,
            jumping: false,
            grounded: true
        };
        
        // Physics
        this.gravity = 0.8;
        this.jumpPower = -15;
        
        // Obstacles
        this.obstacles = [];
        this.obstacleTimer = 0;
        this.obstacleInterval = 100;
        
        // Background elements
        this.clouds = [];
        this.groundOffset = 0;
        
        this.init();
        this.setupEventListeners();
        this.gameLoop();
    }
    
    init() {
        // Initialize clouds
        for (let i = 0; i < 5; i++) {
            this.clouds.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * 100 + 20,
                width: Math.random() * 60 + 40,
                height: Math.random() * 30 + 20,
                speed: Math.random() * 0.5 + 0.2
            });
        }
        
        this.updateUI();
    }
    
    setupEventListeners() {
        const startButton = document.getElementById('startButton');
        const pauseButton = document.getElementById('pauseButton');
        const restartButton = document.getElementById('restartButton');
        
        startButton.addEventListener('click', () => this.startGame());
        pauseButton.addEventListener('click', () => this.togglePause());
        restartButton.addEventListener('click', () => this.restartGame());
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                if (this.gameState === 'start') {
                    this.startGame();
                } else if (this.gameState === 'playing') {
                    this.jump();
                } else if (this.gameState === 'gameOver') {
                    this.restartGame();
                }
            }
            if (e.code === 'KeyP' && this.gameState === 'playing') {
                this.togglePause();
            }
        });
    }
    
    startGame() {
        this.gameState = 'playing';
        this.updateUI();
    }
    
    togglePause() {
        if (this.gameState === 'playing') {
            this.gameState = 'paused';
        } else if (this.gameState === 'paused') {
            this.gameState = 'playing';
        }
        this.updateUI();
    }
    
    restartGame() {
        this.gameState = 'playing';
        this.score = 0;
        this.gameSpeed = 4;
        this.obstacles = [];
        this.obstacleTimer = 0;
        this.player.y = this.groundY - 50;
        this.player.velocityY = 0;
        this.player.jumping = false;
        this.player.grounded = true;
        this.groundOffset = 0;
        this.updateUI();
    }
    
    jump() {
        if (this.player.grounded) {
            this.player.velocityY = this.jumpPower;
            this.player.jumping = true;
            this.player.grounded = false;
        }
    }
    
    updateUI() {
        const startButton = document.getElementById('startButton');
        const pauseButton = document.getElementById('pauseButton');
        const restartButton = document.getElementById('restartButton');
        const gameMessage = document.getElementById('gameMessage');
        const scoreValue = document.getElementById('scoreValue');
        
        scoreValue.textContent = Math.floor(this.score).toString().padStart(5, '0');
        
        switch (this.gameState) {
            case 'start':
                startButton.style.display = 'block';
                pauseButton.style.display = 'none';
                restartButton.style.display = 'none';
                break;
            case 'playing':
                startButton.style.display = 'none';
                pauseButton.style.display = 'block';
                restartButton.style.display = 'none';
                break;
            case 'paused':
                pauseButton.textContent = 'RESUME';
                break;
            case 'gameOver':
                startButton.style.display = 'none';
                pauseButton.style.display = 'none';
                restartButton.style.display = 'block';
                break;
        }
        
        if (this.gameState === 'playing') {
            pauseButton.textContent = 'PAUSE';
        }
    }
    
    update() {
        if (this.gameState !== 'playing') return;
        
        // Update score and difficulty
        this.score += 0.1;
        this.gameSpeed = 4 + Math.floor(this.score / 100) * 0.5;
        
        // Update player physics
        this.player.velocityY += this.gravity;
        this.player.y += this.player.velocityY;
        
        // Ground collision
        if (this.player.y >= this.groundY - this.player.height) {
            this.player.y = this.groundY - this.player.height;
            this.player.velocityY = 0;
            this.player.jumping = false;
            this.player.grounded = true;
        }
        
        // Update ground scrolling
        this.groundOffset -= this.gameSpeed;
        if (this.groundOffset <= -50) {
            this.groundOffset = 0;
        }
        
        // Update clouds
        this.clouds.forEach(cloud => {
            cloud.x -= cloud.speed;
            if (cloud.x + cloud.width < 0) {
                cloud.x = this.canvas.width + Math.random() * 100;
                cloud.y = Math.random() * 100 + 20;
            }
        });
        
        // Generate obstacles
        this.obstacleTimer++;
        if (this.obstacleTimer > this.obstacleInterval) {
            this.obstacles.push({
                x: this.canvas.width,
                y: this.groundY - 40,
                width: 20,
                height: 40,
                passed: false
            });
            this.obstacleTimer = 0;
            this.obstacleInterval = Math.random() * 50 + 80 - Math.floor(this.score / 100) * 5;
        }
        
        // Update obstacles
        this.obstacles = this.obstacles.filter(obstacle => {
            obstacle.x -= this.gameSpeed;
            
            // Check if player passed obstacle (for scoring)
            if (!obstacle.passed && obstacle.x + obstacle.width < this.player.x) {
                obstacle.passed = true;
            }
            
            return obstacle.x + obstacle.width > 0;
        });
        
        // Collision detection
        this.checkCollisions();
        
        this.updateUI();
    }
    
    checkCollisions() {
        const playerRect = {
            x: this.player.x + 5,
            y: this.player.y + 5,
            width: this.player.width - 10,
            height: this.player.height - 10
        };
        
        for (let obstacle of this.obstacles) {
            if (playerRect.x < obstacle.x + obstacle.width &&
                playerRect.x + playerRect.width > obstacle.x &&
                playerRect.y < obstacle.y + obstacle.height &&
                playerRect.y + playerRect.height > obstacle.y) {
                this.gameState = 'gameOver';
                this.updateUI();
                break;
            }
        }
    }
    
    render() {
        const ctx = this.ctx;
        
        // Clear canvas with white background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw pixelated clouds
        ctx.fillStyle = '#000000';
        this.clouds.forEach(cloud => {
            // Simple pixelated cloud shape
            const cloudX = Math.floor(cloud.x / 4) * 4;
            const cloudY = Math.floor(cloud.y / 4) * 4;
            
            // Cloud body (pixelated rectangles)
            ctx.fillRect(cloudX, cloudY, 32, 8);
            ctx.fillRect(cloudX + 8, cloudY - 4, 16, 4);
            ctx.fillRect(cloudX + 4, cloudY + 8, 24, 4);
        });
        
        // Draw ground line
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 4]);
        ctx.beginPath();
        ctx.moveTo(0, this.groundY);
        ctx.lineTo(this.canvas.width, this.groundY);
        ctx.stroke();
        ctx.setLineDash([]); // Reset dash pattern
        
        // Draw player (T-Rex) - pixelated monochrome style
        ctx.fillStyle = '#000000';
        const px = Math.floor(this.player.x / 2) * 2;
        const py = Math.floor(this.player.y / 2) * 2;
        
        // T-Rex body (pixelated)
        ctx.fillRect(px, py + 20, 32, 24);
        // T-Rex head
        ctx.fillRect(px + 28, py + 8, 16, 20);
        // T-Rex tail
        ctx.fillRect(px - 8, py + 24, 12, 8);
        // T-Rex legs (only when grounded)
        if (this.player.grounded) {
            ctx.fillRect(px + 8, py + 44, 6, 8);
            ctx.fillRect(px + 20, py + 44, 6, 8);
        }
        // T-Rex arm
        ctx.fillRect(px + 4, py + 28, 8, 4);
        // Eye
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(px + 36, py + 12, 4, 4);
        ctx.fillStyle = '#000000';
        ctx.fillRect(px + 38, py + 14, 2, 2);
        
        // Draw obstacles (cacti) - pixelated monochrome style
        ctx.fillStyle = '#000000';
        this.obstacles.forEach(obstacle => {
            const ox = Math.floor(obstacle.x / 2) * 2;
            const oy = Math.floor(obstacle.y / 2) * 2;
            
            // Main cactus body (pixelated)
            ctx.fillRect(ox + 4, oy, 12, 40);
            // Cactus arms (pixelated)
            ctx.fillRect(ox, oy + 12, 8, 16);
            ctx.fillRect(ox + 16, oy + 20, 8, 12);
            // Cactus details
            ctx.fillRect(ox + 6, oy + 8, 8, 4);
        });
        
        // Draw game state overlays
        if (this.gameState === 'start') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#000000';
            ctx.font = '32px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('T-REX RUNNER', this.canvas.width / 2, this.canvas.height / 2 - 30);
            ctx.font = '16px monospace';
            ctx.fillText('Press SPACE to start', this.canvas.width / 2, this.canvas.height / 2 + 20);
        } else if (this.gameState === 'paused') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#000000';
            ctx.font = '32px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('PAUSED', this.canvas.width / 2, this.canvas.height / 2);
        } else if (this.gameState === 'gameOver') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#000000';
            ctx.font = '32px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 20);
            ctx.font = '16px monospace';
            ctx.fillText(`HI ${Math.floor(this.score).toString().padStart(5, '0')}`, this.canvas.width / 2, this.canvas.height / 2 + 20);
        }
        
        ctx.textAlign = 'left'; // Reset text alignment
    }
    
    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new TRexRunner();
});
