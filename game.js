// TERRAIN_DATA_PLACEHOLDER - Replace this line with: const TERRAIN_DATA = [JSON data from chunk analyzer];

// Terrain Generation Configuration
const TERRAIN_CONFIG = {
    chunksToRender: 6,        // Number of terrain chunks to select from available chunks
    flatChunksToInsert: 3,    // Number of flat sections to insert between terrain chunks
    firstChunkAlwaysFlat: true, // Ensure game always starts with flat terrain
    flatChunkWidth: 400,     // Width of flat sections (pixels)
    randomSeed: null          // Random seed for reproducible terrain (null = random)
};

const TERRAIN_DATA = {
    "chunks": [{"index":0,"width":800,"height":400,"terrainHeights":[20,21,22,23,24,25,25,26,26,26,27,27,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,35,36,36,36,37,37,38,38,38,39,39,39,40,40,41,41,41,42,42,43,43,44,45,45,46,46,46,47,47,48,48,48,48,49,50,50,51,51,52,52,52,52,52,53,53,53,54,54,55,55,55,55,56,56,57,57,57,58,58,59,60,60,60,61,61,62,62,62,63,63,63,64,63,63,63,63,62,62,61,61,60,60,60,59,58,58,57,57,56,56,55,54,54,53,52,51,50,49,48,48,47,47,46,45,44,43,42,41,40,39,38,37,35,34,32,30,28,26,25,24,22,21,19,17,16,14,12,10,9,7,6,5,3,1,-1,-3,-5,-7,-9,-10,-11,-12,-13,-15,-16,-17,-19,-20,-22,-23,-25,-26,-27,-28,-29,-30,-32,-33,-34,-35,-36,-37,-38,-39,-40,-41,-41,-42,-43,-43,-44,-45,-46,-46,-47,-48,-48,-49,-50,-50,-50,-51,-51,-52,-52,-53,-53,-54,-55,-55,-56,-56,-57,-57,-58,-59,-59,-59,-60,-60,-60,-61,-61,-62,-62,-63,-63,-64,-64,-64,-64,-65,-65,-64,-64,-64,-63,-63,-62,-61,-61,-60,-59,-58,-58,-57,-56,-56,-55,-55,-55,-54,-53,-52,-52,-51,-50,-50,-49,-49,-48,-48,-47,-47,-46,-46,-45,-44,-43,-43,-42,-42,-42,-41,-40,-40,-39,-39,-39,-38,-38,-37,-36,-36,-35,-35,-34,-33,-33,-32,-32,-31,-31,-30,-30,-30,-29,-28,-28,-27,-26,-26,-25,-24,-23,-22,-22,-21,-21,-20,-20,-19,-19,-18,-17,-17,-16,-16,-15,-15,-14,-14,-13,-13,-12,-11,-11,-10,-10,-9,-8,-7,-6,-6,-6,-5,-5,-5,-4,-4,-3,-2,-1,-1,0,0,1,1,2,3,3,4,5,5,6,6,7,7,7,8,8,9,9,9,9,10,10,10,11,11,12,13,13,14,14,14,15,15,15,16,16,17,17,18,18,18,19,19,19,20,21,21,22,23,24,24,25,25,25,26,26,27,27,28,28,29,30,30,31,31,32,32,33,33,34,35,35,35,35,35,36,36,36,36,35,35,35,35,35,35,34,34,33,33,32,32,31,31,30,30,29,28,28,27,27,26,26,25,25,23,22,21,20,20,19,18,17,16,15,14,13,12,11,9,8,7,6,5,4,3,2,0,-1,-2,-3,-4,-5,-7,-8,-10,-11,-13,-14,-16,-18,-20,-22,-24,-25,-26,-27,-28,-29,-30,-31,-32,-34,-35,-37,-38,-39,-40,-41,-42,-44,-44,-45,-45,-46,-47,-48,-48,-49,-49,-49,-49,-49,-49,-50,-50,-50,-50,-51,-51,-52,-52,-53,-53,-54,-55,-55,-56,-56,-56,-57,-57,-58,-58,-59,-60,-60,-61,-61,-61,-62,-62,-63,-63,-64,-64,-63,-62,-61,-61,-60,-59,-58,-57,-56,-55,-54,-53,-53,-52,-51,-51,-50,-50,-49,-48,-47,-47,-46,-46,-45,-44,-44,-43,-42,-42,-41,-40,-40,-39,-38,-37,-36,-35,-35,-34,-33,-33,-32,-31,-31,-30,-29,-28,-28,-27,-26,-25,-25,-24,-23,-23,-22,-22,-21,-20,-20,-19,-18,-17,-17,-16,-16,-15,-14,-14,-13,-12,-11,-11,-10,-10,-9,-9,-8,-8,-7,-7,-6,-6,-5,-4,-3,-3,-2,-2,-1,0,0,1,2,2,3,4,5,5,6,6,7,7,8,9,10,10,11,12,13,13,14,15,16,17,18,19,20,21,22,23,25,26,28,29,30,32,34,36,37,39,40,41,43,45,47,49,49,50,51,51,52,53,53,54,54,54,55,56,56,57,58,58,59,59,60,60,61,61,61,62,63,63,63,64,64,65,66,66,66,66,66,66,66,66,67,67,67,67,68,68,68,69,69,69,69,69,69,70,70,70,70,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,72,72,73,73,73,73,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,73,73,73,73,73,73,73,72,72,72,72,72,72,72],"transitionWidth":80,"terrainScale":0.8},{"index":1,"width":800,"height":400,"terrainHeights":[42,42,42,42,42,42,41,41,41,40,40,39,38,37,37,37,36,36,35,35,34,34,34,34,34,34,34,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,32,32,32,32,32,32,32,32,32,32,32,32,32,32,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,30,30,30,30,30,30,30,30,30,30,30,30,30,29,29,29,29,29,29,28,28,28,28,28,27,27,27,27,26,26,26,26,26,26,26,26,26,26,25,25,25,25,25,25,25,25,25,25,25,24,24,24,24,23,23,23,23,23,23,22,22,22,22,22,22,21,21,21,21,21,21,20,20,20,20,20,19,19,19,19,19,18,18,18,18,18,17,17,17,17,17,17,17,17,17,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,15,15,15,15,15,15,15,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,13,13,13,13,13,13,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10,10,10,9,9,9,9,8,8,8,8,7,7,7,6,6,6,5,5,5,5,5,5,4,4,4,4,4,4,3,3,3,3,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,14,15,15,15,15,15,15,16,16],"transitionWidth":80,"terrainScale":0.8},{"index":2,"width":800,"height":400,"terrainHeights":[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,31,31,31,31,31,31,31,30,30,30,30,30,30,30,30,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,29,29,29,29,29,29,28,28,28,28,28,28,27,27,27,27,26,26,25,24,24,23,23,23,22,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,30,31,31,32,33,34,34,34,35,36,37,37,38,39,40,41,41,42,43,44,45,48,125,125,125,125,125,125,125,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,123,123,122,122,122,122,122,122,121,121,121,120,120,120,119,119,119,118,118,118,118,117,117,117,117,117,117,117,117,118,118,118,118,119,119,119,119,119,119,119,119,119,119,119,119,120,120,120,120,120,120,120,120,120,121,121,121,121,122,122,122,123,123,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124,123,123,63,52,47,43,40,35,34,32,29,26,22,20,18,17,15,13,11,8,7,4,2,1,-1,-3,-4,-4,-5,-5,-6,-7,-8,-8,-9,-9,-10,-10,-11,-11,-12,-13,-13,-14,-14,-15,-15,-16,-16,-17,-17,-17,-18,-18,-19,-19,-19,-19,-19,-20,-20,-21,-21,-21,-21,-22,-22,-22,-23,-23,-23,-23,-24,-24,-24,-24,-25,-25,-25,-26,-26,-27,-27,-28,-28,-28,-30,-31,-32,-32,-33,-34,-34,-35,-35,-36,-38,-39,-40,-42,-43,-45,-46,-47,-48,-50,-52,-53,-54,-54,-56,-57,-58,-59,-60,-61,-61,-62,-63,-64,-65,-65,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-66,-65,-65,-64,-64,-63,-63,-63,-62,-62,-61,-61,-60,-60,-59,-59,-59,-58,-58,-58,-57,-57,-56,-56,-55,-55,-55,-54,-54,-54,-53,-53,-52,-52,-51,-51,-51,-50,-50,-50,-49,-49,-48,-48,-47,-47,-46,-46,-46,-45,-45,-44,-44,-44,-43,-42,-42,-41,-40,-40,-39,-37,-36,-35,-35,-34,-33,-31,-29,-27,-25,-23,-22,-20,-17,-15,-14,-13,-12,-11,-9,-7,-6,-5,-4,-3,-1,-1,0,1,2,3,4,5,6,6,7,8,9,10,11,12,12,13,14,16,17,18,18,19,19,20,21,22,23,24,25,25,26,27,28,28,29,30,31,32,34,35,36,36,37,39,40,41,42,43,44,46,48,49,50,51,51,52,53,53,53,54,54,55,55,55,56,56,56,57,58,58,58,58,59,60,60,61,62,62,62,62,63,63,63,64,64,65,65,65,65,66,66,67,67,67,67,68,68,69,69,69,69,69,69,69,69,69,69,69,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,72,72,73,73,73,73,73,73,73,74,74,74,74,74,74,74,75,75,75,75,76,76,76,76,76,76,76,76,77,77,77,77,77,77,77,77],"transitionWidth":80,"terrainScale":0.8}]
};

