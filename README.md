# 🐐 Goat Slinger

A skill-based 2D platformer where you control a mountain goat navigating treacherous terrain using precision jumping mechanics. Master the art of directional jumping to overcome obstacles and reach new heights!

Features procedurally generated terrain. 

# How this game was developed

This was an almost entirely vibecoded project. Using Windsurf, Claude, and GPT. 

Find out about our process in DEVELOPMENT.md.

## 🎮 How to Play

### Getting Started
Simply open `index.html` in any modern web browser to start playing.

Refresh the page to generate a new mountain.

### Controls
- **Mouse**: Aim your jump direction by moving the cursor
- **Space Bar**: 
  - Hold to charge jump power (3 power levels)
  - Release to execute jump
- **P**: Pause/Resume game
- **C**: Toggle terrain debug mode

### Gameplay Mechanics

#### Jump System
- **Directional Jumping**: Use your mouse to aim in any direction
- **Power Levels**: Hold space bar longer for more powerful jumps
  - 🟢 **Level 1**: Quick tap - Weak jump
  - 🟡 **Level 2**: Medium hold - Normal jump  
  - 🔴 **Level 3**: Long hold - Big jump
- **Flip Animations**: Extreme downward angles trigger front/back flips

#### Scoring System
- **Obstacle Clearance**: 10 base points per obstacle
- **Combo Multiplier**: Chain obstacles without touching ground (up to 5x)
- **Risk Bonus**: +15 points for close calls (clearing obstacles with <20px margin)
- **Air Time Bonus**: Points for extended jumps (>1 second airborne)
- **Height Bonus**: Extra points for high jumps (>80px above ground)
- **Leaf**: 100 points for each leaf collected

## 🏆 Victory Condition

Reach the end of the mountain terrain to win!

## 🎨 Visual Style

- **Pixel Art Aesthetic**: Crisp, retro-inspired graphics
- **Monochrome Goat**: Classic black and white mountain goat sprite
- **Dynamic Particles**: Dirt particles on landing for tactile feedback
- **Atmospheric Weather**: Rain drops and lightning effects

## 🎵 Audio Credits

- **Background Music**: "The Final Climb" by Strobotone – [Free Music Archive](https://freemusicarchive.org/)
- **Jump Sound Effect**: Goat bleat from [Pixabay](https://pixabay.com/)
- **Game Over Sound**: Goat scream from [Pixabay](https://pixabay.com/)
- **Collect Sound**: Leaf pickup from [Pixabay](https://pixabay.com/)

## 🛠️ Technical Features

### We build a procedural system for building the game world from pixelmaps.
- Programmer adds pixelmaps to `assets/chunks`.
- The game uses these to procedurally generate terrain from those pixelmaps.
- See CHUNKS.md.

### Advanced Physics
- Realistic gravity and momentum system
- Directional velocity calculations with 12-direction optimization
- Forgiving collision detection for natural gameplay feel

### Terrain Generation
- Pre-generated terrain chunks for consistent challenge
- Smooth transitions between terrain sections
- Configurable difficulty scaling

### Performance Optimizations
- Efficient particle system with cleanup
- Optimized rendering with camera culling
- Smooth camera following with configurable smoothing

### Debug Features
- Terrain chunk visualization (Press 'C' to toggle)
- Configurable obstacle rendering and collision
- Comprehensive logging system

## 🎯 Game Jam Context

**Improving 2025 Game Jam Entry**

This game was created as part of the Improving 2025 Game Jam, focusing on innovative mechanics and polished gameplay. The unique mouse-directed jumping system sets it apart from traditional platformers, requiring players to think strategically about each jump's direction and power.

## 👥 Development Team

- **Mark Soule** - Lead Developer & Programming
- **Faizan Fahim** - Game Designer, Art lead, & Programming Support
- **Kevin Kong** - Co-Developer, Sound, & Programming Support