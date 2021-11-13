# Darkest-cave
This is a very small game as well as an example of the project structure I would like to use for game creation from here on out.

# Project Stages

* Inital Setup
* List Essentials (Scene(s), Character(s), Game Logic)
* Scene Essentials
* Character Essentials
* Game Logic Essentials
* List Features and Levels to Implement
* * Pick Item to Implement
* * Code Item
* * Implement Visuals Surrounding Item
* * Add Any Sounds needed for Item
* * Polish Items fully
* * <strong><em>Repeat Until No More Items</em></strong>
* List Whole Games Final Polish (Stretch Goals Go Here)
* Prepare Store/Game Page
* Publish

## Further Notes if needed:

### Inital Setup
* Pull Down Project Structure
* Setup Version Number/Update Scripts
* Setup Change Log
* Setup Source Log
* Pull Inital Assets

### List Essentials (Scene(s), Character(s), Game Logic)
* Scene Essentials might be stuff like: physics, background systems, background music setup
* Character Essentials might be stuff like: movement system, character physics, actions required to operate from day 1
* Game Logic Essentials might be stuff like: win/loss conditions, very basic ui, level transitions

## Scripts

## Install

### Commit Code
```sh
#version number is handled as
Major_Update.Minor_Updates.Fixes
# Commits the code to github and increments the version number
npm run update-major
npm run update-minor
npm run update-patch
```

```sh
# Installs node dependencies for this project
npm install
# Installs github dependencies for this project
git submodule init
git submodule update
```

### Develop

```sh
# Runs a developer server hosting the game
npm run serve
# Runs a developer server hosting the game, also accessible by other lan
# devices such as mobile phones
npm run serve:lan
# Runs a local server hosting the game, in production mode, good for
# testing file sizes
npm run serve:prod
```

### Build

```sh
# Builds the project (in production mode) as a web page, found in the
# www/ folder.
npm run build
# Builds the project in development mode, typically only needed if a unique
# error occurs on a given platform and logs are needed
npm run build:dev
```

