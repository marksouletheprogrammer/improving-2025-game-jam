# Development process

This was an entirely vibecoded project. The following is the main prompts we used and notes.

## Development Notes

## My first stab at a game
I am going to go along with the theme.
I will combine ideas number 1 and 2 from the doc.
It will be a climbing game, in the style of the trex chrome game
I will also take over the base project set. I have a repo and I am ready to go.
I am going to track my prompts because that will be interesting for the followup.

Initial prompt (windsurf, claude sonnet 4)
```
Implement a game as an HTML5 game with WebGL, CSS3, and javascript. The game should be lauchable with a local browser. On launch the game should be a simple, but elegant webpage with the game in the middle. For now the gameplay can be a button that increases a counter. The project is empty so add whatever project setup is required for the project to work.
```

Make a game like the trex chrome game
```
Implement a game similar to this reference game (<reference-game>https://github.com/wayou/t-rex-runner</reference-game>, which replaces the counter game and uses the same project setup.
Goal: Be able to play a game similar to the reference game in the browser.
Acceptance Criteria:
- The game plays, looks, and feels like the reference game.
- This game will not use the same artwork.
- Use only free artwork or basic shapes/colors for the game objects.
Scenarios:
Scenario 1: Starting game
When the user opens the webpage, they should be greeted with a button to start the game.
When the user starts the game, they should see the game board with the current score in the corner.
Scenario 2: Pausing the game
Given the user wants to pause the game, they game board should freeze.
Given the user wants to unpause the game, the game should resume exactly where it was.
Scenario 3: Game over
When the game ends, the user should see their final score.
When the game ends, the user should have an option to restart the game.
Scenario 4: Restarting game
Given the user decides to restart a game, the board should reset like it is a new game and score should reset to 0.

Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

The game worked well but it did not use the right aesthetic. So the next prompt will attempt to resolve.
```
We are going to change the aesthetic of the game to match the reference game (<reference-game>https://github.com/wayou/t-rex-runner</reference-game>.
Goal: The aesthetic should match the reference game more closely.
Acceptance Criteria:
- The game aesthetic matches the reference game.
- Monochrome coloring.
- 8 bit art style.
- Use only free artwork or basic shapes/colors for the game objects.
- The webpage that houses the game should have a matching art style.
- Text font should also match the aesthetic.
Webpage: The webpage that houses the game should have an aetehetic that matches the game.
What you should not do: Do not include any unnecesary footers, headers, or side panels.

Before you do this, go over the list of steps that you will perform. And if I approve, you may proceed.
```

That was pretty good. A little too ordinary but we can add polish later. The game is too similar to the reference game so time to make some changes.

```
We are going to make some changes to the aesthetic of the game to differentiate it from the previously referenced game.
Goal: The aesthetic should match the new vision.
Acceptance Criteria:
- Game now matches the vision.
- Maintains the previously established monochrome/8-bit aesthetic.
Vision: This will be a side scrolling mountain/rock climbing game. Our character, a mountain goat, will climb this mountain to get as high of a score as possible.
Changes:
- Name changed to "Rock Climing (TBD)".
- Character changed from dinosaur to a mountain goat.
- Desert theme replaced with a mountain theme.
Do not do the following:
- Change the monochrome/8-bit aesthetic. 

Before you do this, go over the list of steps that you will perform. And if I approve, you may proceed.
```

This worked quite well.

Day 1 notes:
- After lengthy discussion, we decided to combine game idea 1 and game idea 2. Essentially we will have the aesthetic of the trex chrome dino game and the gameplay of the golf game. 
- I have the game working but it plays much too similar to the dino game.
- I have not incorporate the golf aspect of the movement system that we want.
- The game lacks polish: No sound, no images, looks flat, score/difficultly/hitbox not balanced.

---
# Day 2
Faizan left some new notes. He attempted to add a feature with claude but had some issues. He had some other ideas that we can integrate!

Faizan had an idea that I want to try until I can connect with him. He wants to give it a CRT aesthetic. This seems like a cool way to evolve the aesthetic. It should score big points too.

I will break this into 2 parts.
1. Change the aesthetic to be CRT themed.
2. Seat the game board into the image that Faizan found. Or one like it :)

So let's do part 1. Here is the prompt:
```
We are going to evolve the aesthetic of the game to have a CRT monitor theme.
Background: This game is a mountain climbing game with a monochrome 8 bit style. 
Vision: CRT-style screen, 8 bit style game. Like a commodore game.
Acceptance Criteria:
- The game board aesthetic matches the vision.
- The monochrome and 8 bit style should be maintained, but it should be monochrome and 8 bit in the way that real CRT screens were monochrome and 8 bit. 
Examples images:
- https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fach54cqmrsp01.jpg
- https://thumbs.dreamstime.com/b/retro-computer-screen-green-text-vintage-tech-display-stock-photo-generative-ai-old-displaying-evoking-technology-373355353.jpg
- https://media.slidesgo.com/storage/28528868/responsive-images/0-1980s-computer-screen-style-minitheme___media_library_original_384_216.jpg
- https://unsplash.com/photos/a-computer-on-a-desk-BTYss0CHM2w
What you should not do: 
- Do not include any unnecesary footers, headers, or side panels.
- Do not include a background image.
- Do not change the webpage that houses the game. The game board is the only concern.

Before you do this, go over the list of steps that you will perform. And if I approve, you may proceed.
```

It looks good but a bit too green. We can fix later. Let's move on to part 2.

Part 2 prompt
```
We are going to change the borders and background image. 
Vision: The game board will be seated onto an image of a CRT monitor. The game board will replace the screen of the monitor.
Acceptance Criteria:
- The boarders and background match the vision.
- The game board had minimal to no changes. Any changes should just be to help blend it into its background.
Background image: Find it in `assets` folder.
What you can do:
- Feel free to resize or edit the image to better blend it with the game board.
What you should not do: 
- Do not include any unnecesary footers, headers, or side panels.

Before you do this, go over the list of steps that you will perform. And if I approve, you may proceed. If you are not able to read the image then abort this.
```

Okay so that did NOT work. The plan seemed reasonable, but the AI did a horrible job at fitting the game board to the image. Ew. We are going to try again but this time Faizan is going to alter the image. 

Here is the NEW prompt (with fresh context):
```
We are going upgrade the style of the image to make it more immersive. The game is a CRT monochrome 8 bit game and we want to make it immersize by putting inside of a CRT monitor.  
Vision: The game board will be seated onto an image of a CRT monitor. The game board will replace the screen of the monitor.
Acceptance Criteria:
- The boarders and background match the vision.
- The game board changes should just be to help blend it into its background.
Background image: 
- Find it in `assets` folder.
- The image is of a CRT monitor with a screen.
- The screen portion is colored with #15FF0A.
- The game board should go into that area marked with #15FF0A.
What you can do:
- Feel free to resize or edit the image to better blend it with the game board.
What you should not do: 
- Do not include any unnecesary footers, headers, or side panels.

Before you do this, go over the list of steps that you will perform. And if I approve, you may proceed. If you are not able to read the image then abort this.
```

This worked... better? But I think claude is really not that good at image recognition to be able to do this. So we are going to pivot.

```
We are going upgrade the style of the image to make it more immersive. The game is a CRT monochrome 8 bit game and we want to make it immersize by putting inside of a CRT monitor.  
Vision: The game board will be seated onto an image of a CRT monitor. The game board will replace the screen of the monitor.
Acceptance Criteria:
- The boarders and background match the vision.
- The game board changes should just be to help blend it into its background.
Example project: 
- See page source: https://pieter.com/
- This example project is a toy app where the screen in embedded into a CRT monitor. We want to use this style for this project.
- Embed the game into a CRT monitor in a similar way to this project.
What you can do:
- Do not include any unnecesary footers, headers, or side panels.

Before you do this, go over the list of steps that you will perform. And if I approve, you may proceed. If you are not able to read the example projec then abort this.
```

This completely did not work.

We decided to ditch the CRT thing for now. Personally, I liked the CRT effect, it was just too dramatic. A little more subtle would have gone a long way. I might revisit this if I have time.

# Day 2 - back to gamplay
Faizan made some gameplay changes. I don't have the prompt that Faizan used.

It works but I had to split up the code weirdly. We picked up some tech debt doing this because now utils are copied across both files. I will clean this up before proceeding.


I am going to try to work on the elevation aspect to the game. Right now it's rough.
Here is the next prompt:
```
This is a monochrome 8 bit game about a mountain climbing goat. We are going to make improvements that will make it feel more like the goat is mountain climbing.
Goal: Give more verticality to the game.
Acceptance Criteria:
- It feels like the player is traveling up.
- The screen should move up as the elevation increases so that the player stays roughly in the bottom right corner.
- Existing functionality such as controls, pause/resume, game over, and starting the game should as they did before.
Scenarios:
Scenario 1: Starting game
- When the player starts the game, the character will appear on flat terrain.
- After completing some obstacles, the elevation will start to slightly incline.
Scenario 2: Progressing through the game
- As the elevation rises, the player sprite will naturally rise up on the game board.
- Occasionally, the camera will have to move up to compensate. So that the player sprite does not cross the 50% height line in the y direction.
Scenario 2: Obstacles as the elevation rises
- As the elevation rises, the floor also rises. This will cause the obstacles to also rise.
- Obstacles are always attached firmly to the ground. So if the floor moves up then so do the obstacles.
- Occasionally, the camera will have to move up to compensate. The obstacles should still stay attached to the floor.
Scenario 3: Climbing
- When the player climbs the player will jump up and land just like does now.
- The player always lands exactly on the ground.
- If the elevation happens to rise as that moment, then the player will land on that higher ground.
- When the player climbs, only the player sprite should be affected. All other objects should not move due to the player climbing.
Scenario 4: Scrolling
- As the background scrolls, the elevation should incline slightly. To give a sense that the elevation is going up gradually.
- As the elevation inclines, that elevation is where the ground is.
Scenario 5: The ground
- The ground is the elevation line.
- As the elevation line increases, that marks where the ground is.
- Obstacles are always on the ground.
- The player sprite always lands on the ground. 
- The elevation slowly increases over time.

Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

This went very very badly. I might have tried to do too much. Let me reduce scope.

```
This is a monochrome 8 bit game about a mountain climbing goat. We are going to make improvements that will make it feel more like the goat is mountain climbing.
Goal: Give more verticality to the game.
Acceptance Criteria:
- The ground gradually inclines over time.
Scenarios:
Scenario 1: Starting game
- When the player starts the game, the character will appear on flat terrain.
- After completing some obstacles, the elevation will start to slightly incline.
Scenario 2: Scrolling
- As the background scrolls, the elevation should incline slightly. To give a sense that the elevation is going up gradually.
- As the elevation inclines, that elevation is where the ground is.
Scenario 5: The ground
- The ground is the elevation line.
- As the elevation line increases, that marks where the ground is.
- Obstacles are always on the ground.
- The player sprite always lands on the ground. 
- The elevation slowly increases over time.

Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

I found out that Windsurf has "memories". Basically cached context. I think this was screwing me over because it kept making the same mistake over and over again. I turned off memories and now trying the above again.

Memories are great for caching but I don't think I want that right now.

THIS worked. 
Now next prompt to fix the camera:
```
Next we will improve the viewport. Currently, as the elevation rises, so does the player and obstacles. We need to make the viewport more dynamic so the player generally stays in the lower left hand side.
Goal: Keep the player in the lower left hand side as much as possible.
Acceptance Criteria:
- The screen should move up as the elevation increases so that the player stays roughly in the bottom left corner.
- Existing functionality such as controls, pause/resume, game over, and starting the game should as they did before.
Scenarios:
Scenario 1: Starting game
- When the player starts the game, the character will appear on flat terrain.
- After completing some obstacles, the elevation will start to slightly incline.
Scenario 2: Progressing through the game
- As the elevation rises, the player sprite will naturally rise up on the game board.
- Occasionally, the camera will have to move up to compensate. So that the player sprite does not cross the 50% height line in the y direction.
Scenario 2: Obstacles as the elevation rises
- As the elevation rises, the floor also rises. This will cause the obstacles to also rise.
- Obstacles are always attached firmly to the ground. So if the floor moves up then so do the obstacles.
- Occasionally, the camera will have to move up to compensate. The obstacles should still stay attached to the floor.
Scenario 3: Climbing
- When the player climbs the player will jump up and land just like does now.
- The player always lands exactly on the ground.
- If the elevation happens to rise as that moment, then the player will land on that higher ground.
- When the player climbs, only the player sprite should be affected. All other objects should not move due to the player climbing.

The viewport camera from Sonic the Hedgehog is similar to the viewport system we need here. Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

That worked quite well. 

We need to make some changes to how mountains are rendered.
```
We need to make some changes to how mountains are rendered. Right now they are all black. Which interferes with seeing the player and obstacles as the elevation rises.
Goal: Make the mountains somewhat translucent to make the game visually easier to read.
Acceptance Criteria:
- The mountains should look more interesting and less obtrusive.
Mountain: The background mountains should not be completely black. Instead, they should be partially transparent, with shades of gray to distinguish between mountains. You should alter the opacity and grayscale of mountains. Make it look natural. Like looking at the black hills from a distance.

Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

Nailed it

Next I will add some visual flair
```
We want to give more sense of verticality by slowly increasing the height of the mountains as the elevation increases.
Goal: Visual change to make the mountain height increase over time.
Acceptance Criteria:
- The game plays exactly the same as before.
- This is a visual change only.
Scenario 1: Starting the game
- When the game starts, the mountains appear in the background with some height variation. This is called the mountainline.
- At the start of the game, the mountainline stays consistent.
Scenario 2: Progressing through the game
- As the player progresses, the elevation slowly increases as currently implemented.
- The mountains should start getting higher slowly as the elevation increases. In other words, the mountainline should slowly increase.
Scenario 3: Mountainline increasing
- The mountainline does not have to increase at the same rate as the elevation. It can be staggered.
- As the mountainline increases, the variance of individual mountain heights can also slightly increase.
  
The purpose is to give more visual feedback to the increase in elevation. Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

This is where it fell apart. I will clear context and try again.
Let's break it down differently. First I need mountains to scroll. Then I need to adjust their elevation.

Let's start with getting mountains to scroll:
```
This is a monochrome 8 bit game about a mountain climbing goat. We are going to make improvements that will make it feel more like the goat is mountain climbing.
Goal: Give more movement to the game.
Acceptance Criteria:
- The background mountains slowly scroll.
Scenarios:
Scenario 1: Starting game
- When the player starts the game, they see mountains in the background.
- The game starts parallax scrolling.
Scenario 2: Scrolling
- As the game scrolls, the mountains should start to scroll.
- The mountains scroll at a slower rate than the ground.
Scenario 3: Mountain spawns
- As the mountains scroll, new mountains should spawn to the right of the viewport. Not visible.
- As the viewport moves, those newly spawned mountains become visible.
Scenario 4: Mountain despawns
- As the mountains scroll, they will start to move left of the viewport.
- One a mountain has completely left the viewport, it should be despawned.

Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

Ok that sort of worked. I might be getting to a point where I need to manually code a bit.
 Let's try this to sort out some visual issues:
 ```
We will make some small visual improvements.
1.) Mountains base: The base of mountains can vary in their y-axis. All mountains should have their bottom be at the same y-dimension. All mountains of all colors should share the same y-dimension bottom.
2.) Leaves tend to spawn too high. They should spawn a little lower on average. The range should be about half the height of the climb/jump to about the height of the climb/jump

