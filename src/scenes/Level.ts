import { Player } from "./Player";

export class Level extends Phaser.Scene {

    player: Player;
    orbsCollected: number;
    map: Phaser.Tilemaps.Tilemap;
    layers: Phaser.Tilemaps.TilemapLayer[];
    pointerLight: Phaser.GameObjects.Light;

    constructor(){
        super("Level");
    }

    create(){
        //inital values
        this.layers = [];
        this.orbsCollected = 0;
        console.log("Scene: Level Started!");
        this.player = new Player(this,2000,8500,"playerIdle",0);
        this.constructTilemap();
        //camera
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(.25);
        //general world setup
        this.physics.add.collider(this.player, this.layers[0]);
        this.pointerLight = this.lights.addLight(1000, 9000, 2000).setColor(0xffffff).setIntensity(2.5);
    }

    update(){
        this.player.update();
        let point = this.cameras.main.getWorldPoint(this.input.activePointer.x, this.input.activePointer.y)
        this.pointerLight.x = point.x;
        this.pointerLight.y = point.y;
    }

    /**
     * Is used to put together and store values of the level's tilemap
     */
    constructTilemap(){
        this.map = this.make.tilemap({key: "testLevel"});
        let floatingTileset = this.map.addTilesetImage("mossyFloatingPlatforms", "mossyFloating");
        let mossyTileset = this.map.addTilesetImage("Mossy - TileSet", "mossyTileset");
        this.layers.push(this.map.createLayer("collision", [floatingTileset, mossyTileset]));
        this.layers[0].setCollisionBetween(0, 9999, true);
        this.layers[0].setPipeline('Light2D');
        this.player.setPipeline('Light2D');
        this.lights.enable().setAmbientColor(0x000000);

        this.objectFactory();
    }

    objectFactory(){
        //pre object setup
        this.anims.create({
            key: "orb-loop",
            frames: this.anims.generateFrameNumbers("orb-loop", { start: 0, end: 59}),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: "portal-loop",
            frames: this.anims.generateFrameNumbers("portal", { start: 0, end: 94}),
            frameRate: 24,
            repeat: -1
        })
        //process objects
        let items = this.map.getObjectLayer("items");
        console.log(items);
        items.objects.forEach((item) => {
            if(item.type == "orb"){
                let orb = this.physics.add.sprite(item.x, item.y,"orb-loop",0);
                orb.setMaxVelocity(0,0);
                orb.setOrigin(0,1);
                orb.setScale(1);
                orb.play("orb-loop");
                //orb.setPipeline('Light2D');
                this.physics.add.overlap(orb, this.player, () => {
                    this.orbsCollected++;
                    console.log(`Orbs collected: ${this.orbsCollected}`);
                    orb.destroy();
                }, null, this);
            } else if (item.type == "portal"){
                let portal = this.physics.add.sprite(item.x, item.y,"portal-loop",0);
                portal.setMaxVelocity(0,0);
                portal.setOrigin(0.25,0.75);
                portal.setScale(10);
                portal.play("portal-loop");
                portal.setInteractive();
                portal.on("pointerdown", () => {
                    if(this.orbsCollected >= 10){
                        this.orbsCollected -= 20;
                        this.player.x = portal.x + 300;
                        this.player.y = portal.y + 300;
                        this.cameras.main.pan(portal.x, portal.y, 1000);
                    }
                })
            }
        })
    }


}