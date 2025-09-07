class RockClimbingGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        // Background music
        this.music = new Audio("assets/music.mp3");
        this.music.loop = true;
        this.music.volume = 0.4;

        // Sound effects
        this.sounds = {
            jump: new Audio("assets/jump.wav"),
            collect: new Audio("assets/collect.mp3"),
            gameOver: new Audio("assets/gameover.m4a")
        };

        // Game states
        this.gameState = 'start'; // 'start', 'playing', 'paused', 'gameOver'
        this.score = 0;
        this.gameSpeed = 4;
        this.baseGameSpeed = 4; // Store base speed for calculations
        this.speedReduction = 0; // Track speed reduction from leaves
        this.baseGroundY = this.canvas.height - 50;
        this.currentTerrainLevel = 0; // Track current terrain level
        this.obstaclesCleared = 0; // Count cleared obstacles for terrain elevation
        
        // Gradual inclination system
        this.totalDistance = 0; // Total horizontal distance traveled
        this.inclineStartDistance = 500; // Distance before inclination starts
        this.inclineRate = 0.002; // Elevation increase per pixel (gentle slope)
        this.maxInclination = 200; // Maximum elevation increase
        
        // Camera system
        this.camera = {
            y: 0, // Current camera Y offset
            targetY: 0, // Target camera Y position
            smoothing: 0.1, // Camera smoothing factor (0.1 = smooth, 1.0 = instant)
            threshold: this.canvas.height * 0.5 // Trigger camera movement when player above 50% height
        };
        
        // Player (Mountain Goat)
        this.player = {
            x: 100,
            y: this.baseGroundY - 50,
            width: 40,
            height: 50,
            velocityY: 0,
            jumping: false,
            grounded: true,
            targetY: this.baseGroundY - 50, // For smooth terrain transitions
            jumpHeight: 120 // Maximum jump height
        };
        
        // Physics
        this.gravity = 0.8;
        this.jumpPower = -15;
        
        // Obstacles
        this.obstacles = [];
        this.obstacleTimer = 0;
        this.obstacleInterval = 100;
        
        // Leaves
        this.leaves = [];
        this.leafTimer = 0;
        this.leafInterval = 300; // Initial interval for leaf appearance
        this.leafCollected = 0; // Track collected leaves
        
        // Background elements
        this.clouds = [];
        this.groundOffset = 0;
        
        // Mountain system for parallax scrolling
        this.mountainLayers = {
            farthest: [], // 20% speed
            far: [],      // 40% speed
            near: [],     // 60% speed
            nearest: []   // 80% speed
        };
        this.mountainSpawnTimer = 0;
        this.mountainSpawnInterval = 300; // Spawn mountains every 300 pixels
        
        // Weather system
        this.weatherClouds = [];
        this.rainDrops = [];
        this.lightning = {
            active: false,
            timer: 0,
            duration: 0,
            x: 0,
            segments: []
        };
        
        // Terrain transition
        this.terrainTransition = {
            active: false,
            startY: 0,
            targetY: 0,
            progress: 0,
            duration: 60 // frames for smooth transition
        };
        
        
        this.init();
        this.initMountains();
        this.setupEventListeners();
        this.gameLoop();
    }
    
    // Get current ground Y position with gradual inclination
    getCurrentGroundY(xPosition = 0) {
        // Calculate base elevation from gradual inclination
        let elevation = 0;
        
        if (this.totalDistance > this.inclineStartDistance) {
            const inclineDistance = this.totalDistance - this.inclineStartDistance;
            elevation = Math.min(inclineDistance * this.inclineRate, this.maxInclination);
        }
        
        // Add any additional elevation from specific x position (for slopes)
        const localElevation = Math.max(0, (xPosition - this.inclineStartDistance) * this.inclineRate);
        const totalElevation = Math.min(elevation + localElevation, this.maxInclination);
        
        return this.baseGroundY - totalElevation;
    }
    
    // Get ground Y at a specific screen position (for collision detection)
    getGroundYAtPosition(screenX) {
        const worldX = this.totalDistance + screenX;
        return this.getCurrentGroundY(worldX);
    }
    
    // Update camera to keep player in lower portion of screen
    updateCamera() {
        // Calculate player's screen position (world position - camera offset)
        const playerScreenY = this.player.y - this.camera.y;
        
        // If player is above the threshold (50% of screen height), move camera up
        if (playerScreenY < this.camera.threshold) {
            // Calculate how much to move camera up to keep player at threshold
            const targetOffset = this.player.y - this.camera.threshold;
            this.camera.targetY = Math.max(0, targetOffset); // Don't go below 0
        }
        
        // Smooth camera movement
        const diff = this.camera.targetY - this.camera.y;
        this.camera.y += diff * this.camera.smoothing;
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
        
        // Initialize weather clouds
        for (let i = 0; i < 2; i++) {
            this.weatherClouds.push({
                x: Math.random() * this.canvas.width + this.canvas.width,
                y: Math.random() * 80 + 10,
                width: Math.random() * 80 + 60,
                height: Math.random() * 40 + 30,
                speed: Math.random() * 0.3 + 0.1,
                isStorm: Math.random() > 0.7,
                rainTimer: 0,
                lightningTimer: Math.random() * 300 + 200
            });
        }
        
        this.updateUI();
    }
    
    // Initialize mountain layers with initial mountains
    initMountains() {
        const layerConfigs = {
            farthest: { alpha: 0.3, color: '#A0A0A0', baseHeight: 15, heightVariation: 10, speed: 0.03 },
            far: { alpha: 0.5, color: '#808080', baseHeight: 25, heightVariation: 15, speed: 0.06 },
            near: { alpha: 0.7, color: '#606060', baseHeight: 35, heightVariation: 20, speed: 0.09 },
            nearest: { alpha: 0.85, color: '#404040', baseHeight: 45, heightVariation: 25, speed: 0.12 }
        };
        
        // Initialize each layer with mountains to fill the screen
        Object.keys(layerConfigs).forEach(layerName => {
            const config = layerConfigs[layerName];
            let currentX = -200; // Start off-screen to the left
            
            while (currentX < this.canvas.width + 400) {
                this.spawnMountain(layerName, currentX, config);
                currentX += Math.random() * 150 + 130; // Further increased spacing between mountains
            }
        });
    }
    
    // Spawn a single mountain in the specified layer
    spawnMountain(layerName, x, config) {
        const mountain = {
            x: x,
            width: Math.random() * 120 + 80,
            height: config.baseHeight + Math.random() * config.heightVariation,
            triangles: [] // Store triangle data with fixed dimensions
        };
        
        // Generate variable number of triangles (1-4 peaks per mountain)
        const peakCount = Math.floor(Math.random() * 4) + 2; // 2-4 peaks
        mountain.triangles = [];
        
        for (let i = 0; i < peakCount; i++) {
            const spacing = mountain.width / peakCount;
            const offsetX = i * spacing + Math.random() * (spacing * 0.3);
            const peakWidth = (40 + Math.random() * 80);
            
            let baseHeight, heightVariation;
            if (layerName === 'farthest') {
                baseHeight = 8;
                heightVariation = 50;
            } else if (layerName === 'far') {
                baseHeight = 15;
                heightVariation = 40;
            } else if (layerName === 'near') {
                baseHeight = 20;
                heightVariation = 30;
            } else if (layerName === 'nearest') {
                baseHeight = 25;
                heightVariation = 20;
            }
            
            const peakHeight = baseHeight + Math.random() * heightVariation;
            
            // Only add triangle if it fits within mountain bounds
            if (offsetX + peakWidth <= mountain.width) {
                mountain.triangles.push({
                    offsetX: offsetX,
                    width: peakWidth,
                    height: peakHeight
                });
            }
        }
        
        this.mountainLayers[layerName].push(mountain);
    }
    
    // Update mountain system - handle scrolling, spawning, and despawning
    updateMountains() {
        const layerConfigs = {
            farthest: { alpha: 0.3, color: '#A0A0A0', baseHeight: 15, heightVariation: 10, speed: 0.03 },
            far: { alpha: 0.5, color: '#808080', baseHeight: 25, heightVariation: 15, speed: 0.06 },
            near: { alpha: 0.7, color: '#606060', baseHeight: 35, heightVariation: 20, speed: 0.09 },
            nearest: { alpha: 0.85, color: '#404040', baseHeight: 45, heightVariation: 25, speed: 0.12 }
        };
        
        // Update mountain spawn timer
        this.mountainSpawnTimer += this.gameSpeed;
        
        Object.keys(this.mountainLayers).forEach(layerName => {
            const config = layerConfigs[layerName];
            const mountains = this.mountainLayers[layerName];
            
            // Move mountains based on their layer speed
            mountains.forEach(mountain => {
                mountain.x -= this.gameSpeed * config.speed;
            });
            
            // Remove mountains that have moved completely off-screen to the left
            this.mountainLayers[layerName] = mountains.filter(mountain => 
                mountain.x + mountain.width > -100
            );
            
            // Spawn new mountains on the right side when needed
            if (this.mountainSpawnTimer > this.mountainSpawnInterval) {
                const rightmostMountain = mountains.reduce((rightmost, mountain) => 
                    mountain.x + mountain.width > rightmost ? mountain.x + mountain.width : rightmost, 0
                );
                
                // If there's a gap on the right side, spawn a new mountain
                if (rightmostMountain < this.canvas.width + 200) {
                    const spawnX = Math.max(rightmostMountain + Math.random() * 100 + 80, this.canvas.width + 100);
                    this.spawnMountain(layerName, spawnX, config);
                }
            }
        });
        
        // Reset spawn timer periodically
        if (this.mountainSpawnTimer > this.mountainSpawnInterval) {
            this.mountainSpawnTimer = 0;
        }
    }
    
    // Draw all mountain layers with parallax effect (triangular mountains)
    drawMountains(ctx) {
        const elevationOffset = Math.min(this.totalDistance * this.inclineRate * 0.3, this.maxInclination * 0.3);
        const cameraOffset = this.camera.y * 0.2; // Parallax effect for background
        
        // Unified base Y for all mountain layers
        const unifiedBaseY = this.canvas.height - 120 - elevationOffset - cameraOffset;
        
        // Helper function to draw triangular mountain with minimum width
        const drawTriangle = (x, baseY, width, height) => {
            const minWidth = 40; 
            const actualWidth = Math.max(width, minWidth);
            ctx.beginPath();
            ctx.moveTo(x, baseY); // Bottom left
            ctx.lineTo(x + actualWidth / 2, baseY - height); // Peak
            ctx.lineTo(x + actualWidth, baseY); // Bottom right
            ctx.closePath();
            ctx.fill();
        };
        
        // Farthest mountains - very light and translucent triangular peaks
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#A0A0A0';
        this.mountainLayers.farthest.forEach(mountain => {
            mountain.triangles.forEach(triangle => {
                if (mountain.x + triangle.offsetX + triangle.width > 0 && mountain.x + triangle.offsetX < this.canvas.width) {
                    drawTriangle(mountain.x + triangle.offsetX, unifiedBaseY - 9, triangle.width, triangle.height);
                }
            });
        });
        
        // Far mountains - light gray triangular peaks with variety
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = '#808080';
        this.mountainLayers.far.forEach(mountain => {
            mountain.triangles.forEach(triangle => {
                if (mountain.x + triangle.offsetX + triangle.width > 0 && mountain.x + triangle.offsetX < this.canvas.width) {
                    drawTriangle(mountain.x + triangle.offsetX, unifiedBaseY - 6, triangle.width, triangle.height);
                }
            });
        });
        
        // Near mountains - medium gray triangular peaks with more detail
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = '#606060';
        this.mountainLayers.near.forEach(mountain => {
            mountain.triangles.forEach(triangle => {
                if (mountain.x + triangle.offsetX + triangle.width > 0 && mountain.x + triangle.offsetX < this.canvas.width) {
                    drawTriangle(mountain.x + triangle.offsetX, unifiedBaseY - 3, triangle.width, triangle.height);
                }
            });
        });
        
        // Nearest mountains - dark gray prominent triangular peaks
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = '#404040';
        this.mountainLayers.nearest.forEach(mountain => {
            mountain.triangles.forEach(triangle => {
                if (mountain.x + triangle.offsetX + triangle.width > 0 && mountain.x + triangle.offsetX < this.canvas.width) {
                    drawTriangle(mountain.x + triangle.offsetX, unifiedBaseY, triangle.width, triangle.height);
                }
            });
        });
        
        // Reset alpha for other elements
        ctx.globalAlpha = 1.0;
    }
    
    setupEventListeners() {
        const startButton = document.getElementById('startButton');
        const pauseButton = document.getElementById('pauseButton');
        const climbButton = document.getElementById('climbButton');
        const restartButton = document.getElementById('restartButton');
        
        startButton.addEventListener('click', () => this.startGame());
        pauseButton.addEventListener('click', () => this.togglePause());
        climbButton.addEventListener('click', () => this.jump());
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

    playSound(name) {
        if (this.sounds[name]) {
            // Clone so overlapping plays don’t cut each other off
            let sfx = this.sounds[name].cloneNode();
            sfx.volume = this.sounds[name].volume;
            sfx.play().catch(err => console.warn(err));
        }
    }

    startGame() {
        this.gameState = 'playing';
        this.updateUI();

        if (this.music.paused) {
            this.music.play().catch(err => {
                console.warn("Music play was blocked:", err);
            });
        }
    }
    
    togglePause() {
        if (this.gameState === 'playing') {
            this.gameState = 'paused';
            this.music.pause();
        } else if (this.gameState === 'paused') {
            this.gameState = 'playing';
            this.music.play().catch(err => console.warn(err));
        }
        this.updateUI();
    }
    
    restartGame() {
        this.gameState = 'playing';
        this.score = 0;
        this.gameSpeed = 4;
        this.baseGameSpeed = 4;
        this.speedReduction = 0;
        this.obstacles = [];
        this.obstacleTimer = 0;
        this.leaves = [];
        this.leafTimer = 0;
        this.leafCollected = 0;
        this.currentTerrainLevel = 0;
        this.obstaclesCleared = 0;
        this.totalDistance = 0; // Reset distance tracking
        this.camera.y = 0; // Reset camera position
        this.camera.targetY = 0;
        this.player.y = this.baseGroundY - 50;
        this.player.targetY = this.baseGroundY - 50;
        this.player.velocityY = 0;
        this.player.jumping = false;
        this.player.grounded = true;
        this.groundOffset = 0;
        this.terrainTransition.active = false;
        
        // Reset weather
        this.weatherClouds = [];
        this.rainDrops = [];
        this.lightning.active = false;
        
        // Reset mountains
        this.mountainLayers = {
            farthest: [],
            far: [],
            near: [],
            nearest: []
        };
        this.mountainSpawnTimer = 0;
        
        this.init();
        this.initMountains();

        if (this.music.paused) {
            this.music.play().catch(err => console.warn(err));
        }
    }
    
    jump() {
        if (this.player.grounded) {
            this.player.velocityY = this.jumpPower;
            this.player.jumping = true;
            this.player.grounded = false;
            this.playSound('jump');
        }
    }
    
    // Check if we need to elevate terrain
    checkTerrainElevation() {
        if (this.obstaclesCleared > 0 && this.obstaclesCleared % 5 === 0 && !this.terrainTransition.active) {
            // Start terrain elevation
            this.currentTerrainLevel++;
            this.terrainTransition.active = true;
            this.terrainTransition.startY = this.getCurrentGroundY() + 10; // Previous level
            this.terrainTransition.targetY = this.getCurrentGroundY();
            this.terrainTransition.progress = 0;
            
            // Update player target Y for the new terrain level
            this.player.targetY = this.getCurrentGroundY() - this.player.height;
        }
    }
    
    // Update terrain transition animation
    updateTerrainTransition() {
        if (this.terrainTransition.active) {
            this.terrainTransition.progress += 1;
            
            if (this.terrainTransition.progress >= this.terrainTransition.duration) {
                this.terrainTransition.active = false;
                this.terrainTransition.progress = 0;
            }
        }
    }
    
    // Get interpolated ground Y during transitions
    getTransitionGroundY() {
        if (!this.terrainTransition.active) {
            return this.getCurrentGroundY();
        }
        
        const progress = this.terrainTransition.progress / this.terrainTransition.duration;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        return this.terrainTransition.startY + 
               (this.terrainTransition.targetY - this.terrainTransition.startY) * easeProgress;
    }
    
    // Update weather system
    updateWeather() {
        // Update weather clouds
        this.weatherClouds.forEach(cloud => {
            cloud.x -= cloud.speed;
            
            if (cloud.isStorm) {
                // Generate rain drops
                cloud.rainTimer++;
                if (cloud.rainTimer > 3) {
                    for (let i = 0; i < 3; i++) {
                        this.rainDrops.push({
                            x: cloud.x + Math.random() * cloud.width,
                            y: cloud.y + cloud.height,
                            speed: Math.random() * 3 + 2,
                            life: 100
                        });
                    }
                    cloud.rainTimer = 0;
                }
                
                // Generate lightning
                cloud.lightningTimer--;
                if (cloud.lightningTimer <= 0 && !this.lightning.active) {
                    this.createLightning(cloud.x + cloud.width / 2, cloud.y + cloud.height);
                    cloud.lightningTimer = Math.random() * 400 + 300;
                }
            }
            
            // Reset cloud when it goes off screen
            if (cloud.x + cloud.width < 0) {
                cloud.x = this.canvas.width + Math.random() * 200 + 100;
                cloud.y = Math.random() * 80 + 10;
                cloud.isStorm = Math.random() > 0.6;
                cloud.lightningTimer = Math.random() * 300 + 200;
            }
        });
        
        // Update rain drops
        this.rainDrops = this.rainDrops.filter(drop => {
            drop.y += drop.speed;
            drop.life--;
            return drop.life > 0 && drop.y < this.canvas.height;
        });
        
        // Update lightning
        if (this.lightning.active) {
            this.lightning.timer++;
            if (this.lightning.timer > this.lightning.duration) {
                this.lightning.active = false;
                this.lightning.timer = 0;
            }
        }
    }
    
    // Create lightning effect
    createLightning(startX, startY) {
        this.lightning.active = true;
        this.lightning.timer = 0;
        this.lightning.duration = 8;
        this.lightning.x = startX;
        this.lightning.segments = [];
        
        let currentX = startX;
        let currentY = startY;
        
        // Generate lightning segments
        for (let i = 0; i < 8; i++) {
            const nextX = currentX + (Math.random() - 0.5) * 30;
            const nextY = currentY + Math.random() * 25 + 15;
            
            this.lightning.segments.push({
                x1: currentX,
                y1: currentY,
                x2: nextX,
                y2: nextY
            });
            
            currentX = nextX;
            currentY = nextY;
            
            if (currentY > this.canvas.height) break;
        }
    }
    
    updateUI() {
        const startButton = document.getElementById('startButton');
        const pauseButton = document.getElementById('pauseButton');
        const climbButton = document.getElementById('climbButton');
        const restartButton = document.getElementById('restartButton');
        const scoreValue = document.getElementById('scoreValue');
        
        scoreValue.textContent = Math.floor(this.score).toString().padStart(5, '0');
        
        switch (this.gameState) {
            case 'start':
                startButton.style.display = 'block';
                pauseButton.style.display = 'none';
                climbButton.style.display = 'none';
                restartButton.style.display = 'none';
                break;
            case 'playing':
                startButton.style.display = 'none';
                pauseButton.style.display = 'block';
                climbButton.style.display = 'block';
                restartButton.style.display = 'none';
                break;
            case 'paused':
                pauseButton.textContent = 'RESUME';
                climbButton.style.display = 'none';
                break;
            case 'gameOver':
                startButton.style.display = 'none';
                pauseButton.style.display = 'none';
                climbButton.style.display = 'none';
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
        
        // Calculate game speed with terrain level and leaf reduction
        const baseSpeed = this.baseGameSpeed * Math.pow(1.1, this.currentTerrainLevel);
        this.gameSpeed = (baseSpeed + Math.floor(this.score / 100) * 0.3) * (1 - this.speedReduction);
        
        // Update terrain transition
        this.updateTerrainTransition();
        
        // Update camera to follow player elevation
        this.updateCamera();
        
        // Update mountains (parallax scrolling)
        this.updateMountains();
        
        // Update player physics
        this.player.velocityY += this.gravity;
        this.player.y += this.player.velocityY;
        
        // Ground collision with inclined terrain
        const playerGroundY = this.getGroundYAtPosition(this.player.x);
        if (this.player.y >= playerGroundY - this.player.height) {
            this.player.y = playerGroundY - this.player.height;
            this.player.velocityY = 0;
            this.player.jumping = false;
            this.player.grounded = true;
        }
        
        // Update total distance traveled and ground scrolling
        this.totalDistance += this.gameSpeed;
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
        
        // Update weather clouds and effects
        this.updateWeather();
        
        // Generate obstacles with different shapes and sizes
        this.obstacleTimer++;
        if (this.obstacleTimer > this.obstacleInterval) {
            // Create different types of obstacles
            const obstacleType = Math.floor(Math.random() * 5); // 5 different types
            
            let obstacle = {
                x: this.canvas.width,
                y: this.getGroundYAtPosition(this.canvas.width),
                passed: false,
                terrainLevel: this.currentTerrainLevel,
                type: obstacleType
            };
            
            // Define different obstacle shapes and sizes
            switch(obstacleType) {
                case 0: // Small rock
                    obstacle.width = 16;
                    obstacle.height = 24;
                    obstacle.y -= obstacle.height;
                    break;
                case 1: // Medium rock
                    obstacle.width = 24;
                    obstacle.height = 32;
                    obstacle.y -= obstacle.height;
                    break;
                case 2: // Wide but short rock
                    obstacle.width = 36;
                    obstacle.height = 20;
                    obstacle.y -= obstacle.height;
                    break;
                case 3: // Tall but narrow rock
                    obstacle.width = 16;
                    obstacle.height = 36;
                    obstacle.y -= obstacle.height;
                    break;
                case 4: // Super wide rock
                    obstacle.width = 64;
                    obstacle.height = 24;
                    obstacle.y -= obstacle.height;
                    break;
            }
            
            // Ensure obstacle height is not more than goat can jump
            // Max jump height is 120px, so obstacle height should be less than that
            if (obstacle.height > 100) {
                obstacle.height = 100;
                obstacle.y = this.getCurrentGroundY() - obstacle.height;
            }
            
            this.obstacles.push(obstacle);
            this.obstacleTimer = 0;
            
            // Obstacle interval decreases with terrain level (more frequent obstacles)
            const baseInterval = 80 - (this.currentTerrainLevel * 5);
            this.obstacleInterval = Math.random() * 30 + Math.max(baseInterval, 40) - Math.floor(this.score / 100) * 3;
        }
        
        // Generate leaves
        this.leafTimer++;
        if (this.leafTimer > this.leafInterval) {
            // Create a new leaf
            const leaf = {
                x: this.canvas.width,
                y: this.canvas.height - 50 - Math.random() * 60 - 60, // Spawn from half jump height to full jump height above ground
                width: 16,
                height: 12,
                collected: false,
                floatOffset: 0, // For floating animation
                floatSpeed: Math.random() * 0.1 + 0.05 // Floating speed
            };
            
            this.leaves.push(leaf);
            this.leafTimer = 0;
            
            // Randomize next leaf interval (between 5-15 seconds at current game speed)
            this.leafInterval = Math.random() * 300 + 300;
        }
        
        // Update obstacles
        this.obstacles = this.obstacles.filter(obstacle => {
            obstacle.x -= this.gameSpeed;
            
            // Check if player passed obstacle (for scoring and terrain elevation)
            if (!obstacle.passed && obstacle.x + obstacle.width < this.player.x) {
                obstacle.passed = true;
                this.obstaclesCleared++;
                this.checkTerrainElevation();
            }
            
            return obstacle.x + obstacle.width > 0;
        });
        
        // Update leaves
        this.leaves = this.leaves.filter(leaf => {
            leaf.x -= this.gameSpeed * 0.8; // Leaves move slightly slower than obstacles
            
            // Update floating animation
            leaf.floatOffset += leaf.floatSpeed;
            
            return leaf.x + leaf.width > 0 && !leaf.collected;
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
        
        // Check obstacle collisions
        for (let obstacle of this.obstacles) {
            if (playerRect.x < obstacle.x + obstacle.width &&
                playerRect.x + playerRect.width > obstacle.x &&
                playerRect.y < obstacle.y + obstacle.height &&
                playerRect.y + playerRect.height > obstacle.y) {
                this.gameState = 'gameOver';
                this.music.pause();
                this.music.currentTime = 0;
                this.playSound('gameOver');
                this.updateUI();
                break;
            }
        }
        
        // Check leaf collisions
        for (let leaf of this.leaves) {
            if (!leaf.collected &&
                playerRect.x < leaf.x + leaf.width &&
                playerRect.x + playerRect.width > leaf.x &&
                playerRect.y < leaf.y + leaf.height &&
                playerRect.y + playerRect.height > leaf.y) {
                
                // Collect the leaf
                leaf.collected = true;
                this.leafCollected++;
                this.playSound('collect');

                // Reduce game speed by 10% (max reduction of 50%)
                this.speedReduction = Math.min(this.speedReduction + 0.1, 0.5);
                
                // Add bonus points for collecting leaf
                this.score += 10;
            }
        }
    }
    
    render() {
        const ctx = this.ctx;
        
        // Clear canvas with sky gradient effect
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#E6F3FF');
        gradient.addColorStop(1, '#FFFFFF');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw dynamic parallax scrolling mountains
        this.drawMountains(ctx);
        
        // Draw mountain clouds
        this.clouds.forEach(cloud => {
            const cloudX = Math.floor(cloud.x / 4) * 4;
            const cloudY = Math.floor((cloud.y - this.camera.y * 0.1) / 4) * 4; // Slight parallax for clouds
            
            ctx.fillStyle = '#C0C0C0';
            // Draw cloud shape with rounded appearance
            ctx.fillRect(cloudX, cloudY, 40, 6);
            ctx.fillRect(cloudX + 6, cloudY - 4, 28, 4);
            ctx.fillRect(cloudX + 2, cloudY + 6, 36, 6);
            ctx.fillRect(cloudX + 8, cloudY + 12, 24, 4);
        });
        
        // Draw weather clouds (storm clouds) with proper cloud shape
        this.weatherClouds.forEach(cloud => {
            const cloudX = Math.floor(cloud.x / 4) * 4;
            const cloudY = Math.floor((cloud.y - this.camera.y * 0.15) / 4) * 4; // Parallax for weather clouds
            
            if (cloud.isStorm) {
                ctx.fillStyle = '#404040';
                // Dark storm clouds with cloud shape
                // Main cloud body
                ctx.fillRect(cloudX, cloudY, cloud.width, cloud.height);
                // Cloud puffs
                ctx.fillRect(cloudX - 5, cloudY + 8, cloud.width + 10, cloud.height - 8);
                ctx.fillRect(cloudX + 10, cloudY - 5, cloud.width - 20, 10);
                ctx.fillRect(cloudX + 20, cloudY - 8, cloud.width - 40, 8);
                
                // Lightning flashes make clouds brighter
                if (this.lightning.active && Math.abs(this.lightning.x - cloud.x) < cloud.width) {
                    ctx.fillStyle = '#808080';
                    ctx.fillRect(cloudX, cloudY, cloud.width, cloud.height);
                }
            } else {
                ctx.fillStyle = '#808080';
                // Regular gray clouds with cloud shape
                // Main cloud body
                ctx.fillRect(cloudX, cloudY, cloud.width * 0.8, cloud.height * 0.8);
                // Cloud puffs
                ctx.fillRect(cloudX - 5, cloudY + 5, cloud.width * 0.9, cloud.height * 0.6);
                ctx.fillRect(cloudX + 10, cloudY - 5, cloud.width * 0.6, cloud.height * 0.5);
            }
        });
        
        // Draw inclined terrain
        ctx.fillStyle = '#000000';
        
        // Draw ground segments that follow the incline
        const segmentWidth = 20;
        for (let x = this.groundOffset; x < this.canvas.width + 50; x += segmentWidth) {
            const groundY1 = this.getGroundYAtPosition(x) - this.camera.y;
            const groundY2 = this.getGroundYAtPosition(x + segmentWidth) - this.camera.y;
            
            // Draw main ground segment
            ctx.fillRect(x, groundY1, segmentWidth, 4);
            
            // Draw connecting slope if there's elevation change
            if (Math.abs(groundY2 - groundY1) > 0.5) {
                const steps = Math.ceil(Math.abs(groundY2 - groundY1));
                for (let i = 0; i < steps; i++) {
                    const stepX = x + (segmentWidth * i / steps);
                    const stepY = groundY1 + ((groundY2 - groundY1) * i / steps);
                    ctx.fillRect(stepX, stepY, 2, 2);
                }
            }
            
            // Add ground texture details
            ctx.fillRect(x + 5, groundY1 + 4, 10, 2);
            ctx.fillRect(x + 2, groundY1 - 2, 16, 2);
        }
        
        // Add rocky texture details on visible terrain
        for (let x = this.groundOffset; x < this.canvas.width + 50; x += 45) {
            const groundY = this.getGroundYAtPosition(x) - this.camera.y;
            ctx.fillRect(x + 10, groundY - 6, 8, 6);
            ctx.fillRect(x + 25, groundY - 4, 6, 4);
        }
        
        // Draw leaves
        this.leaves.forEach(leaf => {
            if (!leaf.collected) {
                const lx = Math.floor(leaf.x / 2) * 2;
                const ly = Math.floor((leaf.y + Math.sin(leaf.floatOffset) * 5 - this.camera.y) / 2) * 2; // Floating animation with camera
                
                ctx.fillStyle = '#2E7D32'; // Green color for leaf
                // Draw leaf shape (pixelated)
                ctx.fillRect(lx + 4, ly, 8, 2);
                ctx.fillRect(lx + 2, ly + 2, 12, 2);
                ctx.fillRect(lx, ly + 4, 16, 2);
                ctx.fillRect(lx + 2, ly + 6, 12, 2);
                ctx.fillRect(lx + 4, ly + 8, 8, 2);
                ctx.fillRect(lx + 6, ly + 10, 4, 2);
                
                // Leaf stem
                ctx.fillStyle = '#5D4037'; // Brown color for stem
                ctx.fillRect(lx + 7, ly + 10, 2, 2);
            }
        });
        
        // Draw player (Mountain Goat) - pixelated monochrome style
        ctx.fillStyle = '#000000';
        const px = Math.floor(this.player.x / 2) * 2;
        const py = Math.floor((this.player.y - this.camera.y) / 2) * 2;
        
        // Goat body (pixelated)
        ctx.fillRect(px + 8, py + 20, 24, 16);
        // Goat head
        ctx.fillRect(px + 24, py + 12, 12, 12);
        // Goat horns
        ctx.fillRect(px + 26, py + 8, 2, 6);
        ctx.fillRect(px + 32, py + 8, 2, 6);
        // Goat legs - always show legs but adjust position based on jumping
        if (this.player.grounded) {
            // Legs when on ground
            ctx.fillRect(px + 10, py + 36, 4, 12);
            ctx.fillRect(px + 16, py + 36, 4, 12);
            ctx.fillRect(px + 22, py + 36, 4, 12);
            ctx.fillRect(px + 28, py + 36, 4, 12);
        } else {
            // Legs when jumping - bent position
            ctx.fillRect(px + 10, py + 30, 4, 8);
            ctx.fillRect(px + 16, py + 32, 4, 6);
            ctx.fillRect(px + 22, py + 32, 4, 6);
            ctx.fillRect(px + 28, py + 30, 4, 8);
        }
        // Goat tail
        ctx.fillRect(px + 4, py + 24, 6, 4);
        // Eye
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(px + 28, py + 16, 3, 3);
        ctx.fillStyle = '#000000';
        ctx.fillRect(px + 29, py + 17, 1, 1);
        // Beard
        ctx.fillRect(px + 24, py + 20, 2, 6);
        
        // Draw obstacles (Rock formations) - different shapes and sizes
        ctx.fillStyle = '#000000';
        this.obstacles.forEach(obstacle => {
            const ox = Math.floor(obstacle.x / 2) * 2;
            const oy = Math.floor((obstacle.y - this.camera.y) / 2) * 2;
            
            // Draw different rock shapes based on obstacle type
            switch(obstacle.type) {
                case 0: // Small rock
                    // Main rock body
                    ctx.fillRect(ox + 2, oy, 12, 24);
                    // Rock top
                    ctx.fillRect(ox, oy + 4, 16, 8);
                    // Rock base
                    ctx.fillRect(ox + 4, oy + 20, 8, 4);
                    // Rock texture
                    ctx.fillRect(ox + 6, oy + 10, 4, 4);
                    break;
                    
                case 1: // Medium rock
                    // Main rock body
                    ctx.fillRect(ox + 2, oy, 20, 32);
                    // Rock top
                    ctx.fillRect(ox, oy + 6, 24, 10);
                    // Rock base
                    ctx.fillRect(ox + 4, oy + 28, 16, 4);
                    // Rock texture
                    ctx.fillRect(ox + 6, oy + 14, 4, 4);
                    ctx.fillRect(ox + 14, oy + 20, 4, 4);
                    break;
                    
                case 2: // Wide but short rock
                    // Main rock body
                    ctx.fillRect(ox, oy, 36, 20);
                    // Rock top
                    ctx.fillRect(ox + 4, oy - 4, 28, 8);
                    // Rock base
                    ctx.fillRect(ox + 2, oy + 16, 32, 4);
                    // Rock texture
                    ctx.fillRect(ox + 8, oy + 6, 6, 4);
                    ctx.fillRect(ox + 22, oy + 6, 6, 4);
                    break;
                    
                case 3: // Tall but narrow rock
                    // Main rock body
                    ctx.fillRect(ox + 2, oy, 12, 36);
                    // Rock top
                    ctx.fillRect(ox, oy + 4, 16, 8);
                    // Rock middle
                    ctx.fillRect(ox + 4, oy + 16, 8, 8);
                    // Rock base
                    ctx.fillRect(ox + 2, oy + 32, 12, 4);
                    // Rock texture
                    ctx.fillRect(ox + 4, oy + 12, 2, 2);
                    ctx.fillRect(ox + 10, oy + 24, 2, 2);
                    break;

                case 4: // Super wide rock
                    // Main rock body
                    ctx.fillRect(ox, oy, 60, 28);
                    // Rock top
                    ctx.fillRect(ox - 4, oy + 4, 68, 10);
                    // Rock middle
                    ctx.fillRect(ox + 6, oy + 12, 48, 10);
                    // Rock base
                    ctx.fillRect(ox + 4, oy + 24, 52, 4);
                    // Rock texture
                    ctx.fillRect(ox + 10, oy + 8, 6, 4);
                    ctx.fillRect(ox + 30, oy + 14, 8, 4);
                    ctx.fillRect(ox + 46, oy + 18, 6, 4);
                    break;
            }
        });
        
        // Draw rain drops
        ctx.fillStyle = '#6B9BD1';
        this.rainDrops.forEach(drop => {
            ctx.fillRect(Math.floor(drop.x), Math.floor(drop.y - this.camera.y), 1, 4);
        });
        
        // Draw lightning
        if (this.lightning.active) {
            ctx.strokeStyle = '#FFFF00';
            ctx.lineWidth = 2;
            ctx.beginPath();
            
            this.lightning.segments.forEach(segment => {
                ctx.moveTo(segment.x1, segment.y1 - this.camera.y);
                ctx.lineTo(segment.x2, segment.y2 - this.camera.y);
            });
            
            ctx.stroke();
            
            // Lightning glow effect
            if (this.lightning.timer < 4) {
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 4;
                ctx.beginPath();
                
                this.lightning.segments.forEach(segment => {
                    ctx.moveTo(segment.x1, segment.y1 - this.camera.y);
                    ctx.lineTo(segment.x2, segment.y2 - this.camera.y);
                });
                
                ctx.stroke();
            }
        }
        
        // Draw terrain level indicator with difficulty info
        if (this.currentTerrainLevel > 0) {
            ctx.fillStyle = '#000000';
            ctx.font = '12px monospace';
            ctx.textAlign = 'left';
            ctx.fillText(`LEVEL ${this.currentTerrainLevel + 1}`, 10, 30);
            const speedMultiplier = Math.round(Math.pow(1.1, this.currentTerrainLevel) * 100 * (1 - this.speedReduction));
            ctx.fillText(`SPEED: ${speedMultiplier}%`, 10, 45);
        }
        
        // Draw leaf collection indicator
        if (this.leafCollected > 0) {
            ctx.fillStyle = '#2E7D32';
            ctx.font = '12px monospace';
            ctx.textAlign = 'left';
            ctx.fillText(`LEAVES: ${this.leafCollected}`, 10, 60);
            ctx.fillText(`SLOW: ${Math.round(this.speedReduction * 100)}%`, 10, 75);
        }
        
        // Draw game state overlays
        if (this.gameState === 'start') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#000000';
            ctx.font = '32px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('ROCK CLIMBING', this.canvas.width / 2, this.canvas.height / 2 - 30);
            ctx.font = '16px monospace';
            ctx.fillText('Press SPACE to climb', this.canvas.width / 2, this.canvas.height / 2 + 20);
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
            if (this.currentTerrainLevel > 0) {
                ctx.fillText(`REACHED LEVEL ${this.currentTerrainLevel + 1}`, this.canvas.width / 2, this.canvas.height / 2 + 40);
            }
            if (this.leafCollected > 0) {
                ctx.fillText(`COLLECTED ${this.leafCollected} LEAVES`, this.canvas.width / 2, this.canvas.height / 2 + 60);
            }
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
    new RockClimbingGame();
});