Before you implement the game, go over the list of steps that you will perform. And if I approve, you may proceed.
```

Yeah it did an awful job. I will try again but one at a time.

I kinda worked but I had to do manual changes.

# Day 2 gameplay boogaloo
Kevin added sound effect so hooray for Kevin!
Okay we got on a detour but now we are going to implement the "golf" like movement system. 

This is going to be pretty complex so let's break this down.
The player has to choose an angle
Then they have to provide "power" or velocity 
then the character needs to fly realistically in that direction and land

There are several parts to this. 
- The new controls
	- choosing angle
	- selecting power
- New movement
	- landing
	- flying in a direction

Let's start with movement
How about, every time we climb, instead of the "jump" that it does now, instead it flings in a random direction at a certain initial velocity. Then we can add in the ability to control the fling. This lets us break down the problem and solve each independently.

We will start with a fresh context.
Here is the prompt:
```
This is an 8bit monochrome rock climbing game featuring a goat traversing up a mountain filled with obstacles and treats. The movement is very simple. The character can simply "climb" (or jump) while moving across a parallal screen. The skill is all in the timing of the jump. We are going to renovate the gameplay in several steps. The first is to change how the goat moves.
Goal: Change how the goat moves. Make it move more realistically and more dynamically.
Movement: When the player presses "climb", the goat will be flung forward and land.
Acceptance Criteria:
- The character always moves in a positive X direction.
- The direction is chosen randomly but in a positive X direction.
- The goat jumps realistically.
- The goat always lands on its feet.
Scenario 1: The player does nothing
- The goat does not move and the screen and mountains do not move.
- Clouds still move but much more slowly.
Scenario 2: The player presses "climb".
- A random forward and upward direction is chosen.
- The goat is flung in that direction with an initial velocity and acceleration.
Scenario 3: The goat is in the air.
- The goat should move realistically in the air.
- The goat should move with the speed resembling a real life mountain goat.
- The goat arc should arc come and come back to the ground in a way that resembles a real life mountain goat.
Scenario 4: The goat lands.
- The goat always lands on its feet. 
- Once the goat touches ground then the scrolling should stop.
- Once the goat touches gorund then the clouds should still scroll but more slowly.
- Essentially we return back to Scenario 1.
Scenario 5: The goat hits an obstacle mid air.
- The goat dies and it is a game over.
Scenario 6: The goat touches an obstacle on landing.
- The goat dies and it is a game over.
  
