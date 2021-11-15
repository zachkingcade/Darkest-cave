export class HomeScreen extends Phaser.Scene {

    constructor(){
        super("HomeScreen");
    }

    create(){
        console.log("Scene: HomeScreen Started!");
        setTimeout( () => {
            this.scene.start("Level");
        }, 1000)
    }
}