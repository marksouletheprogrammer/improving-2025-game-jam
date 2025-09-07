// Terrain Chunk Management System
class TerrainChunkManager {
    constructor(game) {
        this.game = game;
        this.chunks = [];
        this.currentChunk = null;
        this.chunkWidth = 0;
        this.chunkHeight = 0;
        this.debugMode = false;
        this.chunksLoaded = false;
        
        // Terrain positioning
        this.flatTerrainLength = 800; // Initial flat terrain before first chunk
        this.chunkStartX = this.flatTerrainLength;
        this.totalChunkWidth = 0;
        
        // Load chunks asynchronously
        this.loadChunks();
    }

    // Load all PNG chunks from assets/chunks folder
    async loadChunks() {
        try {
            // For now, load just one chunk as specified
            console.log('Attempting to load terrain chunk: assets/chunks/chunk1.png');
            await this.loadChunk('assets/chunks/chunk1.png', 0);
            console.log('Terrain chunk loaded successfully');
            this.chunksLoaded = true;
        } catch (error) {
            console.warn('No terrain chunks found, using fallback terrain. Error:', error);
            this.chunksLoaded = false;
        }
    }

    // Load a single chunk PNG file
    async loadChunk(imagePath, index) {
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        return new Promise((resolve, reject) => {
            img.onload = () => {
                try {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    
                    const pixelData = ctx.getImageData(0, 0, img.width, img.height);
                    
                    const chunk = {
                        index: index,
                        width: img.width,
                        height: img.height,
                        pixelData: pixelData,
                        startX: this.chunkStartX + this.totalChunkWidth,
                        endX: this.chunkStartX + this.totalChunkWidth + img.width
                    };
                    
                    this.chunks.push(chunk);
                    this.totalChunkWidth += img.width;
                    
                    // Set dimensions from first chunk
                    if (index === 0) {
                        this.chunkWidth = img.width;
                        this.chunkHeight = img.height;
                    }
                    
                    console.log(`Terrain chunk ${index} loaded: ${img.width}x${img.height} pixels`);
                    resolve();
                } catch (error) {
                    console.error('Error processing chunk image:', error);
                    reject(error);
                }
            };
            
            img.onerror = (event) => {
                console.error('Failed to load image:', imagePath, event);
                reject(new Error(`Failed to load chunk: ${imagePath}`));
            };
            
            img.src = imagePath;
        });
    }

    // Get terrain Y position at world X coordinate
    getTerrainYAtWorldX(worldX) {
        // If chunks haven't loaded yet, use fallback terrain
        if (!this.chunksLoaded || this.chunks.length === 0) {
            return this.game.getCurrentGroundY(worldX);
        }
        
        // Before chunks: flat terrain following elevation line
        if (worldX < this.chunkStartX) {
            return this.game.getCurrentGroundY(worldX);
        }
        
        // After chunks: flat terrain following elevation line
        if (worldX >= this.chunkStartX + this.totalChunkWidth) {
            return this.game.getCurrentGroundY(worldX);
        }
        
        // Within chunk range: use chunk data
        const chunk = this.getChunkAtWorldX(worldX);
        if (!chunk) {
            return this.game.getCurrentGroundY(worldX);
        }
        
        return this.getChunkTerrainY(chunk, worldX);
    }

    // Find which chunk contains the given world X coordinate
    getChunkAtWorldX(worldX) {
        return this.chunks.find(chunk => worldX >= chunk.startX && worldX < chunk.endX);
    }

    // Get terrain Y from chunk pixel data
    getChunkTerrainY(chunk, worldX) {
        // Convert world X to chunk pixel X
        const chunkPixelX = Math.floor(worldX - chunk.startX);
        
        if (chunkPixelX < 0 || chunkPixelX >= chunk.width) {
            return this.game.getCurrentGroundY(worldX);
        }
        
        // Scan from top to bottom to find first black pixel
        for (let y = 0; y < chunk.height; y++) {
            const pixelIndex = (y * chunk.width + chunkPixelX) * 4;
            const r = chunk.pixelData.data[pixelIndex];
            const g = chunk.pixelData.data[pixelIndex + 1];
            const b = chunk.pixelData.data[pixelIndex + 2];
            
            // Check if pixel is black (terrain)
            if (r < 50 && g < 50 && b < 50) {
                // Convert chunk pixel Y to world Y, respecting elevation line
                const baseElevation = this.game.getCurrentGroundY(worldX);
                const chunkRatio = y / chunk.height;
                const playAreaHeight = this.game.canvas.height - 100; // Account for UI space
                const terrainY = (chunkRatio * playAreaHeight) + 50; // 50px from top for UI
                
                // Blend with elevation line for natural progression
                return Math.min(terrainY, baseElevation);
            }
        }
        
        // No terrain found, use flat ground at elevation line
        return this.game.getCurrentGroundY(worldX);
    }