This is just the first part of a series of changes. We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.
```

I had to do some follow up prompts to tune the movement. All in all not bad.
Next I will review Kevin's recent change and merge.

Okay so we are all good and everything is still working.

Let's move on to adding controls to our flinging
```
Now we will do part 2 where we will remove the random angle choosing and let the player choose the angle.
Goal: Player now can choose the angle.
Movement: When the player presses "climb", they use the mouse to select an angle. 
Controls:
- Mouse is used to select an angle.
- The angle between the mouse and the goat is used to select the angle.
- The mouse position relative to the goat is used to select direction. 
- Essentially think of a circle around the goat, the mouse selects a point along that circtle based on the mouse's relative position.
- An arrow appears around the goat that shows the angle and direction currently selected.
- When the player presses "climb" then the goat is flung in the chosen direction and angle.
Acceptance Criteria:
- Angle is no longer randomly selected.
- There is no limit on the angle or direction that the player can choose. 
- The goat always lands on its feet.
- This change only affects how the angle and direction is chosen. How the goat flies through the air and how the screen scrolls does not change.
- All game over rules still apply.
Scenario 1: The player chooses a forward angle
- The goat climbs in that direction and angle.
Scenario 2: The player chooses a backwards angle.
- The goat climbs in that direction and angle. 
- Nothing is invalid about jumping backwards.
Scenario 3: The player chooses to fling the goat down.
- The goat should stop on its feet as soon as it touches the ground per normal.
- If the downward angle is extreme, the goat should do a front flip or back flip (depending on direction) before landing on its feet.
  
