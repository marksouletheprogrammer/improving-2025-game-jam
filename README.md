# 🐐 Goat Slinger

A skill-based 2D platformer where you control a mountain goat navigating treacherous terrain using precision jumping mechanics. Master the art of directional jumping to overcome obstacles and reach new heights!

## 🎮 How to Play

### Getting Started
Simply open `index.html` in any modern web browser to start playing.

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

#### Terrain Features
- **Dynamic Terrain**: Procedurally arranged terrain chunks with varying difficulty
- **Gradual Inclination**: Mountain path gets steeper as you progress
- **Weather Effects**: Rain and lightning for atmospheric challenge
- **Parallax Mountains**: Multi-layered background with depth

## 🏆 Victory Condition

Reach the end of the mountain terrain to win! The game features a finite course with multiple terrain chunks arranged for optimal challenge progression.

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

## 🚀 Installation & Setup

1. Download all game files
2. Ensure the following structure:
   ```
   game/
   ├── index.html
   ├── script.js
   ├── style.css
   └── assets/
       ├── music.mp3
       ├── jump.wav
       ├── collect.mp3
       └── gameover.m4a
   ```
3. Open `index.html` in a modern web browser
4. No additional installation required!

## 🔧 Browser Requirements

- Chrome 60+ (recommended)
- Firefox 55+
- Safari 12+
- Edge 79+

Requires HTML5 Canvas and Web Audio API support.

## 👥 Development Team

- **Mark Soule** - Lead Developer & Programming
- **Faizan Fahim** - Game Designer & Concept Creator  
- **Kevin Kong** - Co-Developer & Programming Support

## 📜 License

This game is released under the MIT License. Feel free to study, modify, and learn from the code!

---

*Climb higher, jump smarter, and conquer the mountain! 🏔️*