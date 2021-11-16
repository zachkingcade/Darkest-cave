import * as Phaser from 'phaser';

import { GAME_SZ } from './constants';
import { HomeScreen } from './scenes/HomeScreen';
import { Level } from './scenes/Level';
import { LoadAssets } from './scenes/LoadAssets';

const config: Phaser.Types.Core.GameConfig = {
    parent: 'game',
    type: Phaser.AUTO,
    backgroundColor: '#000',
    // Example of sizing based on w/h ratio
    width: GAME_SZ.width,
    height: GAME_SZ.height,
    zoom: 1,
    dom: {
        createContainer: true
    },
    render: {
        pixelArt: true,
        roundPixels: true
    },
    scale: {
        mode: Phaser.Scale.FIT
    },
    physics:{
        default: "arcade",
        arcade: { 
            debug: true,
            gravity: {y: 3000},
            tileBias: 512
        }
    }
};

export class KTGame extends Phaser.Game {

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
        //scenes
        this.scene.add("LoadAssets", LoadAssets, true)
        this.scene.add("HomeScreen", HomeScreen, false);
        this.scene.add("Level", Level, false);
    }

}

new KTGame(config);