Now we are giving the player control over the fling. We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.
```

That was okay. I had to do some refinement. Let's get more specific with the next prompt.

```
We are going to refine the climb ability some more.
The direction of the jump will change how the jump is performed.
Consider 4 directions:
Foward: The jump should be longer with a lower height.
Backward: The jump should be longer with a lower height.
Up: The jump should be tall but not go as far horizontally.
Down: Forward/backward rules apply. Otherwise the goat should stop once it touches the ground per existing rules.
The magnitude in which the jump should be long or tall is a sliding scale depending on how extreme we are in each direction. For example, exactly 60 degrees forward would be balanced between height and distance. Perfect 90 would be max height but min distance. 0 or 180 degrees would be max distance but min height. With sliding values for the degrees in between.

Please give me an outline of what you will do and only proceed on my approval.
```

It took some refinement and I will have to refine some more. But not bad.
Let's move on to the last control change for tonight.

```
This will be the last major movement change that we will make for some time.
Goal: Player now can control the initial velocity and acceleration.
Movement: When the player presses "climb", they hold down space bar to increase the power of their climb.
Controls:
- When the player presses "climb" then the goat is flung in the chosen direction and angle as implemented.
- The player can choose the "power" of the climb by holding down spacebar. 1000 ms for level 1, 2000 ms for level 2, and 3000 ms for level three.
- An indicator shows the selected power level.
- Power levels are also distinguished by color in the indicator.
- Higher power level means higher initial velocity and accleration.
- Level 1 is a weak jump, level 2 is normal jump, level 3 is big jump.
Acceptance Criteria:
- The initial velocity and initial acceleration are no longer fixed.
- They vary depending on the chosen power level.
- The player has to hold spacebar down for 100ms before the power indicator appears.
- All timing should be configurable with constants so that it is easy to tune.
Edge cases:
- If Player lets go of spacebar before 100ms then assume weak jump.
- If the Player holds down space bar for more than 4000ms, go back to power level 1 and start the cycle again.
  
