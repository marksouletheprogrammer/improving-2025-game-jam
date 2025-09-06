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
        
        scoreValue.textContent = Math.floor(this.score);
        
        switch (this.gameState) {
            case 'start':
                startButton.style.display = 'block';
                pauseButton.style.display = 'none';
                restartButton.style.display = 'none';
                gameMessage.textContent = 'Press START or SPACEBAR to begin!';
                break;
            case 'playing':
                startButton.style.display = 'none';
                pauseButton.style.display = 'block';
                restartButton.style.display = 'none';
                gameMessage.textContent = 'Jump with SPACEBAR! Press P to pause.';
                break;
            case 'paused':
                pauseButton.textContent = 'Resume';
                gameMessage.textContent = 'Game Paused - Click Resume or press P to continue';
                break;
            case 'gameOver':
                startButton.style.display = 'none';
                pauseButton.style.display = 'none';
                restartButton.style.display = 'block';
                gameMessage.textContent = `Game Over! Final Score: ${Math.floor(this.score)}`;
                break;
        }
        
        if (this.gameState === 'playing') {
            pauseButton.textContent = 'Pause';
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
        
        // Clear canvas with sky gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(1, '#E0F6FF');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw clouds
        ctx.fillStyle = '#FFFFFF';
        this.clouds.forEach(cloud => {
            ctx.beginPath();
            ctx.arc(cloud.x, cloud.y, cloud.width / 4, 0, Math.PI * 2);
            ctx.arc(cloud.x + cloud.width / 3, cloud.y, cloud.width / 3, 0, Math.PI * 2);
            ctx.arc(cloud.x + cloud.width / 1.5, cloud.y, cloud.width / 4, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Draw ground
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, this.groundY, this.canvas.width, this.canvas.height - this.groundY);
        
        // Draw ground pattern
        ctx.fillStyle = '#654321';
        for (let x = this.groundOffset; x < this.canvas.width; x += 50) {
            ctx.fillRect(x, this.groundY, 25, 10);
        }
        
        // Draw player (T-Rex)
        ctx.fillStyle = '#228B22';
        ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
        
        // T-Rex details
        ctx.fillStyle = '#006400';
        // Head
        ctx.fillRect(this.player.x + 25, this.player.y, 15, 20);
        // Legs
        if (this.player.grounded) {
            ctx.fillRect(this.player.x + 5, this.player.y + 40, 8, 10);
            ctx.fillRect(this.player.x + 25, this.player.y + 40, 8, 10);
        }
        // Eye
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(this.player.x + 32, this.player.y + 5, 4, 4);
        ctx.fillStyle = '#000000';
        ctx.fillRect(this.player.x + 33, this.player.y + 6, 2, 2);
        
        // Draw obstacles (cacti)
        ctx.fillStyle = '#228B22';
        this.obstacles.forEach(obstacle => {
            // Main cactus body
            ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            // Cactus arms
            ctx.fillRect(obstacle.x - 5, obstacle.y + 10, 8, 15);
            ctx.fillRect(obstacle.x + obstacle.width - 3, obstacle.y + 15, 8, 12);
        });
        
        // Draw game state overlays
        if (this.gameState === 'start') {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '48px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('T-REX RUNNER', this.canvas.width / 2, this.canvas.height / 2 - 50);
            ctx.font = '24px Arial';
            ctx.fillText('Press SPACE or START to begin!', this.canvas.width / 2, this.canvas.height / 2 + 20);
        } else if (this.gameState === 'paused') {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '48px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('PAUSED', this.canvas.width / 2, this.canvas.height / 2);
        } else if (this.gameState === 'gameOver') {
            ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '48px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 30);
            ctx.font = '24px Arial';
            ctx.fillText(`Score: ${Math.floor(this.score)}`, this.canvas.width / 2, this.canvas.height / 2 + 20);
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
