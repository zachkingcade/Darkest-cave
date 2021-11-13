import * as Phaser from 'phaser';

import { GAME_SZ } from './constants';

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
    }
};

export class KTGame extends Phaser.Game {

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }

}

new KTGame(config);