We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.
```

Okay I got it working. 

Final update for today:
- I will leave the PR until tomorrow to give you guys time to review, but feel free to merge if you like it better: https://github.com/marksouletheprogrammer/improving-2025-game-jam/pull/6
- There are some weird bugs:
	- The game gets weird when you move backwards.
	- Obstacles spawn continuously when you are stationary.
- The movement needs play testing and refinement.
	- We have to tune it until it feels just right.

---
# Final day notes
Today we will sync with team. I really want to implement a new terrain system. That will really make this game pop.

The AI chat seems to think it can code this. We will see. I will provide a prompt just in case.

```
We are going to change the terrain system in this game. Instead of the path just being a straight line, with rising elevation, we want more interesting terrain. We will build a terrain system that allows the game designers to easily add new terrain.
Goal: Implement working new terrain system.
<glossary>
Terrain: Refers to the floor. This is where obstacles spawn. The goat is anchored to the terrain or floor when it is not airborne.
Floor: Same as Terrain.
Elevation line: There is a horizontal line that represents the current elevation. Currently the terrain always follows the elevation line.
Play Area: Part of the canvas where the game is actually played. Does not include the part of the canvas that includes buttons, bezels, or borders.
</glossary>
How it works currently: The terrain is rendered as a straight line following the elevation line.
How the new system will work:
- The folder `assets/chunks` will contain pixelmaps of white and black pixels as png files.
- The files will be the size of the play area.
- White pixels represents nothing.
- Black pixels represent where the terrain should be rendered.
- The game should read this file and use it to interpret how to render the path.
Assumptions:
- Assume the pixelmaps contain only pure white or pure black pixels.
- If it is hard to tell where the path should be at any given point, just render flat ground there instead.
- If there are weird transitions then do your best to make the transition natural.
- For now, assume there will be only 1 chunk.
- For now, assume the game will start with a flat screen, followed by the chunk, and then followed by infinite flat screens as implemented currently.
Acceptance Criteria
- The path is always rendered as an unbroken line.
- This change only affects how the floor is generated.
- Obstacles always render on the floor.
- The goat is anchored to the floor when it is not airborne.
- The viewport system always follows the goat's position on the terrain.
- Elevation still rises releative to the elevation line, as it does now.
Fallback: If there are no valid pixel maps, then fallback to rendering the floor the old way.

