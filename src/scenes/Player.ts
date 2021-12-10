export class Player extends Phaser.Physics.Arcade.Sprite {

    scene: Phaser.Scene;
    controls: { [key: string]: Phaser.Input.Keyboard.Key };

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: number){
        super(scene,x,y,texture,frame);
        this.setScale(3.5);
        //store scene and add self to scene
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        //setup of the player
        this.createAnimations();
        this.configurePhysics();
        this.setupKeys();
        //set the play to begin at idle
        this.play("idle");
    }

    /**
     * Creates all the animations for the player,
     * expected convention: player-animName, animName goes in animsRef, 
     * anims need to be single spritehseet so anim is from frame 0 to n
     */
    createAnimations(){
        let animsRef: string[] = ["idle", "walk", "jump", "dash"]
        for(let key of animsRef){
            this.anims.create({
                key: key,
                frames: this.anims.generateFrameNumbers("player-" + key, { start: 0}),
                frameRate: 12,
                repeat: -1
            })
        }
    }

    /**
     * Handles the configuration of all data to do with the physics
     * and physics body
     */
    configurePhysics(){
        this.body.setSize(250, 250, false);
        this.setOffset(125, 80);
    }

    /**
     * Creates keyboard keys and stores them in controls, also creates setup
     * listeners for certain key events
     */
    setupKeys(){
        this.controls = {};
        this.controls["right"] = this.scene.input.keyboard.addKey("D");
        this.controls["left"] = this.scene.input.keyboard.addKey("A");
        this.controls["jump"] = this.scene.input.keyboard.addKey("SPACE");

        this.controls["jump"].on("down", () => {
            console.log(this.body.blocked.down);
            if(this.body.blocked){
                this.setVelocityY(-4000);
            }
        }, this);
    }

    /**
     * Is ran in the scenes update loop, is the players version of update
     */
    update(){
        if(this.controls["right"].isDown && !this.controls["left"].isDown){
            this.setVelocityX(1600);
            this.setFlipX(false);
            if(this.anims.currentAnim.key != "walk"){
                this.play("walk");
            }
        } else if (!this.controls["right"].isDown && this.controls["left"].isDown){
            this.setVelocityX(-1600);
            this.setFlipX(true);
            if(this.anims.currentAnim.key != "walk"){
                this.play("walk");
            }
        } else {
            this.setVelocityX(0);
            if(this.anims.currentAnim.key != "idle"){
                this.play("idle");
            }
        }
    }
}