// Terrain Generator - Handles chunk selection and sequencing at game load
class TerrainGenerator {
    constructor(terrainData, config) {
        this.terrainData = terrainData;
        this.config = config;
        this.generatedSequence = [];
        this.totalTerrainWidth = 0;
        
        // Initialize random seed if provided
        if (config.randomSeed !== null) {
            this.seed = config.randomSeed;
        } else {
            this.seed = Math.floor(Math.random() * 1000000);
        }
        this.randomState = this.seed;
        
        console.log(`TerrainGenerator initialized with seed: ${this.seed}`);
    }
    
    // Seeded random number generator for reproducible terrain
    seededRandom() {
        this.randomState = (this.randomState * 9301 + 49297) % 233280;
        return this.randomState / 233280;
    }
    
    // Generate the complete terrain sequence
    generateTerrainSequence() {
        this.generatedSequence = [];
        this.totalTerrainWidth = 0;
        
        console.log('Generating terrain sequence...');
        
        // Step 1: Select random chunks from available terrain data
        const selectedChunks = this.selectRandomChunks();
        
        // Step 2: Create sequence with flat chunks inserted
        const sequence = this.createSequenceWithFlats(selectedChunks);
        
        // Step 3: Ensure first chunk is flat if configured
        if (this.config.firstChunkAlwaysFlat) {
            this.ensureFirstChunkIsFlat(sequence);
        }
        
        // Step 4: Calculate positions and finalize sequence
        this.finalizeSequence(sequence);
        
        console.log(`Generated terrain sequence: ${this.generatedSequence.length} chunks, total width: ${this.totalTerrainWidth}px`);
        return this.generatedSequence;
    }
    
    // Select random chunks from available terrain data
    selectRandomChunks() {
        const availableChunks = [...this.terrainData.chunks];
        const selectedChunks = [];
        
        // Randomly select chunks up to the configured limit
        const chunksToSelect = Math.min(this.config.chunksToRender, availableChunks.length);
        
        for (let i = 0; i < chunksToSelect; i++) {
            const randomIndex = Math.floor(this.seededRandom() * availableChunks.length);
            const selectedChunk = availableChunks.splice(randomIndex, 1)[0];
            selectedChunks.push(selectedChunk);
        }
        
        // Shuffle the selected chunks for random order
        for (let i = selectedChunks.length - 1; i > 0; i--) {
            const j = Math.floor(this.seededRandom() * (i + 1));
            [selectedChunks[i], selectedChunks[j]] = [selectedChunks[j], selectedChunks[i]];
        }
        
        console.log(`Selected ${selectedChunks.length} random chunks from ${this.terrainData.chunks.length} available`);
        return selectedChunks;
    }
    
    // Create sequence with flat chunks randomly inserted
    createSequenceWithFlats(terrainChunks) {
        const sequence = [];
        
        // Add terrain chunks with flat chunks randomly inserted between them
        for (let i = 0; i < terrainChunks.length; i++) {
            // Add the terrain chunk
            sequence.push({
                type: 'terrain',
                chunkData: terrainChunks[i]
            });
            
            // Randomly decide to insert flat chunks (except after the last terrain chunk)
            if (i < terrainChunks.length - 1) {
                const shouldInsertFlat = this.seededRandom() < 0.7; // 70% chance to insert flat
                if (shouldInsertFlat && sequence.filter(s => s.type === 'flat').length < this.config.flatChunksToInsert) {
                    sequence.push({
                        type: 'flat',
                        width: this.config.flatChunkWidth
                    });
                }
            }
        }
        
        // Add remaining flat chunks if we haven't reached the target
        const currentFlats = sequence.filter(s => s.type === 'flat').length;
        const remainingFlats = this.config.flatChunksToInsert - currentFlats;
        
        for (let i = 0; i < remainingFlats; i++) {
            // Insert at random positions (not at the very beginning)
            const insertIndex = Math.floor(this.seededRandom() * (sequence.length - 1)) + 1;
            sequence.splice(insertIndex, 0, {
                type: 'flat',
                width: this.config.flatChunkWidth
            });
        }
        
        return sequence;
    }
    
    // Ensure first chunk is flat terrain
    ensureFirstChunkIsFlat(sequence) {
        if (sequence.length > 0 && sequence[0].type !== 'flat') {
            // Insert flat chunk at the beginning
            sequence.unshift({
                type: 'flat',
                width: this.config.flatChunkWidth
            });
        }
    }
    
    // Calculate positions and finalize the sequence
    finalizeSequence(sequence) {
        let currentX = 0;
        
        for (let i = 0; i < sequence.length; i++) {
            const item = sequence[i];
            
            if (item.type === 'terrain') {
                this.generatedSequence.push({
                    type: 'terrain',
                    index: i,
                    width: item.chunkData.width,
                    height: item.chunkData.height,
                    terrainHeights: item.chunkData.terrainHeights,
                    transitionWidth: item.chunkData.transitionWidth || 80,
                    terrainScale: item.chunkData.terrainScale || 0.8,
                    startX: currentX,
                    endX: currentX + item.chunkData.width,
                    originalIndex: item.chunkData.index
                });
                currentX += item.chunkData.width;
            } else if (item.type === 'flat') {
                this.generatedSequence.push({
                    type: 'flat',
                    index: i,
                    width: item.width,
                    height: 400, // Standard height
                    terrainHeights: new Array(item.width).fill(0), // Flat terrain (all zeros)
                    transitionWidth: 80,
                    terrainScale: 0.8,
                    startX: currentX,
                    endX: currentX + item.width
                });
                currentX += item.width;
            }
        }
        
        this.totalTerrainWidth = currentX;
    }
    
    // Get the generated terrain sequence
    getGeneratedSequence() {
        return this.generatedSequence;
    }
    
    // Get total terrain width
    getTotalWidth() {
        return this.totalTerrainWidth;
    }
    
