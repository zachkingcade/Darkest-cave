import { Player } from "./Player";

export class Level extends Phaser.Scene {

    player: Player;
    orbsCollected: number;
    map: Phaser.Tilemaps.Tilemap;
    layers: Phaser.Tilemaps.TilemapLayer[];

    constructor(){
        super("Level");
    }

    create(){
        //inital values
        this.layers = [];
        this.orbsCollected = 0;
        console.log("Scene: Level Started!");
        this.player = new Player(this,1000,8000,"playerIdle",0);
        this.constructTilemap();
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(.3);
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

        //handle objects
        let items = this.map.getObjectLayer("items");
        console.log(items);
        items.objects.forEach((item) => {
            if(item.type == "orb"){
                let orb = this.physics.add.sprite(item.x, item.y,"orb-loop",0);
                orb.setMaxVelocity(0,0);
                orb.setOrigin(0,1);
                orb.setScale(.4);
                this.physics.add.overlap(orb, this.player, () => {
                    this.orbsCollected++;
                    console.log(`Orbs collected: ${this.orbsCollected}`);
                    orb.destroy();
                }, null, this);
            }
        })
    }
}