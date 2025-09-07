#!/usr/bin/env python3
"""
Generate terrain data JSON from chunk1.png
"""

from PIL import Image
import json
import os

def process_chunk_png(image_path):
    """Process a PNG chunk file and extract terrain height data"""
    try:
        # Load the image
        img = Image.open(image_path)
        width, height = img.size
        
        print(f"Processing {image_path}: {width}x{height} pixels")
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        terrain_heights = []
        
        # Process each column (X coordinate)
        for x in range(width):
            terrain_y = None
            
            # Scan from top to bottom to find first black pixel
            for y in range(height):
                r, g, b = img.getpixel((x, y))
                
                # Check if pixel is black (terrain)
                if r < 50 and g < 50 and b < 50:
                    terrain_y = y
                    break
            
            # Convert to height relative to midpoint (midpoint = height/2)
            if terrain_y is not None:
                midpoint = height / 2  # 200 for 400px height
                offset_from_midpoint = terrain_y - midpoint  # -200 to +200
                terrain_heights.append(offset_from_midpoint)
            else:
                # No terrain found, use midpoint (0 offset)
                terrain_heights.append(0)
        
        # Create terrain data structure
        terrain_data = {
            "chunks": [{
                "index": 0,
                "width": width,
                "height": height,
                "terrainHeights": terrain_heights,
                "transitionWidth": 80,
                "terrainScale": 0.8
            }]
        }
        
        print(f"Extracted terrain data: {len(terrain_heights)} height values")
        print(f"Terrain pixels found: {len([h for h in terrain_heights if h != 0])}")
        
        return terrain_data
        
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return None

def main():
    chunk_path = "assets/chunks/chunk1.png"
    
    if not os.path.exists(chunk_path):
        print(f"Error: {chunk_path} not found")
        return
    
    # Process the chunk
    terrain_data = process_chunk_png(chunk_path)
    
    if terrain_data:
        # Save to JSON file
        output_file = "terrain_data.json"
        with open(output_file, 'w') as f:
            json.dump(terrain_data, f, indent=2)
        
        print(f"\nTerrain data saved to {output_file}")
        
        # Also print the data for easy copying
        print("\n" + "="*50)
        print("TERRAIN DATA FOR GAME.JS:")
        print("="*50)
        print("const TERRAIN_DATA = " + json.dumps(terrain_data, indent=2) + ";")
        print("="*50)

if __name__ == "__main__":
    main()