    // Pre-generate obstacles and leaves for the terrain sequence
    generateObstaclesAndLeaves(game) {
        const obstacles = [];
        const leaves = [];
        
        // Generate obstacles and leaves based on rendering flag
        console.log(`Generating obstacles and leaves (renderObstacles: ${game.renderObstacles})`);
        if (!game.renderObstacles) {
            console.log('Obstacle rendering disabled - skipping obstacle/leaf generation');
            return { obstacles, leaves };
        }
        
        console.log('Pre-generating obstacles and leaves for terrain...');
        console.log(`Processing ${this.generatedSequence.length} chunks for obstacle/leaf generation`);
        
        this.generatedSequence.forEach((chunk, index) => {
            console.log(`Chunk ${index}: type=${chunk.type}, width=${chunk.width}`);
            
            // Generate obstacles for this chunk
            this.generateChunkObstacles(chunk, obstacles, game);
            
            // Generate leaves for this chunk  
            this.generateChunkLeaves(chunk, leaves, game);
        });
        
        console.log(`Generated ${obstacles.length} obstacles and ${leaves.length} leaves`);
        console.log('Sample obstacles:', obstacles.slice(0, 3));
        console.log('Sample leaves:', leaves.slice(0, 3));
        return { obstacles, leaves };
    }
    
    // Generate obstacles for a specific chunk
    generateChunkObstacles(chunk, obstacles, game) {
        console.log(`Generating obstacles for chunk ${chunk.index} (type: ${chunk.type})`);
        
        // Skip obstacle generation for the first chunk to keep player start area clear
        if (chunk.index === 0) {
            console.log(`Skipping obstacle generation for first chunk ${chunk.index} - keeping start area clear`);
            return;
        }
        
        // Use seeded random for consistent obstacle placement
        const chunkSeed = this.seed + chunk.index * 1000;
        let obstacleRandom = chunkSeed;
        
        const seededObstacleRandom = () => {
            obstacleRandom = (obstacleRandom * 9301 + 49297) % 233280;
            return obstacleRandom / 233280;
        };
        
        // Generate 0-4 obstacles per chunk (both flat and terrain chunks)
        const obstacleCount = Math.floor(seededObstacleRandom() * 5);
        
        for (let i = 0; i < obstacleCount; i++) {
            // Random position within chunk (avoid edges for smooth transitions)
            const margin = 100;
            const x = chunk.startX + margin + seededObstacleRandom() * (chunk.width - 2 * margin);
            
            // Different obstacle types (matching current system)
            const obstacleType = Math.floor(seededObstacleRandom() * 5);
            let obstacle;
            
            if (obstacleType === 0) {
                // Small rock
                obstacle = { x, width: 16, height: 24, type: 0 };
            } else if (obstacleType === 1) {
                // Medium rock
                obstacle = { x, width: 24, height: 32, type: 1 };
            } else if (obstacleType === 2) {
                // Wide but short rock
                obstacle = { x, width: 36, height: 20, type: 2 };
            } else if (obstacleType === 3) {
                // Tall but narrow rock
                obstacle = { x, width: 16, height: 36, type: 3 };
            } else {
                // Super wide rock
                obstacle = { x, width: 64, height: 24, type: 4 };
            }
            
            // Position obstacle bottom edge to match floor collision detection
            // Store the obstacle without Y position first
            obstacle.y = 0; // Temporary value
            
            // Temporarily ground obstacle using baseline elevation; it will be precisely grounded later
            // after chunks load via repositionObstaclesToFloor()
            const terrainY = game.getCurrentGroundY(obstacle.x);
            obstacle.y = terrainY - obstacle.height;
            obstacle.passed = false;
            obstacle.chunkIndex = chunk.index;
            
            obstacles.push(obstacle);
        }
    }
    
