# Chunk Processing System

This document explains how to create and integrate terrain chunks for the mountain climbing game.

## Overview

The game uses a build-time chunk processing system that converts PNG terrain images into JSON data. This allows the game to run completely offline without requiring a web server or dealing with CORS issues.

## Process Flow

```
PNG Chunk Files → Chunk Analyzer → JSON Data → game.js Integration → Working Game
```

## For AI Assistant: Creating New Chunks

### Step 1: Prepare PNG Files
- Create 800x400 pixel PNG files
- Use black pixels for terrain (RGB values < 50)
- Use transparent/white pixels for empty space
- The horizontal midpoint (pixel row 200) will align with the elevation line
- Save files in `assets/chunks/` directory

### Step 2: Process Chunks
Choose one of these methods:

#### Method A: Using the Chunk Analyzer Tool
1. Start a local server: `python3 -m http.server 8001`
2. Open `http://localhost:8001/chunk_analyzer.html`
3. Drag and drop PNG files into the upload area
4. Click "Download terrain_data.json"
5. The tool will generate complete terrain data

#### Method B: Using the Node.js Generator
1. Run: `node generate_terrain_data.js`
2. This creates mathematical terrain (for testing/fallback)
3. Copy the output from the console

#### Method C: Using the Simple Processor
1. Start a local server: `python3 -m http.server 8001`
2. Open `http://localhost:8001/process_chunk.html`
3. View the generated JSON in the textarea

### Step 3: Extract JSON Data
The output will be in this format:
```javascript
const TERRAIN_DATA = {
  "chunks": [
    {
      "index": 0,
      "width": 800,
      "height": 400,
      "terrainHeights": [/* 800 height values */],
      "transitionWidth": 80,
      "terrainScale": 0.8
    }
  ]
};
```

## For Human Helper: Integrating JSON Data

### Step 1: Locate the Placeholder
Open `game.js` and find this line at the top:
```javascript
// TERRAIN_DATA_PLACEHOLDER - Replace this line with: const TERRAIN_DATA = [JSON data from chunk analyzer];
```

### Step 2: Replace with Terrain Data
Replace the placeholder line with the complete `const TERRAIN_DATA = {...};` declaration from the chunk analyzer.

**Example:**
```javascript
// Before:
// TERRAIN_DATA_PLACEHOLDER - Replace this line with: const TERRAIN_DATA = [JSON data from chunk analyzer];

// After:
const TERRAIN_DATA = {
  "chunks": [
    {
      "index": 0,
      "width": 800,
      "height": 400,
      "terrainHeights": [-16, -13, -10, /* ... 800 values ... */, -13, -16],
      "transitionWidth": 80,
      "terrainScale": 0.8
    }
  ]
};
```

### Step 3: Test the Game
1. Open `index.html` directly in a web browser (no server needed)
2. The game should load without any CORS errors
3. You should see terrain chunks with smooth transitions

## Terrain Data Explanation

### Key Properties
- **`terrainHeights`**: Array of 800 height values relative to the elevation line
- **`transitionWidth`**: Number of pixels for smooth blending at chunk edges (default: 80)
- **`terrainScale`**: Multiplier for terrain height (default: 0.8)

### How It Works
1. **Midpoint Alignment**: Pixel row 200 (middle of 400px height) aligns with the game's elevation line
2. **Height Calculation**: Each terrain height is an offset from the midpoint (-200 to +200 pixels)
3. **Smooth Transitions**: First and last 80 pixels of each chunk blend with flat terrain
4. **Natural Progression**: Terrain appears as a continuation of the base elevation line

## Troubleshooting

### Common Issues

**"TERRAIN_DATA not found" warning:**
- The JSON data wasn't properly integrated into game.js
- Check that the `const TERRAIN_DATA = {...};` line is at the top of game.js

**Terrain looks too dramatic/flat:**
- Adjust the `terrainScale` value (0.5 = flatter, 1.2 = more dramatic)

**Abrupt transitions:**
- Increase the `transitionWidth` value for smoother blending

**No terrain visible:**
- Verify the PNG has black pixels for terrain
- Check that chunk dimensions are 800x400 pixels

## File Structure

```
gamejam2025/
├── assets/chunks/
│   └── chunk1.png          # Source PNG files
├── chunk_analyzer.html     # Full-featured analyzer tool
├── process_chunk.html      # Simple processor
├── generate_terrain_data.js # Mathematical generator
├── terrain_data.json       # Generated data file
├── game.js                 # Main game file (integrate JSON here)
└── CHUNKS.md              # This documentation
```

## Adding Multiple Chunks

To add multiple terrain chunks:

1. Create multiple PNG files (chunk1.png, chunk2.png, etc.)
2. Use the chunk analyzer to process all files at once
3. The generated JSON will contain multiple chunks in the array
4. Each chunk will be positioned sequentially in the game world

Example with multiple chunks:
```javascript
const TERRAIN_DATA = {
  "chunks": [
    {
      "index": 0,
      "width": 800,
      "height": 400,
      "terrainHeights": [/* chunk 1 data */],
      "transitionWidth": 80,
      "terrainScale": 0.8
    },
    {
      "index": 1,
      "width": 800,
      "height": 400,
      "terrainHeights": [/* chunk 2 data */],
      "transitionWidth": 80,
      "terrainScale": 0.8
    }
  ]
};
```

## Benefits of This System

✅ **No Web Server Required** - Game runs with `file://` protocol  
✅ **No CORS Issues** - All data embedded in JavaScript  
✅ **Fast Loading** - No runtime image processing  
✅ **Precise Control** - Exact terrain height per pixel  
✅ **Smooth Transitions** - Natural blending between chunks and flat terrain  
✅ **Scalable** - Easy to add multiple chunks  

---

*This system was designed to work around browser security restrictions while maintaining the flexibility to create custom terrain from PNG images.*