We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.
```

Okay so it was pretty buggy but it did work kinda. How it rendered the chunk looks... interesting.

I need to make some changes:
```
We are going to make changes to how the chunks are rendered.
Chunk: 800 pixel width and 400 pixel height part of the level sourced by pixelmaps.
- For Chunks, the horizontal midpoint of the pixelmap should line up to the elevation line.
- Chunks and flat terrain should naturally transition into the next chunk.
- It's okay to modify the ends of the chunk to make it more easily transition.
- The terrain in the Chunk should look natural, like a continuation of the flat terrain.
  
We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.

```


This failed because we cannot read files in javascript in most browsers. So I am going to pivot here.
```
We are going to make changes to how the chunks are rendered.
Chunk: 800 pixel width and 400 pixel height part of the level sourced by pixelmaps.
- For Chunks, the horizontal midpoint of the pixelmap should line up to the elevation line.
- Chunks and flat terrain should naturally transition into the next chunk.
- It's okay to modify the ends of the chunk to make it more easily transition.
- The terrain in the Chunk should look natural, like a continuation of the flat terrain.

The process of how we manage chunks will be different.
- When asked, analyze the chunk files.
- Convert them to JSON object with the data that you need to render the terrain.
- Then save that JSON object to a local file.
- A human will move the JSON object into a variable in game.js for you.
- When the game is running, it will render chunks based off that variable.
- Leave yourself instructions so that you can do this agin.
- Also, write instructions for the human who will help you.
  
