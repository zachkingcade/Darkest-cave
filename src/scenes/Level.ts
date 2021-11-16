import { Player } from "./Player";

export class Level extends Phaser.Scene {

    player: Player;
    map: Phaser.Tilemaps.Tilemap;
    layers: Phaser.Tilemaps.TilemapLayer[];

    constructor(){
        super("Level");
    }

    create(){
        //inital values
        this.layers = [];
        console.log("Scene: Level Started!");
        this.constructTilemap();
        this.player = new Player(this,1000,0,"playerIdle",0);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(.5);
        this.physics.add.collider(this.player, this.layers[0]);
    }

    update(){
        this.player.update();
    }

    /**
     * Is used to put together and store values of the level's tilemap
     */
    constructTilemap(){
        this.map = this.make.tilemap({key: "testLevel"});
        let tileset = this.map.addTilesetImage("mossyFloatingPlatforms", "mossyFloating");
        this.layers.push(this.map.createLayer("collision", [tileset]));
        this.layers[0].setCollisionBetween(0,9999,true);
    }
}