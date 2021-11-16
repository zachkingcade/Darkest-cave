export class Player extends Phaser.Physics.Arcade.Sprite {

    scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: number){
        super(scene,x,y,texture,frame);
        //store scene and add self to scene
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        //setup of the player
        this.createAnimations();
        this.configurePhysics();
        //set the play to begin at idle
        this.play("idle");
    }

    createAnimations(){
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("playerIdle", { start: 0}),
            frameRate: 12,
            repeat: -1
        })
    }

    configurePhysics(){
        this.body.setSize(250, 250, false);
        this.setOffset(125, 80);
    }
}