The purpose of this change so that we can run the game without having to run a server. This let's us do that by doing part of the process at build time.
  
We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.

```


Okay so that was a bit rough. But kinda sorta working. But now the paths render like garbage.
Let's try to fix:

```
We are going to make changes to how the chunks look when rendered.
- Currently it is coded to line up the horizontal midpoint.
- Instead, change it so that the lower 30% horizontal represents the elevation line.
- When the goat is traversing terrain created from a chunk, it's feet should always land squarely on the terrain.
- If the goat hits terrain mid air it should immediately attach to that point on the terrain. The goat can still climb from here.
  
We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.

```


The AI totally failed. I think context purge is in order.
We will try again after context purge.

```
This is a monochrome 8 bit mountain climbing game. We have a system for loading in levels from files. We extract JSON data from the files, feed into the source code, then render based on that JSON. We are going to make changes to how the chunks look when rendered.
- Currently it is coded to add texture similar to flat terrain.
- Chunk terrain is often not flat. It has curves and sharp lines.
- We can make the path look better by adding in texture with more rounded shapes and triangular shapes. This will make the terrain look more naturalistic.
- Do not overcomplicate this. I think just putting random opacity small shapes, slightly overlapping, all along the chunked path will help. Start with that and see how it looks.
  
We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.

```

Okay we are going to move on the last part of this. Now we want to render a bunch of chunks.

```
This is a monochrome 8 bit mountain climbing game. It has the ability to accept pixelmaps, render JSON from them, and then use that JSON to form the game terrain. We are going to make this system more sophisticated.
Goal: Be able to render multiple chunks.
Acceptance critia:
- We are not going to make any changes to the game. Only the chunk analyzer.
Assumptions:
- The PNG -> JSON build step will remain.
Scenario 1: At build time.
- When creating the JSON data, the chunk analyzer should read all chunks in the assets/chunks folder.
Chunk picker:
- Should pick 10 chunks (this is configurable) and then render the JSON for them.
- The chunk picker happens at build time.
  
We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.  
```

```
This is a monochrome 8 bit mountain climbing game. It has the ability to accept pixelmaps, render JSON from them, and then use that JSON to form the game terrain. We are going to make this system more sophisticated.
Goal: Be able to render multiple chunks.
Assumptions:
- The PNG -> JSON build step will remain as it is now.
Scenario 1: Game loads.
- The game boots up with all data as JSON in a variable, as it does now.
- When the game boots up, it should pick X chunks to render. Where X is configurable. 
- Those X chunks are chosen randomly and in random order.
- Flat chunks are inserted randomly inbetween chunks.
- 5 flat chunks should be inserted, also configurable.
- Terrtain generator is run.
Scenario 2: Obstacles and leaf rendering.
- Obstables and leaves should be rendered at the time the chunk is rendered.
- It should use the same algorithm for doing so as now.
- Once chunk rendering is complete, no more obstacles or leaves can be inserted.
Scenario 3: Player starts game.
- No more chunks will be loaded.
- If the player reaches the last chunk then it is game over.
Terrain generator:
- Happens on game load.
- This decides the order of rendering.
- It decided which chunk to use and when to insert a flat chunk.
- The first chunk is always a flat chunk.
  
We will tune this until we are happy before we move on. Please give me an outline of what you will do and only proceed on my approval.  
```


Okay so I have spent several hours debugging small issues. Broadly, this strategy worked. No I am getting grumpy. I just want to to not have changing things subtly. I can now understand why ClaudePlaysPokemon failed to beat the game.

After some manual tweaking I was able to get things to somewhat work. Though there are some bugs. I will have to spend the rest of my time bug fixing.