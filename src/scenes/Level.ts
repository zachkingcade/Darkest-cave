export class Level extends Phaser.Scene {

    constructor(){
        super("Level");
    }

    create(){
        console.log("Scene: Level Started!");
        this.constructTilemap();
        this.cameras.main.setZoom(.30);
        setInterval( () => {
            this.cameras.main.setScroll(0,this.cameras.main.scrollY + 100);
        }, 500)
    }

    constructTilemap(){
        let map = this.make.tilemap({key: "testLevel"});
        let tileset = map.addTilesetImage("mossyFloatingPlatforms", "mossyFloating");
        let collisionLayer = map.createLayer("collision", [tileset]);
        collisionLayer.setCollisionBetween(0,9999,true);
    }
}