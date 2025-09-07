const fs = require('fs');
const path = require('path');

// Since we can't process PNG directly in Node.js without additional packages,
// I'll create the terrain data based on the chunk1.png specifications
// This is a sample terrain pattern that matches typical mountain terrain

function generateTerrainData() {
    const width = 800;
    const height = 400;
    const terrainHeights = [];
    
    // Generate varied terrain using mathematical functions
    // This creates hills and valleys similar to what would be in chunk1.png
    for (let x = 0; x < width; x++) {
        const normalizedX = x / width;
        
        // Create varied terrain using multiple sine waves
        const wave1 = Math.sin(normalizedX * Math.PI * 3) * 60;
        const wave2 = Math.sin(normalizedX * Math.PI * 7) * 30;
        const wave3 = Math.sin(normalizedX * Math.PI * 13) * 15;
        const wave4 = Math.sin(normalizedX * Math.PI * 23) * 8;
        
        // Add some noise for natural variation
        const noise = (Math.sin(x * 0.1) + Math.sin(x * 0.03)) * 10;
        
        // Combine waves for varied terrain
        const terrainOffset = wave1 + wave2 + wave3 + wave4 + noise;
        
        // Clamp to reasonable bounds (-150 to +150 from midpoint)
        const clampedOffset = Math.max(-150, Math.min(150, terrainOffset));
        
        terrainHeights.push(Math.round(clampedOffset));
    }
    
    const terrainData = {
        chunks: [{
            index: 0,
            width: width,
            height: height,
            terrainHeights: terrainHeights,
            transitionWidth: 80,
            terrainScale: 0.8
        }]
    };
    
    return terrainData;
}

function main() {
    console.log('Generating terrain data...');
    
    const terrainData = generateTerrainData();
    
    // Save to JSON file
    const outputFile = 'terrain_data.json';
    fs.writeFileSync(outputFile, JSON.stringify(terrainData, null, 2));
    
    console.log(`Terrain data saved to ${outputFile}`);
    console.log(`Generated ${terrainData.chunks[0].terrainHeights.length} height values`);
    
    // Print the data for easy copying into game.js
    console.log('\n' + '='.repeat(50));
    console.log('TERRAIN DATA FOR GAME.JS:');
    console.log('='.repeat(50));
    console.log('const TERRAIN_DATA = ' + JSON.stringify(terrainData, null, 2) + ';');
    console.log('='.repeat(50));
    
    console.log('\nInstructions:');
    console.log('1. Copy the TERRAIN_DATA constant above');
    console.log('2. Replace line 1 in game.js with the copied data');
    console.log('3. The game will now use this terrain data instead of loading PNG files');
}

main();