    // Check if terrain chunks are loaded
    hasChunks() {
        const hasChunks = this.chunks.length > 0;
        if (!hasChunks) {
            console.log('No chunks loaded yet, chunks array length:', this.chunks.length);
        }
        return hasChunks;
    }

    // Debug visualization
    drawDebugChunks(ctx) {
        if (!this.debugMode || this.chunks.length === 0) return;
        
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#00ff00';
        
        // Draw chunk boundaries
        this.chunks.forEach(chunk => {
            const screenStartX = chunk.startX - this.game.camera.x;
            const screenEndX = chunk.endX - this.game.camera.x;
            
            if (screenEndX > 0 && screenStartX < this.game.canvas.width) {
                ctx.fillRect(screenStartX, 0, chunk.width, 10);
            }
        });
        
        ctx.restore();
    }

    // Toggle debug mode
    toggleDebug() {
        this.debugMode = !this.debugMode;
        console.log(`Terrain chunk debug mode: ${this.debugMode ? 'ON' : 'OFF'}`);
    }
}

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
            x: 0, // Current camera X offset
            y: 0, // Current camera Y offset
            targetX: 0, // Target camera X position
            targetY: 0, // Target camera Y position
            smoothing: 0.1, // Camera smoothing factor (0.1 = smooth, 1.0 = instant)
            threshold: this.canvas.height * 0.5, // Trigger camera movement when player above 50% height
            fixedScreenX: 150 // Fixed screen position for goat (pixels from left)
        };
        
        // Player (Mountain Goat)
        this.player = {
            x: 100,
            y: this.baseGroundY - 50,
            width: 40,
            height: 50,
            velocityX: 0, // Horizontal velocity for realistic movement
            velocityY: 0,
            jumping: false,
            grounded: true,
            state: 'idle', // 'idle', 'airborne'
            targetY: this.baseGroundY - 50, // For smooth terrain transitions
            jumpHeight: 120, // Maximum jump height
            landingPose: true, // Always land on feet
            aimAngle: 0, // Current aim angle from mouse
            flipState: 'normal' // 'normal', 'frontflip', 'backflip'
        };
        
        // Physics
        this.gravity = 0.8;
        this.jumpPowerMin = 10; // Minimum jump power
        this.jumpPowerMax = 15; // Maximum jump power
        this.minJumpAngle = 45; // Minimum jump angle in degrees (increased for more height)
        this.maxJumpAngle = 80; // Maximum jump angle in degrees (increased for more height)
        
        // Power Control System - Configurable timing constants
        this.POWER_INDICATOR_DELAY = 100; // ms before indicator shows
        this.POWER_LEVEL_1_TIME = 500;   // weak jump
        this.POWER_LEVEL_2_TIME = 1500;   // normal jump
        this.POWER_LEVEL_3_TIME = 2500;   // big jump
        this.POWER_CYCLE_RESET = 4000;    // cycle back to level 1
        
        // Power state management
        this.powerCharging = false;
        this.powerStartTime = 0;
        this.currentPowerLevel = 1;
        this.showPowerIndicator = false;
        
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
        
        // Particle system for landing effects
        this.particles = [];
        
        // Mouse control system
        this.mouse = {
            x: 0,
            y: 0,
            isTracking: false
        };
        
        // Terrain transition
        this.terrainTransition = {
            active: false,
            startY: 0,
            targetY: 0,
            progress: 0,
            duration: 60 // frames for smooth transition
        };
        
        // Terrain chunk management system
        this.terrainChunkManager = new TerrainChunkManager(this);
        
        // Debug flags
        this.renderObstacles = false; // Set to false to hide obstacles for debugging
        this.enableObstacleCollision = false; // Set to false to disable obstacle collision for debugging
        
        this.init();
        this.initMountains();
        this.setupEventListeners();
        this.gameLoop();
    }
    
    // Create dirt particles when goat lands
    createLandingParticles(x, y) {
        // Create 15-25 dirt particles around the landing point
        const particleCount = Math.floor(Math.random() * 11) + 15;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * 60, // Spread around goat's feet
                y: y - 5, // Start slightly above ground
                velocityX: (Math.random() - 0.5) * 6, // Random horizontal velocity
                velocityY: -(Math.random() * 3 + 1), // Lower upward velocity (1-4 instead of 2-8)
                life: Math.random() * 20 + 15, // 15-35 frames lifespan
                maxLife: Math.random() * 20 + 15,
                size: Math.floor(Math.random() * 3) + 2, // 2-4 pixel size
                gravity: 0.4 // Slightly more gravity for lower arc
            });
        }
    }
    
    // Update particle system
    updateParticles() {
        this.particles = this.particles.filter(particle => {
            // Apply physics
            particle.velocityY += particle.gravity;
            particle.x += particle.velocityX;
            particle.y += particle.velocityY;
            
            // Ground collision detection
            const groundY = this.getGroundYAtPosition(particle.x);
            if (particle.y >= groundY) {
                particle.y = groundY; // Stop at ground level
                particle.velocityY = 0; // Stop vertical movement
                particle.velocityX *= 0.8; // Reduce horizontal movement on ground
            }
            
            // Reduce life
            particle.life--;
            
            // Add some air resistance
            particle.velocityX *= 0.98;
            
            // Remove dead particles
            return particle.life > 0;
        });
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
        return this.terrainChunkManager.getTerrainYAtWorldX(worldX);
    }
    
    // Update camera to keep player at fixed screen position
    updateCamera() {
        // Horizontal camera tracking - keep goat at fixed screen position
        // Camera X should be: player world X - desired screen X
        this.camera.targetX = this.player.x - this.camera.fixedScreenX;
        
        // Vertical camera tracking - if player is above the threshold (50% of screen height), move camera up
        const playerScreenY = this.player.y - this.camera.y;
        if (playerScreenY < this.camera.threshold) {
            // Calculate how much to move camera up to keep player at threshold
            const targetOffset = this.player.y - this.camera.threshold;
            this.camera.targetY = Math.max(0, targetOffset); // Don't go below 0
        }
        
        // Smooth camera movement with higher smoothing to reduce sliding appearance
        const diffX = this.camera.targetX - this.camera.x;
        const diffY = this.camera.targetY - this.camera.y;
        
        // Use faster smoothing (0.3 instead of 0.1) to reduce lag and sliding effect
        const fastSmoothing = 0.3;
        this.camera.x += diffX * fastSmoothing;
        this.camera.y += diffY * this.camera.smoothing;
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
        
        // Update mountain spawn timer only when goat is airborne
        const mountainScrollSpeed = this.player.state === 'airborne' ? this.player.velocityX : 0;
        this.mountainSpawnTimer += mountainScrollSpeed;
        
        Object.keys(this.mountainLayers).forEach(layerName => {
            const config = layerConfigs[layerName];
            const mountains = this.mountainLayers[layerName];
            
            // Move mountains based on their layer speed and goat state
            mountains.forEach(mountain => {
                mountain.x -= mountainScrollSpeed * config.speed;
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
        climbButton.addEventListener('click', () => this.startPowerCharging());
        restartButton.addEventListener('click', () => this.restartGame());
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                if (this.gameState === 'start') {
                    this.startGame();
                } else if (this.gameState === 'playing') {
                    this.startPowerCharging();
                } else if (this.gameState === 'gameOver') {
                    this.restartGame();
                }
            }
            if (e.code === 'KeyP' && this.gameState === 'playing') {
                this.togglePause();
            }
            if (e.code === 'KeyC') {
                // Toggle terrain chunk debug visualization
                this.terrainChunkManager.toggleDebug();
            }
        });
        
        // Add keyup handler for power system
        document.addEventListener('keyup', (e) => {
            if (e.code === 'Space' && this.gameState === 'playing') {
                this.executeJump();
            }
        });
        
        // Mouse controls for angle selection
        this.canvas.addEventListener('mousemove', (e) => {
            if (this.gameState === 'playing') {
                const rect = this.canvas.getBoundingClientRect();
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;
            }
        });
        this.updateAimAngle();
        
        this.canvas.addEventListener('mouseenter', () => {
            this.mouse.isTracking = true;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.isTracking = false;
        });
    }
    
    // Update power charging system
    updatePowerCharging() {
        if (this.powerCharging) {
            const holdDuration = Date.now() - this.powerStartTime;
            
            // Show power indicator after delay
            if (holdDuration >= this.POWER_INDICATOR_DELAY) {
                this.showPowerIndicator = true;
                
                // Calculate current power level with cycling
                const cycleTime = holdDuration % this.POWER_CYCLE_RESET;
                if (cycleTime < this.POWER_LEVEL_1_TIME) {
                    this.currentPowerLevel = 1;
                } else if (cycleTime < this.POWER_LEVEL_2_TIME) {
                    this.currentPowerLevel = 2;
                } else if (cycleTime < this.POWER_LEVEL_3_TIME) {
                    this.currentPowerLevel = 3;
                } else {
                    this.currentPowerLevel = 1; // Reset to level 1 after max time
                }
            }
        }
    }
    
    // Update aim angle based on mouse position
    updateAimAngle() {
        if (this.player.state === 'idle' && this.player.grounded && this.mouse.isTracking) {
            // Get goat's screen position
            const goatScreenX = this.player.x - this.camera.x;
            const goatScreenY = this.player.y - this.camera.y;
            
            // Calculate angle from goat to mouse
            const deltaX = this.mouse.x - goatScreenX;
            const deltaY = this.mouse.y - goatScreenY;
            
            // Calculate angle in radians (atan2 gives -π to π)
            this.player.aimAngle = Math.atan2(deltaY, deltaX);
        }
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
        this.camera.x = 0; // Reset camera position
        this.camera.y = 0;
        this.camera.targetX = 0;
        this.camera.targetY = 0;
        this.player.x = 100; // Reset player X position
        this.player.y = this.baseGroundY - this.player.height;
        this.player.targetY = this.baseGroundY - this.player.height;
        this.player.velocityX = 0;
        this.player.velocityY = 0;
        this.player.jumping = false;
        this.player.grounded = true;
        this.player.state = 'idle';
        this.player.aimAngle = 0;
        this.player.flipState = 'normal';
        this.groundOffset = 0;
        this.terrainTransition.active = false;
        
        // Reset weather
        this.weatherClouds = [];
        this.rainDrops = [];
        this.lightning.active = false;
        
        // Reset particles
        this.particles = [];
        
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
    
    // Power charging methods
    startPowerCharging() {
        if (this.player.grounded && this.player.state === 'idle' && !this.powerCharging) {
            this.powerCharging = true;
            this.powerStartTime = Date.now();
            this.currentPowerLevel = 1;
            this.showPowerIndicator = false;
        }
    }
    
    executeJump() {
        if (this.powerCharging) {
            const holdDuration = Date.now() - this.powerStartTime;
            
            // Determine power level based on hold duration
            if (holdDuration < this.POWER_INDICATOR_DELAY) {
                this.currentPowerLevel = 1; // Early release = weak jump
            } else {
                // Calculate power level with cycling
                const cycleTime = holdDuration % this.POWER_CYCLE_RESET;
                if (cycleTime < this.POWER_LEVEL_1_TIME) {
                    this.currentPowerLevel = 1;
                } else if (cycleTime < this.POWER_LEVEL_2_TIME) {
                    this.currentPowerLevel = 2;
                } else if (cycleTime < this.POWER_LEVEL_3_TIME) {
                    this.currentPowerLevel = 3;
                } else {
                    this.currentPowerLevel = 1; // Reset to level 1 after max time
                }
            }
            
            // Reset power state
            this.powerCharging = false;
            this.showPowerIndicator = false;
            
            // Execute jump with calculated power level
            this.jump(this.currentPowerLevel);
        }
    }
    
    jump(powerLevel = 1) {
        if (this.player.grounded && this.player.state === 'idle') {
            // Use mouse-selected angle for directional jump mechanics
            const jumpAngle = this.player.aimAngle;
            // Calculate base power with power level multiplier
            const basePowerRaw = Math.random() * (this.jumpPowerMax - this.jumpPowerMin) + this.jumpPowerMin;
            let powerMultiplier = 1.0;
            
            // Apply power level scaling
            switch(powerLevel) {
                case 1: powerMultiplier = 0.7; break; // Weak jump
                case 2: powerMultiplier = 1.0; break; // Normal jump
                case 3: powerMultiplier = 1.4; break; // Big jump
            }
            
            const basePower = basePowerRaw * powerMultiplier;
            
            // Convert angle to degrees for easier calculation
            const angleInDegrees = jumpAngle * 180 / Math.PI;
            
            // Calculate directional power multipliers based on angle
            const horizontalComponent = Math.abs(Math.cos(jumpAngle));
            const verticalComponent = Math.abs(Math.sin(jumpAngle));
            
            // 12-direction system with sliding multipliers
            // Normalize angle to 0-360 range for easier calculation
            let normalizedAngle = angleInDegrees;
            if (normalizedAngle < 0) normalizedAngle += 360;
            
            // Calculate multipliers based on 12 directions (30° segments)
            // Each direction has optimized horizontal/vertical emphasis
            let horizontalMultiplier = 1.0;
            let verticalMultiplier = 1.0;
            
            // Right (0°): Max horizontal, min vertical
            if (normalizedAngle >= 345 || normalizedAngle <= 15) {
                horizontalMultiplier = 2.0;
                verticalMultiplier = 1.0;
            }
            // Right-Down (30°): High horizontal, low vertical
            else if (normalizedAngle > 15 && normalizedAngle <= 45) {
                horizontalMultiplier = 1.9;
                verticalMultiplier = 1.1;
            }
            // Down-Right (60°): Medium horizontal, medium vertical
            else if (normalizedAngle > 45 && normalizedAngle <= 75) {
                horizontalMultiplier = 1.7;
                verticalMultiplier = 1.2;
            }
            // Down (90°): Medium horizontal, medium vertical
            else if (normalizedAngle > 75 && normalizedAngle <= 105) {
                horizontalMultiplier = 1.5;
                verticalMultiplier = 1.3;
            }
            // Down-Left (120°): Medium horizontal, medium vertical
            else if (normalizedAngle > 105 && normalizedAngle <= 135) {
                horizontalMultiplier = 1.7;
                verticalMultiplier = 1.2;
            }
            // Left-Down (150°): High horizontal, low vertical
            else if (normalizedAngle > 135 && normalizedAngle <= 165) {
                horizontalMultiplier = 1.9;
                verticalMultiplier = 1.1;
            }
            // Left (180°): Max horizontal, min vertical
            else if (normalizedAngle > 165 && normalizedAngle <= 195) {
                horizontalMultiplier = 2.0;
                verticalMultiplier = 1.0;
            }
            // Left-Up (210°): High horizontal, low vertical
            else if (normalizedAngle > 195 && normalizedAngle <= 225) {
                horizontalMultiplier = 1.9;
                verticalMultiplier = 1.1;
            }
            // Up-Left (240°): Low horizontal, high vertical
            else if (normalizedAngle > 225 && normalizedAngle <= 255) {
                horizontalMultiplier = 1.2;
                verticalMultiplier = 1.6;
            }
            // Up (270°): Min horizontal, max vertical
            else if (normalizedAngle > 255 && normalizedAngle <= 285) {
                horizontalMultiplier = 0.9;
                verticalMultiplier = 1.8;
            }
            // Up-Right (300°): Low horizontal, high vertical
            else if (normalizedAngle > 285 && normalizedAngle <= 315) {
                horizontalMultiplier = 1.2;
                verticalMultiplier = 1.6;
            }
            // Right-Up (330°): High horizontal, low vertical
            else if (normalizedAngle > 315 && normalizedAngle < 345) {
                horizontalMultiplier = 1.9;
                verticalMultiplier = 1.1;
            }
            
            // Apply sliding scale based on how close to pure direction
            const horizontalPower = basePower * horizontalComponent * horizontalMultiplier;
            const verticalPower = basePower * verticalComponent * verticalMultiplier;
            
            // Calculate final velocity components
            this.player.velocityX = horizontalPower * Math.cos(jumpAngle);
            this.player.velocityY = verticalPower * Math.sin(jumpAngle); // Positive Y is downward in canvas
            
            // Check for extreme downward angles for flip animation
            if (Math.abs(angleInDegrees) > 135 || (angleInDegrees > 45 && angleInDegrees < 135)) {
                // Extreme downward angle - determine flip direction
                if (jumpAngle > 0) {
                    this.player.flipState = 'frontflip';
                } else {
                    this.player.flipState = 'backflip';
                }
            } else {
                this.player.flipState = 'normal';
            }
            
            // Update player state
            this.player.jumping = true;
            this.player.grounded = false;
            this.player.state = 'airborne';
            this.player.landingPose = false;
            
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
        
        // Update player physics based on state
        if (this.player.state === 'airborne') {
            // Apply gravity only to Y velocity
            this.player.velocityY += this.gravity;
            
            // Update position with both X and Y velocity
            this.player.x += this.player.velocityX;
            this.player.y += this.player.velocityY;
            
            // Ground collision with inclined terrain
            const playerGroundY = this.getGroundYAtPosition(this.player.x);
            if (this.player.y >= playerGroundY - this.player.height) {
                // Landing - ensure goat always lands on feet and stops immediately
                this.player.y = playerGroundY - this.player.height;
                this.player.velocityX = 0;
                this.player.velocityY = 0;
                this.player.jumping = false;
                this.player.grounded = true;
                this.player.state = 'idle';
                this.player.landingPose = true;
                this.player.flipState = 'normal'; // Reset flip state on landing
                
                // Create dirt particles on landing
                this.createLandingParticles(this.player.x, this.player.y + this.player.height);
                
                // Stop all horizontal movement immediately
                return; // Exit early to prevent any further position updates
            }
        }
        
        // Update total distance traveled and ground scrolling only when goat is airborne
        if (!this.player.grounded) {
            this.totalDistance += Math.abs(this.player.velocityX) * 0.1;
        }
        
        // Update power charging system
        this.updatePowerCharging();
        
        // Update camera to follow player
        this.updateCamera();
        
        // Update aim angle
        this.updateAimAngle();
        
        // Update clouds - move slowly when goat is idle, normal speed when airborne
        const cloudSpeedMultiplier = this.player.state === 'idle' ? 0.1 : 1.0;
        this.clouds.forEach(cloud => {
            cloud.x -= cloud.speed * cloudSpeedMultiplier;
            if (cloud.x + cloud.width < 0) {
                cloud.x = this.canvas.width + Math.random() * 100;
                cloud.y = Math.random() * 100 + 20;
            }
        });
        
        // Update weather clouds and effects
        this.updateWeather();
        
        // Update particle system
        this.updateParticles();
        
        // Generate obstacles with different shapes and sizes
        this.obstacleTimer++;
        if (this.obstacleTimer > this.obstacleInterval) {
            // Create different types of obstacles
            const obstacleType = Math.floor(Math.random() * 5); // 5 different types
            
            // Spawn obstacle off-screen to the right in world coordinates
            const spawnX = this.camera.x + this.canvas.width + 50;
            let obstacle = {
                x: spawnX,
                y: this.getGroundYAtPosition(spawnX),
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
                obstacle.y = this.getGroundYAtPosition(obstacle.x) - obstacle.height;
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
            // Create a new leaf - spawn off-screen to the right in world coordinates
            const leafSpawnX = this.camera.x + this.canvas.width + 50;
            const leaf = {
                x: leafSpawnX,
                y: this.getGroundYAtPosition(leafSpawnX) - 50 - Math.random() * 60 - 60, // Spawn from half jump height to full jump height above ground
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
        
        // Update obstacles - only move when goat is airborne
        const obstacleScrollSpeed = this.player.state === 'airborne' ? this.player.velocityX : 0;
        this.obstacles = this.obstacles.filter(obstacle => {
            obstacle.x -= obstacleScrollSpeed;
            
            // Check if player passed obstacle (for scoring and terrain elevation)
            if (!obstacle.passed && obstacle.x + obstacle.width < this.player.x) {
                obstacle.passed = true;
                this.obstaclesCleared++;
                this.checkTerrainElevation();
            }
            
            return obstacle.x + obstacle.width > 0;
        });
        
        // Update leaves - only move when goat is airborne
        this.leaves = this.leaves.filter(leaf => {
            leaf.x -= obstacleScrollSpeed * 0.8; // Leaves move slightly slower than obstacles
            
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
        if (this.enableObstacleCollision) {
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
            const worldX = x + this.camera.x;
            const groundY1 = this.getGroundYAtPosition(worldX) - this.camera.y;
            const groundY2 = this.getGroundYAtPosition(worldX + segmentWidth) - this.camera.y;
            
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
            const worldX = x + this.camera.x;
            const groundY = this.getGroundYAtPosition(worldX) - this.camera.y;
            ctx.fillRect(x + 10, groundY - 6, 8, 6);
            ctx.fillRect(x + 25, groundY - 4, 6, 4);
        }
        
        // Draw leaves
        this.leaves.forEach(leaf => {
            if (!leaf.collected) {
                const lx = Math.floor((leaf.x - this.camera.x) / 2) * 2;
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
        
        // Draw aim arrow when goat is idle
        if (this.player.state === 'idle' && this.player.grounded && this.mouse.isTracking) {
            const goatScreenX = Math.floor((this.player.x - this.camera.x) / 2) * 2;
            const goatScreenY = Math.floor((this.player.y - this.camera.y) / 2) * 2;
            
            // Calculate arrow position floating above/near goat
            const goatCenterX = goatScreenX + this.player.width / 2;
            const goatCenterY = goatScreenY + this.player.height / 2;
            
            // Offset triangle to float detached from goat
            const triangleOffset = 25;
            const triangleCenterX = goatCenterX + Math.cos(this.player.aimAngle) * triangleOffset;
            const triangleCenterY = goatCenterY + Math.sin(this.player.aimAngle) * triangleOffset;
            
            // Set transparency
            ctx.globalAlpha = 0.7;
            
            // Draw triangle pointing in selected direction
            const triangleSize = 12;
            
            // Calculate triangle points
            const pointX = triangleCenterX + Math.cos(this.player.aimAngle) * triangleSize;
            const pointY = triangleCenterY + Math.sin(this.player.aimAngle) * triangleSize;
            
            const baseAngle1 = this.player.aimAngle + Math.PI * 0.75;
            const baseAngle2 = this.player.aimAngle - Math.PI * 0.75;
            
            const base1X = triangleCenterX + Math.cos(baseAngle1) * (triangleSize * 0.6);
            const base1Y = triangleCenterY + Math.sin(baseAngle1) * (triangleSize * 0.6);
            
            const base2X = triangleCenterX + Math.cos(baseAngle2) * (triangleSize * 0.6);
            const base2Y = triangleCenterY + Math.sin(baseAngle2) * (triangleSize * 0.6);
            
            // Draw filled triangle
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.moveTo(pointX, pointY);
            ctx.lineTo(base1X, base1Y);
            ctx.lineTo(base2X, base2Y);
            ctx.closePath();
            ctx.fill();
            
            // Reset transparency
            ctx.globalAlpha = 1.0;
        }
        
        // Draw power indicator when charging
        if (this.showPowerIndicator && this.powerCharging) {
            const goatScreenX = Math.floor((this.player.x - this.camera.x) / 2) * 2;
            const goatScreenY = Math.floor((this.player.y - this.camera.y) / 2) * 2;
            
            const indicatorX = goatScreenX + this.player.width / 2;
            const indicatorY = goatScreenY - 30; // Above the goat
            
            // Power level colors
            let powerColor = '#00FF00'; // Green for level 1
            if (this.currentPowerLevel === 2) {
                powerColor = '#FFFF00'; // Yellow for level 2
            } else if (this.currentPowerLevel === 3) {
                powerColor = '#FF0000'; // Red for level 3
            }
            
            // Draw power level bars
            const barWidth = 8;
            const barHeight = 20;
            const barSpacing = 2;
            
            for (let i = 1; i <= 3; i++) {
                const barX = indicatorX - (barWidth * 1.5) + (i - 1) * (barWidth + barSpacing);
                
                if (i <= this.currentPowerLevel) {
                    // Filled bar for current power level
                    ctx.fillStyle = powerColor;
                    ctx.fillRect(barX, indicatorY, barWidth, barHeight);
                } else {
                    // Empty bar outline
                    ctx.strokeStyle = '#FFFFFF';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(barX, indicatorY, barWidth, barHeight);
                }
            }
        }
        
        // Draw player (Mountain Goat) - pixelated monochrome style
        ctx.fillStyle = '#000000';
        const px = Math.floor((this.player.x - this.camera.x) / 2) * 2;
        const py = Math.floor((this.player.y - this.camera.y) / 2) * 2;
        
        // Goat body (pixelated)
        ctx.fillRect(px + 8, py + 20, 24, 16);
        // Goat head
        ctx.fillRect(px + 24, py + 12, 12, 12);
        // Goat horns
        ctx.fillRect(px + 26, py + 8, 2, 6);
        ctx.fillRect(px + 32, py + 8, 2, 6);
        // Goat legs - show different poses based on state and flip
        if (this.player.state === 'idle' || this.player.landingPose) {
            // Legs when on ground - always land on feet
            ctx.fillRect(px + 10, py + 36, 4, 12);
            ctx.fillRect(px + 16, py + 36, 4, 12);
            ctx.fillRect(px + 22, py + 36, 4, 12);
            ctx.fillRect(px + 28, py + 36, 4, 12);
        } else {
            // Legs when airborne - show flip animation if flipping
            if (this.player.flipState === 'frontflip') {
                // Front flip - legs tucked up
                ctx.fillRect(px + 12, py + 20, 4, 6);
                ctx.fillRect(px + 18, py + 18, 4, 6);
                ctx.fillRect(px + 24, py + 18, 4, 6);
                ctx.fillRect(px + 30, py + 20, 4, 6);
            } else if (this.player.flipState === 'backflip') {
                // Back flip - legs extended back
                ctx.fillRect(px + 6, py + 28, 4, 8);
                ctx.fillRect(px + 12, py + 26, 4, 8);
                ctx.fillRect(px + 18, py + 26, 4, 8);
                ctx.fillRect(px + 24, py + 28, 4, 8);
            } else {
                // Normal airborne - bent position for jumping
                ctx.fillRect(px + 10, py + 30, 4, 8);
                ctx.fillRect(px + 16, py + 32, 4, 6);
                ctx.fillRect(px + 22, py + 32, 4, 6);
                ctx.fillRect(px + 28, py + 30, 4, 8);
            }
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
        if (this.renderObstacles) {
            ctx.fillStyle = '#000000';
            this.obstacles.forEach(obstacle => {
            const ox = Math.floor((obstacle.x - this.camera.x) / 2) * 2;
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
        }
        
        // Draw rain drops
        ctx.fillStyle = '#6B9BD1';
        this.rainDrops.forEach(drop => {
            ctx.fillRect(Math.floor(drop.x), Math.floor(drop.y - this.camera.y), 1, 4);
        });
        
        // Draw dirt particles - monochrome dark colors
        this.particles.forEach(particle => {
            const px = Math.floor((particle.x - this.camera.x) / 2) * 2;
            const py = Math.floor((particle.y - this.camera.y) / 2) * 2;
            
            // Fade particles as they age
            const alpha = particle.life / particle.maxLife;
            
            // Use monochrome dark colors - darker grays and black
            const grayValue = Math.floor(alpha * 128); // 0-128 for dark range
            const grayHex = grayValue.toString(16).padStart(2, '0');
            ctx.fillStyle = `#${grayHex}${grayHex}${grayHex}`;
            
            // Draw pixelated dirt particle
            ctx.fillRect(px, py, particle.size, particle.size);
        });
        
        // Reset alpha
        ctx.globalAlpha = 1.0;
        
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
        
        // Draw terrain chunk debug visualization
        this.terrainChunkManager.drawDebugChunks(ctx);
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