    // Generate leaves for a specific chunk
    generateChunkLeaves(chunk, leaves, game) {
        console.log(`Generating leaves for chunk ${chunk.index} (type: ${chunk.type})`);
        
        // Use seeded random for consistent leaf placement
        const chunkSeed = this.seed + chunk.index * 2000;
        let leafRandom = chunkSeed;
        
        const seededLeafRandom = () => {
            leafRandom = (leafRandom * 9301 + 49297) % 233280;
            return leafRandom / 233280;
        };
        
        // Generate 0-2 leaves per chunk randomly
        const leafCount = Math.floor(seededLeafRandom() * 3);
        
        for (let i = 0; i < leafCount; i++) {
            // Random position within chunk
            const x = chunk.startX + seededLeafRandom() * chunk.width;
            // Use baseline elevation during generation; leaves float above and don't need exact grounding
            const groundY = game.getCurrentGroundY(x);
            
            const leaf = {
                x: x,
                y: groundY - 30 - seededLeafRandom() * 50, // Float above ground
                width: 12,
                height: 8,
                collected: false,
                floatOffset: seededLeafRandom() * Math.PI * 2,
                floatSpeed: seededLeafRandom() * 0.1 + 0.05,
                chunkIndex: chunk.index
            };
            
            leaves.push(leaf);
        }
    }
}
  
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
        this.terrainGenerator = null;
        this.isGameOver = false;
        this.preGeneratedObstacles = [];
        this.preGeneratedLeaves = [];
        
        // Terrain positioning
        this.flatTerrainLength = 0; // No initial flat terrain - handled by generator
        this.chunkStartX = 0;
        this.totalChunkWidth = 0;
        
        // Generate terrain sequence at game load
        this.generateTerrain();
    }

    // Generate terrain sequence using TerrainGenerator
    generateTerrain() {
        try {
            // Check if TERRAIN_DATA is defined
            if (typeof TERRAIN_DATA === 'undefined') {
                console.warn('TERRAIN_DATA not found, using fallback terrain');
                this.chunksLoaded = false;
                return;
            }
            
            console.log('Generating terrain sequence...');
            
            // Create terrain generator and generate sequence
            this.terrainGenerator = new TerrainGenerator(TERRAIN_DATA, TERRAIN_CONFIG);
            const generatedSequence = this.terrainGenerator.generateTerrainSequence();
            
            // Load the generated sequence into chunks
            this.loadGeneratedSequence(generatedSequence);
            
            // Pre-generate obstacles and leaves
            console.log(`Obstacle rendering flag: ${this.game.renderObstacles}`);
            const preGenerated = this.terrainGenerator.generateObstaclesAndLeaves(this.game);
            this.preGeneratedObstacles = preGenerated.obstacles;
            this.preGeneratedLeaves = preGenerated.leaves;
            
        } catch (error) {
            console.warn('Failed to generate terrain sequence:', error);
            this.chunksLoaded = false;
        }
    }
    
    // Load generated terrain sequence into chunk system
    loadGeneratedSequence(generatedSequence) {
        this.chunks = [];
        this.totalChunkWidth = 0;
        
        generatedSequence.forEach(chunkData => {
            const chunk = {
                index: chunkData.index,
                type: chunkData.type,
                width: chunkData.width,
                height: chunkData.height,
                terrainHeights: chunkData.terrainHeights,
                transitionWidth: chunkData.transitionWidth,
                terrainScale: chunkData.terrainScale,
                startX: chunkData.startX,
                endX: chunkData.endX,
                originalIndex: chunkData.originalIndex || null
            };
            
            this.chunks.push(chunk);
            
            // Set dimensions from first chunk
            if (chunkData.index === 0) {
                this.chunkWidth = chunkData.width;
                this.chunkHeight = chunkData.height;
            }
            
            const typeLabel = chunkData.type === 'flat' ? 'flat' : `terrain (orig: ${chunkData.originalIndex})`;
            console.log(`Generated chunk ${chunkData.index} (${typeLabel}): ${chunkData.width}x${chunkData.height} pixels`);
        });
        
        this.totalChunkWidth = this.terrainGenerator.getTotalWidth();
        this.chunksLoaded = true;
        
        console.log(`Successfully loaded ${this.chunks.length} generated chunks, total width: ${this.totalChunkWidth}px`);
    }
    
    // Get pre-generated obstacles for the game
    getPreGeneratedObstacles() {
        return this.preGeneratedObstacles;
    }
    
    // Get pre-generated leaves for the game  
    getPreGeneratedLeaves() {
        return this.preGeneratedLeaves;
    }

    // Get terrain Y position at world X coordinate
    getTerrainYAtWorldX(worldX) {
        // If chunks haven't loaded yet, use fallback terrain
        if (!this.chunksLoaded || this.chunks.length === 0) {
            return this.game.getCurrentGroundY(worldX);
        }
        
        // Check if player has reached the end of terrain (victory condition)
        if (worldX >= this.totalChunkWidth) {
            if (!this.isGameOver) {
                this.isGameOver = true;
                console.log(`Player reached end of terrain at x=${worldX}, totalWidth=${this.totalChunkWidth} - triggering victory`);
                this.game.triggerVictory();
            }
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

    // Get terrain Y from pre-processed JSON height data
    getChunkTerrainY(chunk, worldX) {
        // Convert world X to chunk pixel X
        const chunkPixelX = Math.floor(worldX - chunk.startX);
        
        if (chunkPixelX < 0 || chunkPixelX >= chunk.width) {
            return this.game.getCurrentGroundY(worldX);
        }
        
        // Get the elevation line at this world position
        const elevationY = this.game.getCurrentGroundY(worldX);
        
        // For flat chunks, just return the elevation line
        if (chunk.type === 'flat') {
            return elevationY;
        }
        
        // Get pre-calculated height offset from JSON data
        // Note: heightOffset is calculated from original midpoint, need to adjust for new baseline
        const originalHeightOffset = chunk.terrainHeights[chunkPixelX];
        
        // Convert from midpoint-based to lower 30% baseline
        // Original: midpoint at height/2 (200px for 400px height)
        // New: baseline at height*0.7 (280px for 400px height)
        // Adjustment: shift by (height*0.7 - height/2) = height*0.2 = 80px
        const baselineAdjustment = chunk.height * 0.2; // 80px for 400px height
        const adjustedHeightOffset = originalHeightOffset - baselineAdjustment;
        
        // Apply terrain scale and add to elevation line
        const terrainY = elevationY + (adjustedHeightOffset * chunk.terrainScale);
        
        // Calculate transition zones for smooth blending
        const transitionWidth = chunk.transitionWidth;
        const isInLeftTransition = chunkPixelX < transitionWidth;
        const isInRightTransition = chunkPixelX >= (chunk.width - transitionWidth);
        
        // Apply transition blending at chunk edges
        if (isInLeftTransition) {
            // Blend from flat terrain to chunk terrain
            const blendRatio = chunkPixelX / transitionWidth;
            return elevationY + (terrainY - elevationY) * blendRatio;
        } else if (isInRightTransition) {
            // Blend from chunk terrain back to flat terrain
            const blendRatio = (chunk.width - chunkPixelX) / transitionWidth;
            return elevationY + (terrainY - elevationY) * blendRatio;
        } else {
            // Full chunk terrain in the middle
            return terrainY;
        }
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
        // Disable image smoothing to keep pixel art crisp and reduce subpixel shimmer
        this.ctx.imageSmoothingEnabled = false;

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

        // Skill-based scoring system
        this.scoring = {
            obstaclePoints: 10,        // Base points for clearing obstacle
            comboMultiplier: 1,        // Current combo multiplier
            comboCount: 0,             // Current combo count
            maxCombo: 0,               // Best combo this game
            perfectLandings: 0,        // Count of perfect landings
            riskBonusActive: false,    // Risk bonus for close calls
            lastObstacleDistance: 0,   // Distance from last obstacle (for risk bonus)
            jumpStylePoints: 0,        // Bonus for jump style
            airTimeBonus: 0,           // Bonus for extended air time
            currentAirTime: 0,         // Current jump air time
            longestJump: 0,            // Longest single jump distance
            heightBonus: 0             // Bonus for high jumps
        };

        // Game states
        this.gameState = 'start'; // 'start', 'playing', 'paused', 'gameOver', 'victory'
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
            y: this.baseGroundY - 50, // Will be updated after terrain loads
            width: 40,
            height: 50,
            velocityX: 0, // Horizontal velocity for realistic movement
            velocityY: 0,
            jumping: false,
            grounded: true,
            state: 'idle', // 'idle', 'airborne'
            targetY: this.baseGroundY - 50, // Will be updated after terrain loads
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
        
        // Obstacles and leaves (will be populated from pre-generated content)
        this.obstacles = [];
        this.leaves = [];
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
        
        // Debug flags - set these BEFORE creating terrain manager
        this.renderObstacles = true; // Set to false to hide obstacles for debugging
        this.enableObstacleCollision = true; // Set to false to disable obstacle collision for debugging
        // Visual overlap to slightly embed rocks into ground (in pixels)
        // Set to 0 to avoid appearing underground on steep/wavy terrain
        this.obstacleGroundOverlap = 0;
        // Feature flag: render obstacles rotated to match terrain slope
        this.useRotatedObstacleRendering = true;
        
        // Terrain chunk management system
        this.terrainChunkManager = new TerrainChunkManager(this);
        
        // Initialize with pre-generated obstacles and leaves
        this.initializePreGeneratedContent();
        
        this.init();
        this.initMountains();
        this.setupEventListeners();
        this.gameLoop();
    }
    
    // Initialize pre-generated obstacles and leaves from terrain manager
    initializePreGeneratedContent() {
        // Wait for terrain generation to complete, then use pre-generated content
        const checkTerrain = () => {
            if (this.terrainChunkManager.chunksLoaded) {
                this.obstacles = this.terrainChunkManager.getPreGeneratedObstacles();
                this.leaves = this.terrainChunkManager.getPreGeneratedLeaves();
                console.log(`Loaded ${this.obstacles.length} pre-generated obstacles and ${this.leaves.length} pre-generated leaves`);
                console.log('First few obstacles:', this.obstacles.slice(0, 3));
                console.log('First few leaves:', this.leaves.slice(0, 3));
                
                // Reposition obstacles to match floor collision detection
                this.repositionObstaclesToFloor();
                
                // Position player on the terrain at starting position
                this.positionPlayerOnTerrain();
            } else {
                // Check again in next frame if terrain isn't ready yet
                requestAnimationFrame(checkTerrain);
            }
        };
        checkTerrain();
    }
    
    // Reposition obstacles to match exact floor collision detection
    repositionObstaclesToFloor() {
        this.obstacles.forEach(obstacle => {
            // Use the same method as floor collision detection
            const worldX = obstacle.x;
            const floorY = this.terrainChunkManager.getTerrainYAtWorldX(worldX);
            
            // Position obstacle to overlap floor slightly for better visual grounding
            // Allow slight overlap into the ground for solid appearance
            obstacle.y = floorY - obstacle.height + this.obstacleGroundOverlap;
            
            // Compute and store local slope angle for rendering alignment
            const sampleDx = 8;
            const yPrev = this.terrainChunkManager.getTerrainYAtWorldX(worldX - sampleDx);
            const yNext = this.terrainChunkManager.getTerrainYAtWorldX(worldX + sampleDx);
            const dy = yNext - yPrev; // positive if rising to the right
            const dx = sampleDx * 2;
            obstacle.angle = Math.atan2(dy, dx); // radians
            
            // Remove any floating properties that might be applied from leaf logic
            delete obstacle.floatOffset;
            delete obstacle.floatSpeed;
            delete obstacle.collected;
        });
        console.log('Repositioned obstacles to be static and grounded');
    }
    
    // Position player on the terrain surface at starting position
    positionPlayerOnTerrain() {
        const startX = 100; // Starting position
        const groundY = this.terrainChunkManager.getTerrainYAtWorldX(startX);
        
        this.player.x = startX;
        this.player.y = groundY - this.player.height;
        this.player.velocityY = 0;
        this.player.isOnGround = true;
        
        console.log(`Player positioned at (${this.player.x}, ${this.player.y}) on terrain height ${groundY}`);
        console.log(`Game state: ${this.gameState}, terrain end at: ${this.terrainChunkManager.totalChunkWidth}`);
    }
    
    // Trigger victory when player reaches end of terrain
    triggerVictory() {
        if (this.gameState === 'playing') {
            this.gameState = 'victory';
            this.music.pause();
            this.music.currentTime = 0;
            // No sound effect for victory - just silence
            this.updateUI();
            console.log('Victory: Player reached the end of the mountain!');
        }
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

    awardObstacleClearPoints(obstacle) {
        let points = this.scoring.obstaclePoints;

        // Combo system - consecutive obstacles without touching ground builds multiplier
        this.scoring.comboCount++;
        this.scoring.comboMultiplier = Math.min(1 + (this.scoring.comboCount - 1) * 0.5, 5); // Max 5x multiplier
        this.scoring.maxCombo = Math.max(this.scoring.maxCombo, this.scoring.comboCount);

        // Risk bonus for close calls (passing obstacle with small margin)
        const clearanceDistance = this.player.y - (obstacle.y + obstacle.height);
        if (clearanceDistance < 20) {
            points += 15; // Risk bonus
            this.scoring.riskBonusActive = true;
        }

        // Height bonus for high jumps
        const maxJumpHeight = this.getCurrentGroundY() - this.player.y;
        if (maxJumpHeight > 80) {
            const heightBonus = Math.floor((maxJumpHeight - 80) / 10) * 5;
            points += heightBonus;
            this.scoring.heightBonus += heightBonus;
        }

        // Apply combo multiplier
        points = Math.floor(points * this.scoring.comboMultiplier);

        this.score += points;

        // Show score popup (you can implement visual feedback here)
        this.showScorePopup(points, this.scoring.comboMultiplier > 1);
    }

    awardLandingPoints() {
        let points = 0;

        // Perfect landing bonus (landing exactly on feet after flip)
        if (this.player.flipState !== 'normal' && this.player.landingPose) {
            points += 25;
            this.scoring.perfectLandings++;
        }

        // Air time bonus - reward longer jumps
        if (this.scoring.currentAirTime > 60) { // More than 1 second airborne
            const airTimeBonus = Math.floor((this.scoring.currentAirTime - 60) / 30) * 5;
            points += airTimeBonus;
            this.scoring.airTimeBonus += airTimeBonus;
        }

        // Jump distance bonus
        const jumpDistance = Math.abs(this.scoring.jumpStartX - this.player.x);
        if (jumpDistance > this.scoring.longestJump) {
            this.scoring.longestJump = jumpDistance;
            if (jumpDistance > 150) {
                points += Math.floor((jumpDistance - 150) / 25) * 10; // Bonus for long jumps
            }
        }

        if (points > 0) {
            this.score += points;
            this.showScorePopup(points, false, 'LANDING');
        }
    }

    // Reset combo when touching ground between obstacles
    resetCombo() {
        this.scoring.comboCount = 0;
        this.scoring.comboMultiplier = 1;
        this.scoring.riskBonusActive = false;
    }

    // Track jump start for distance calculation
    startJump() {
        this.scoring.jumpStartX = this.player.x;
        this.scoring.currentAirTime = 0;
    }

    // Visual score popup system
    showScorePopup(points, isCombo, type = 'POINTS') {
        // Add to a popup array that you can render
        if (!this.scorePopups) this.scorePopups = [];

        this.scorePopups.push({
            x: this.player.x - this.camera.x,
            y: this.player.y - this.camera.y - 30,
            points: points,
            isCombo: isCombo,
            type: type,
            life: 60, // frames to display
            maxLife: 60
        });
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
    
    // Get ground Y at a specific WORLD X position
    // Note: Many callers already compute worldX (e.g., x + camera.x or player.x)
    getGroundYAtPosition(worldX) {
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
    
    // Draw heavy salt and pepper particle texture on ground surface
    drawGroundParticleTexture(ctx) {
        const particleSize = 1; // Small particles for salt and pepper effect
        const density = 0.3; // How dense the particles are
        
        for (let x = this.groundOffset; x < this.canvas.width + 50; x += 2) {
            const worldX = x + this.renderCameraX;
            const groundY = this.getGroundYAtPosition(worldX) - this.renderCameraY;
            // Estimate local slope using forward difference (in screen space)
            const groundYNext = this.getGroundYAtPosition(worldX + 2) - this.renderCameraY;
            const slopePerPixel = (groundYNext - groundY) / 2; // + = rising to right, - = falling to right
            
            // Increase minimum offset below the surface when on slopes to avoid stair-like specks.
            // On downslopes (negative slopePerPixel), be stricter.
            const absSlope = Math.abs(slopePerPixel);
            let minOffset = 2;
            if (absSlope >= 0.25) minOffset = 8;      // noticeable slope
            if (absSlope >= 0.5) minOffset = 12;      // steep slope
            if (slopePerPixel < -0.25) minOffset += 2; // extra padding for downslopes

            // Create particles only below the ground surface (in the gradient area)
            for (let offsetY = minOffset; offsetY <= 50; offsetY += 1) {
                // Shear particles along slope so they align more naturally with terrain
                const shearX = -slopePerPixel * offsetY; // tilt particles upslope
                const currentX = x + shearX;
                const currentY = groundY + offsetY;
                // Snap to integer pixels to prevent subpixel shimmer relative to camera
                const px = Math.floor(currentX);
                const py = Math.floor(currentY);
                
                // Use deterministic pseudo-random for consistent texture
                const seed = ((Math.floor(worldX) * 37 + offsetY * 19) % 1000 + 1000) % 1000;
                const random1 = (seed * 9301 + 49297) % 233280 / 233280;
                const random2 = ((seed + 1) * 9301 + 49297) % 233280 / 233280;
                const random3 = ((seed + 2) * 9301 + 49297) % 233280 / 233280;
                
                // Base density gate
                if (random1 > density) continue;
                
                // Stop particles at bottom of screen
                if (currentY >= this.canvas.height) break;
                
                // Vary particle density based on distance from ground surface
                // Very dense near floor line, very sparse near bottom
                const distanceFromGround = offsetY;
                let densityFalloff = Math.max(0.01, Math.pow(1 - (distanceFromGround / 50), 4));
                
                // Reduce density additionally on steep down slopes to avoid heavy streaking
                // Negative slopePerPixel indicates ground falls to the right
                const downslopeFactor = 1 - Math.min(Math.max(-slopePerPixel * 0.8, 0), 0.7); // stronger reduction: 1.0 .. 0.3
                densityFalloff *= downslopeFactor;
                if (random2 > densityFalloff) continue;
                
                // Create varied grayscale particles with randomized color and opacity
                let grayValue;
                if (random3 < 0.3) {
                    // Dark particles (pepper)
                    grayValue = Math.floor(10 + random1 * 40); // 10-50 range
                } else if (random3 < 0.6) {
                    // Medium gray particles
                    grayValue = Math.floor(60 + random2 * 60); // 60-120 range
                } else {
                    // Light particles (salt)
                    grayValue = Math.floor(150 + random3 * 80); // 150-230 range
                }
                
                // Add random variation to the gray color
                const colorVariation = 30;
                const finalGray = Math.max(0, Math.min(255, grayValue + (random1 - 0.5) * colorVariation));
                
                // Randomize opacity (0.2 to 1.0)
                const opacity = 0.2 + (random2 * 0.8);
                
                ctx.fillStyle = `rgba(${Math.floor(finalGray)}, ${Math.floor(finalGray)}, ${Math.floor(finalGray)}, ${opacity})`;
                
                // Create irregular particle shapes
                const shapeType = random1;
                if (shapeType < 0.4) {
                    // Irregular small clusters
                    ctx.fillRect(px, py, 1, 1);
                    if (random2 > 0.5) ctx.fillRect(px + 1, py, 1, 1);
                    if (random3 > 0.7) ctx.fillRect(px, py + 1, 1, 1);
                } else if (shapeType < 0.7) {
                    // L-shaped particles
                    ctx.fillRect(px, py, 2, 1);
                    ctx.fillRect(px, py + 1, 1, 1);
                } else if (shapeType < 0.85) {
                    // Cross-shaped particles
                    ctx.fillRect(px, py, 1, 1);
                    if (random2 > 0.3) ctx.fillRect(px + 1, py, 1, 1);
                    if (random3 > 0.3) ctx.fillRect(px, py + 1, 1, 1);
                    if (random1 > 0.6) ctx.fillRect(px - 1, py, 1, 1);
                } else {
                    // Scattered dots
                    ctx.fillRect(px, py, 1, 1);
                    if (random2 > 0.8) ctx.fillRect(px + 2, py + 1, 1, 1);
                }
            }
        }
    }

    // Draw gradient from terrain line to bottom of screen (black to white), per-column from local floor
    drawUndergroundGradient(ctx) {
        const segmentWidth = 2; // small width to minimize visible seams
        const overlap = 1; // overlap columns slightly for blending
        const alpha = 0.9; // slight transparency to blend overlaps
        
        ctx.save();
        for (let x = 0; x < this.canvas.width; x += segmentWidth) {
            const worldXCenter = x + this.renderCameraX + segmentWidth / 2;
            const worldXLeft = worldXCenter - segmentWidth;
            const worldXRight = worldXCenter + segmentWidth;
            
            // Sample neighboring ground heights and smooth (use snapped render camera)
            const gyCenter = this.getGroundYAtPosition(worldXCenter) - this.renderCameraY;
            const gyLeft = this.getGroundYAtPosition(worldXLeft) - this.renderCameraY;
            const gyRight = this.getGroundYAtPosition(worldXRight) - this.renderCameraY;
            let groundY = (gyLeft + gyCenter + gyRight) / 3;
            // Snap gradient start to integer pixel to avoid shimmer
            const gy = Math.floor(groundY);
            const height = this.canvas.height - gy;
            if (height <= 0) continue;
            
            // Create vertical gradient starting at the smoothed local ground
            const gradient = ctx.createLinearGradient(0, gy, 0, this.canvas.height);
            gradient.addColorStop(0, '#000000'); // Black at terrain line
            gradient.addColorStop(1, '#FFFFFF'); // White at bottom
            
            ctx.globalAlpha = alpha;
            ctx.fillStyle = gradient;
            // Slight overlap left/right to blend columns
            const sx = Math.floor(x - overlap);
            ctx.fillRect(sx, gy, segmentWidth + 2 * overlap, height);
        }
        ctx.restore();
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
                    this.startPowerCharging();
                } else if (this.gameState === 'gameOver' || this.gameState === 'victory') {
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
        this.leaves = [];
        this.leafCollected = 0;
        
        // Reload pre-generated obstacles and leaves
        this.initializePreGeneratedContent();
        
        this.currentTerrainLevel = 0;
        this.obstaclesCleared = 0;
        this.totalDistance = 0; // Reset distance tracking
        this.camera.x = 0; // Reset camera position
        this.camera.y = 0;
        this.camera.targetX = 0;
        this.camera.targetY = 0;
        this.player.x = 100; // Reset player X position
        // Position will be updated after terrain reloads
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
            this.startJump();

            // Use mouse-selected angle for directional jump mechanics
            const jumpAngle = this.player.aimAngle;
            // Calculate base power with power level multiplier
            const basePowerRaw = (this.jumpPowerMax + this.jumpPowerMin)/2;
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
        const restartButton = document.getElementById('restartButton');
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
                break;
            case 'victory':
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
            
            // Enhanced terrain collision detection with forgiving hitbox
            // Use smaller collision box for more natural visual overlap
            const collisionMargin = 8; // Reduce collision box by 8px on each side
            const leftFootX = this.player.x + collisionMargin;
            const rightFootX = this.player.x + this.player.width - collisionMargin;
            const centerX = this.player.x + (this.player.width / 2);
            
            // Get terrain heights at foot positions
            const leftFootGroundY = this.getGroundYAtPosition(leftFootX);
            const rightFootGroundY = this.getGroundYAtPosition(rightFootX);
            const centerGroundY = this.getGroundYAtPosition(centerX);
            
            // Use the highest terrain point (lowest Y value) to ensure goat doesn't sink
            const playerGroundY = Math.min(leftFootGroundY, rightFootGroundY, centerGroundY);
            
            // Check for ground collision with forgiving bottom margin
            const goatBottomY = this.player.y + this.player.height - 4; // 4px margin from bottom
            if (goatBottomY >= playerGroundY) {
                // Natural landing - allow slight visual overlap for better appearance
                this.player.y = playerGroundY - this.player.height + 3;
                this.player.velocityX = 0;
                this.player.velocityY = 0;
                this.player.jumping = false;
                this.player.grounded = true;
                this.player.state = 'idle';
                this.player.landingPose = true;
                this.player.flipState = 'normal'; // Reset flip state on landing

                // Award landing points and reset combo if not chaining
                this.awardLandingPoints();

                // Reset combo if no obstacle was recently cleared
                const timeSinceLastObstacle = Date.now() - (this.lastObstacleClearedTime || 0);
                if (timeSinceLastObstacle > 2000) { // 2 seconds
                    this.resetCombo();
                }

                // Create dirt particles on landing
                this.createLandingParticles(this.player.x, playerGroundY);
                
                return; // Exit early to prevent any further position updates
            }
            
            // Mid-air terrain attachment - check if goat hits terrain while airborne
            // Use same forgiving foot sampling points for consistency
            const attachmentSamplePoints = [leftFootX, centerX, rightFootX];
            
            for (let sampleX of attachmentSamplePoints) {
                const terrainY = this.getGroundYAtPosition(sampleX);
                
                // Check if any part of the goat intersects with terrain (using forgiving hitbox)
                if (goatBottomY > terrainY && 
                    this.player.y < terrainY + 8) { // 8px tolerance for terrain thickness
                    
                    // Find the highest terrain point for natural attachment
                    const attachLeftY = this.getGroundYAtPosition(leftFootX);
                    const attachRightY = this.getGroundYAtPosition(rightFootX);
                    const attachCenterY = this.getGroundYAtPosition(centerX);
                    const attachGroundY = Math.min(attachLeftY, attachRightY, attachCenterY);
                    
                    // Natural attachment with slight visual overlap
                    this.player.y = attachGroundY - this.player.height + 3;
                    this.player.velocityX = 0;
                    this.player.velocityY = 0;
                    this.player.jumping = false;
                    this.player.grounded = true;
                    this.player.state = 'idle';
                    this.player.landingPose = true;
                    this.player.flipState = 'normal';
                    
                    // Create attachment particles
                    this.createLandingParticles(this.player.x, attachGroundY);
                    
                    return; // Exit early after attachment
                }
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
        
        // Dynamic obstacle generation removed - using pre-generated obstacles
        
        // Dynamic leaf generation removed - using pre-generated leaves
        
        // Update obstacles - obstacles are stationary world objects, no movement needed
        // Only check for scoring and cleanup based on camera position
        this.obstacles = this.obstacles.filter(obstacle => {
            // Check if player passed obstacle (for scoring and terrain elevation)
            if (!obstacle.passed && obstacle.x + obstacle.width < this.player.x) {
                obstacle.passed = true;
                this.obstaclesCleared++;

                this.awardObstacleClearPoints(obstacle);

                this.checkTerrainElevation();
            }
            
            // Keep obstacles that are still visible on screen (with some margin for off-screen)
            return obstacle.x + obstacle.width > this.camera.x - 100;
        });

        // Safety snap: ensure obstacles remain grounded on terrain (handles transitions/edge cases)
        this.obstacles.forEach(obstacle => {
            const trueTopY = this.terrainChunkManager.getTerrainYAtWorldX(obstacle.x) - obstacle.height + this.obstacleGroundOverlap;
            // Always align to exact terrain to prevent any visual mismatch
            obstacle.y = trueTopY;
            // Recompute local slope angle so rendering stays aligned on moving camera/segments
            const sampleDx = 8;
            const yPrev = this.terrainChunkManager.getTerrainYAtWorldX(obstacle.x - sampleDx);
            const yNext = this.terrainChunkManager.getTerrainYAtWorldX(obstacle.x + sampleDx);
            const dy = yNext - yPrev;
            const dx = sampleDx * 2;
            obstacle.angle = Math.atan2(dy, dx);
        });
        
        // Update leaves - leaves are also stationary world objects, only update floating animation
        this.leaves = this.leaves.filter(leaf => {
            // Update floating animation for visual effect
            leaf.floatOffset += leaf.floatSpeed;
            
            // Keep leaves that are still visible on screen (with some margin for off-screen)
            return leaf.x + leaf.width > this.camera.x - 100 && !leaf.collected;
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
                // Use grounded obstacle.y for collision detection (kept in sync with terrain)
                const obstacleY = obstacle.y;
                
                if (playerRect.x < obstacle.x + obstacle.width &&
                    playerRect.x + playerRect.width > obstacle.x &&
                    playerRect.y < obstacleY + obstacle.height &&
                    playerRect.y + playerRect.height > obstacleY) {
                    console.log('Obstacle collision detected:', obstacle);
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
                this.score += 100;
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
        
        // Prepare snapped camera positions for stable ground rendering
        this.renderCameraX = Math.floor(this.camera.x);
        this.renderCameraY = Math.floor(this.camera.y);

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
        
        // Draw ground as a continuous band that follows the terrain profile to avoid stepping
        const sampleStep = 2; // small step for smooth silhouette while avoiding heavy cost
        ctx.beginPath();
        // Top edge (terrain line)
        let gy0 = Math.floor(this.getGroundYAtPosition(this.renderCameraX) - this.renderCameraY);
        ctx.moveTo(0, gy0);
        for (let x = 0; x <= this.canvas.width; x += sampleStep) {
            const worldX = x + this.renderCameraX;
            const gy = Math.floor(this.getGroundYAtPosition(worldX) - this.renderCameraY);
            ctx.lineTo(Math.floor(x), gy);
        }
        // Bottom edge (offset band thickness)
        const bandThickness = 4;
        const rightGy = Math.floor(this.getGroundYAtPosition(this.renderCameraX + this.canvas.width) - this.renderCameraY) + bandThickness;
        ctx.lineTo(this.canvas.width, rightGy);
        for (let x = this.canvas.width; x >= 0; x -= sampleStep) {
            const worldX = x + this.renderCameraX;
            const gy = Math.floor(this.getGroundYAtPosition(worldX) - this.renderCameraY) + bandThickness;
            ctx.lineTo(Math.floor(x), gy);
        }
        ctx.closePath();
        ctx.fill();

        // Optional small detail rectangles:
        // - Only when the area is flat both ahead and behind
        // - Place one slightly above and one slightly below the ground line for a crisp rocky edge on flats
        const detailStep = 20;
        for (let x = 0; x < this.canvas.width; x += detailStep) {
            const worldX = x + this.renderCameraX;
            const gyCenter = Math.floor(this.getGroundYAtPosition(worldX) - this.renderCameraY);
            const gyNext = Math.floor(this.getGroundYAtPosition(worldX + detailStep) - this.renderCameraY);
            const gyPrev = Math.floor(this.getGroundYAtPosition(worldX - detailStep) - this.renderCameraY);
            if (gyNext === gyCenter && gyPrev === gyCenter) {
                const sx = Math.floor(x);
                // One below the ground band edge, one hugging slightly above the edge
                ctx.fillRect(sx + 5, gyCenter + 4, 10, 2);
                ctx.fillRect(sx + 2, gyCenter - 2, 16, 2);
            }
        }
        
        // Draw gradient from terrain line to bottom of screen
        this.drawUndergroundGradient(ctx);
        
        // Draw heavy salt and pepper particle texture on ground
        this.drawGroundParticleTexture(ctx);
        
        // Add rocky texture details on visible terrain with dark grayscale and random colors
        for (let x = this.groundOffset; x < this.canvas.width + 50; x += 45) {
            const worldX = x + this.renderCameraX;
            const groundY = this.getGroundYAtPosition(worldX) - this.renderCameraY;

            // Do not place rocky texture on slopes (upslope or downslope).
            // Use strict detection: if there's any meaningful change ahead or behind, skip.
            const sampleDx = 12; // pixels to sample for slope detection
            const groundYNext = this.getGroundYAtPosition(worldX + sampleDx) - this.renderCameraY;
            const groundYPrev = this.getGroundYAtPosition(worldX - sampleDx) - this.renderCameraY;
            const slopeEps = 0.5; // treat differences >= 0.5px as a slope
            if (Math.abs(groundYNext - groundY) >= slopeEps || Math.abs(groundYPrev - groundY) >= slopeEps) {
                continue; // skip rocky texture on any slope
            }

            // Additional flatness requirement: ensure a wider neighborhood is flat
            // Check ±24px in 4px steps; if any height differs, skip
            let isFlatNeighborhood = true;
            for (let dx = -24; dx <= 24; dx += 4) {
                const gyN = this.getGroundYAtPosition(worldX + dx) - this.renderCameraY;
                if (Math.abs(gyN - groundY) >= slopeEps) { isFlatNeighborhood = false; break; }
            }
            if (!isFlatNeighborhood) continue;
            
            // Use deterministic pseudo-random for consistent texture (integer world coords)
            const seed = (Math.floor(worldX) * 23) % 1000;
            const random1 = (seed * 9301 + 49297) % 233280 / 233280;
            const random2 = ((seed + 1) * 9301 + 49297) % 233280 / 233280;
            const random3 = ((seed + 2) * 9301 + 49297) % 233280 / 233280;
            
            // Dark grayscale base (20-80 range)
            const baseGray = Math.floor(20 + random1 * 60);
            
            // Add subtle random color tint
            const colorVariation = 15; // How much color variation to add
            const r = Math.max(0, Math.min(255, baseGray + (random2 - 0.5) * colorVariation));
            const g = Math.max(0, Math.min(255, baseGray + (random3 - 0.5) * colorVariation));
            const b = Math.max(0, Math.min(255, baseGray + (random1 - 0.5) * colorVariation));
            
            const rHex = Math.floor(r).toString(16).padStart(2, '0');
            const gHex = Math.floor(g).toString(16).padStart(2, '0');
            const bHex = Math.floor(b).toString(16).padStart(2, '0');
            
            // Snap to integer pixel positions
            const sx = Math.floor(x);
            const gy = Math.floor(groundY);
            ctx.fillStyle = `#${rHex}${gHex}${bHex}`;
            // On flats, allow prominent rocky nub right at the ground line
            ctx.fillRect(sx + 10, gy - 6, 8, 6);
            
            // Second texture element with different color
            const baseGray2 = Math.floor(20 + random2 * 60);
            const r2 = Math.max(0, Math.min(255, baseGray2 + (random3 - 0.5) * colorVariation));
            const g2 = Math.max(0, Math.min(255, baseGray2 + (random1 - 0.5) * colorVariation));
            const b2 = Math.max(0, Math.min(255, baseGray2 + (random2 - 0.5) * colorVariation));
            
            const r2Hex = Math.floor(r2).toString(16).padStart(2, '0');
            const g2Hex = Math.floor(g2).toString(16).padStart(2, '0');
            const b2Hex = Math.floor(b2).toString(16).padStart(2, '0');
            
            ctx.fillStyle = `#${r2Hex}${g2Hex}${b2Hex}`;
            ctx.fillRect(sx + 25, gy - 4, 6, 4);
        }
        
        // Draw obstacles aligned to local terrain slope
        if (this.renderObstacles && this.useRotatedObstacleRendering) this.obstacles.forEach(obstacle => {
            // Only draw if on or near screen
            if (obstacle.x + obstacle.width < this.camera.x - 50 || obstacle.x - this.camera.x > this.canvas.width + 50) return;
            const screenX = Math.floor(obstacle.x - this.camera.x);
            // Use true floor for rendering baseline
            const floorY = Math.floor(this.terrainChunkManager.getTerrainYAtWorldX(obstacle.x) - this.camera.y);
            const angle = obstacle.angle || 0;
            
            ctx.save();
            ctx.translate(screenX, floorY);
            ctx.rotate(angle);
            // Draw soft ground shadow band under the rock base (aligned to slope)
            {
                const ow = Math.floor(obstacle.width);
                const shadowH = Math.max(2, Math.floor(ow * 0.08)); // thickness scales with width
                const baseAlpha = 0.25; // peak opacity at the top band
                for (let i = 0; i < shadowH; i++) {
                    const t = i / shadowH;
                    const alpha = baseAlpha * (1 - t); // fade out
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = '#000000';
                    // In rotated frame, baseline is at y=0; shadow drops slightly below
                    ctx.fillRect(0, 1 + i, ow, 1);
                }
                ctx.globalAlpha = 1.0;
            }

            // Draw obstacle as a richer pixel-art rock whose base touches the rotated baseline
            const ow = Math.floor(obstacle.width);
            const oh = Math.floor(obstacle.height);

            // Subtle per-obstacle variation using a deterministic seed
            const seed = ((Math.floor(obstacle.x) * 97 + obstacle.type * 13) % 233280 + 233280) % 233280;
            const rand = (n) => (((seed * (9301 + n*37) + 49297) % 233280) / 233280);

            // Per-obstacle gray tint
            const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
            const toHex2 = (g) => clamp(Math.floor(g), 0, 255).toString(16).padStart(2, '0');
            const col = (g) => `#${toHex2(g)}${toHex2(g)}${toHex2(g)}`;
            const tint = (rand(0) - 0.5) * 20; // -10..+10 gray shift
            const base = col(48 + tint);
            const shadow = col(28 + tint);
            const mid = col(58 + tint);
            const light = col(96 + tint);
            const rim = col(20 + tint);

            // Helper to draw a capped rect
            const r = (x, y, w, h, color) => { ctx.fillStyle = color; ctx.fillRect(x, y, w, h); };

            // Base irregular silhouette per type with variation params
            // Origin is (0,0) at ground contact left; rock extends upward (-y)
            switch (obstacle.type) {
                case 0: { // Small chunky rock
                    const insetL = Math.floor(rand(1) * 3); // 0-2
                    const insetR = Math.floor(rand(2) * 3);
                    r(0, -oh, ow, oh, base);
                    // Top bevel
                    r(1 + insetL, -oh + 2, ow - 2 - insetL - insetR, 3, light);
                    // Side bevels
                    r(0, -oh + 6, 2 + insetL, oh - 8, light);
                    r(ow - (2 + insetR), -oh + 8, 2 + insetR, oh - 10, mid);
                    // Bottom shadow band
                    r(1, -4, ow - 2, 3, shadow);
                    // Cracks
                    if (rand(3) > 0.35) r(2 + insetL, -Math.floor(oh*0.6), 3, 1, rim);
                    if (rand(4) > 0.55) r(ow - 5 - insetR, -Math.floor(oh*0.4), 4, 1, rim);
                    // Random chip at base
                    if (rand(5) > 0.7) r(Math.floor(ow*0.4), -2, 3, 2, shadow);
                    break;
                }
                case 1: { // Medium faceted rock
                    const bevel = 2 + Math.floor(rand(6) * 3); // 2-4
                    r(0, -oh, ow, oh, base);
                    r(bevel, -oh + 3, ow - bevel*2, 3, light);
                    r(1, -oh + Math.floor(oh*0.35), ow - 2, 2, mid);
                    r(2, -oh + Math.floor(oh*0.65), ow - 5, 2, shadow);
                    // Side facets
                    r(0, -oh + 8, bevel, oh - 14, light);
                    r(ow - bevel, -oh + 10, bevel, oh - 16, shadow);
                    // Cracks
                    if (rand(7) > 0.3) r(Math.floor(ow*0.35), -Math.floor(oh*0.55), 5, 1, rim);
                    if (rand(8) > 0.6) r(Math.floor(ow*0.6), -Math.floor(oh*0.25), 4, 1, rim);
                    if (rand(9) > 0.75) r(Math.floor(ow*0.2), -Math.floor(oh*0.3), 3, 1, rim);
                    break;
                }
                case 2: { // Wide low slab
                    const topRise = Math.max(2, Math.floor(oh*(0.2 + rand(10)*0.15)));
                    r(0, -oh, ow, oh, base);
                    r(2, -oh + 2, ow - 4, 3, light);
                    r(1, -topRise, ow - 2, 2, mid);
                    r(0, -2, ow, 2, shadow);
                    // Cross cracks
                    if (rand(11) > 0.45) r(Math.floor(ow*0.3), -Math.floor(oh*0.5), 6, 1, rim);
                    if (rand(12) > 0.45) r(Math.floor(ow*0.65), -Math.floor(oh*0.4), 5, 1, rim);
                    break;
                }
                case 3: { // Tall pillar
                    const facetW = 2 + Math.floor(rand(13) * 2);
                    r(0, -oh, ow, oh, base);
                    r(1, -oh + 2, ow - 2, 3, light);
                    // Vertical facet
                    r(2, -oh + 6, facetW, oh - 12, light);
                    r(ow - (facetW+1), -oh + 8, facetW-1, oh - 14, shadow);
                    r(1, -Math.floor(oh*0.5), ow - 2, 2, mid);
                    // Small chips
                    if (rand(14) > 0.5) r(2, -Math.floor(oh*0.7), 2, 2, rim);
                    if (rand(15) > 0.6) r(ow - 4, -Math.floor(oh*0.35), 2, 2, rim);
                    break;
                }
                default: { // Super wide boulder
                    const capInset = Math.floor(rand(16) * 3) + 1;
                    r(0, -oh, ow, oh, base);
                    r(capInset, -oh + 3, ow - capInset*2, 3, light);
                    r(2, -oh + Math.floor(oh*0.4), ow - 8, 2, mid);
                    r(1, -oh + Math.floor(oh*0.7), ow - 2, 2, shadow);
                    // Random facets
                    if (rand(17) > 0.35) r(Math.floor(ow*0.15), -Math.floor(oh*0.6), 6, 2, light);
                    if (rand(18) > 0.45) r(Math.floor(ow*0.55), -Math.floor(oh*0.35), 8, 2, shadow);
                    // Cracks
                    if (rand(19) > 0.55) r(Math.floor(ow*0.35), -Math.floor(oh*0.5), 7, 1, rim);
                    break;
                }
            }
            ctx.restore();
        });
        
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
        
        // Draw obstacles (Rock formations) - legacy axis-aligned rendering (only when rotated rendering is OFF)
        if (this.renderObstacles && !this.useRotatedObstacleRendering) {
            ctx.fillStyle = '#000000';
            this.obstacles.forEach(obstacle => {
            // Use stored grounded position (kept in sync with terrain)
            const groundedY = obstacle.y;
            
            const ox = Math.floor(obstacle.x - this.camera.x);
            const oy = Math.floor(groundedY - this.camera.y);
            
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
            ctx.font = '48px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 50);
            ctx.font = '24px monospace';
            ctx.fillText(`Final Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2);
            ctx.fillText(`Leaves Collected: ${this.leafCollected}`, this.canvas.width / 2, this.canvas.height / 2 + 30);
            ctx.fillText('Press SPACE to restart', this.canvas.width / 2, this.canvas.height / 2 + 80);
        } else if (this.gameState === 'victory') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = '#000000';
            ctx.font = '48px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('YOU WIN!', this.canvas.width / 2, this.canvas.height / 2 - 50);
            ctx.font = '24px monospace';
            ctx.fillText(`Final Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2);
            ctx.fillText(`Leaves Collected: ${this.leafCollected}`, this.canvas.width / 2, this.canvas.height / 2 + 30);
            ctx.fillText('Press SPACE to restart', this.canvas.width / 2, this.canvas.height / 2 + 80);
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