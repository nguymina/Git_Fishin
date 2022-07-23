# Git_Fishin

## Project Description
> Point and click fishing game where random water tiles will spawn a fish. There will be different kinds of fish each with different money amounts. 
Two player mode will have players taking turns catching a certain number of fish. Whoever gains the most money wins.

## Why I Made This Project
> It was a good way to tie in everything I have learned so far in the boot camp. Plus fishing is one of my favorite features in video games. All games should have a fishing minigame even if it is out of place.


## Wire Frames
> 
![Project 1](https://media.git.generalassemb.ly/user/43479/files/50f43249-4b2f-4ebc-881e-8fd7ddb1db61)


## User Stories
> As a player, I want to choose between one or two players. <br />
> As a player, I want to see where the fish are and catch them. <br />
> As a player, I want to see how much money I've gained.<br />
> As players, we want to see whose turn it is. <br />
> As players, we want to see how many turns are left. <br />
> As players, we want to see who won. <br />

### MVP Goals - Done!
1. Has Start menu to choose between single or two player modes. <br />
2. Create water tiles that change to tiles with fish randomly. These can be clicked and player receives money. <br />
3. Randomly generate a fish worth differing amounts of money. <br />
4. Can keep track of two money amounts and switches in between players each turn. <br />
5. Announces winner based on money gained if multiplayer. Announces money gained if single. <br />

### Stretch Goals
1. Working on it! - Add reeling system for multiple button presses. <br />
  -** The main functions for these work, but displaying the result ie "it got away" or "You Caught X" still needs work <br />
2. Add Shop and new rods that change number of reel button presses needed. Money Spending. <br />
3. Add Appraisal to see different fish and costs. <br />
4. Better rods decreases number of reels needed +/- increase chance of better fish. <br />
5. Done! - Different maps with night and day. <br />
  -** Issues - The Midnight Mode does not affect the reseted start menu since it is invoked after the DOM creation of the start menu element <br />
