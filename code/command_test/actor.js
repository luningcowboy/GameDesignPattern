class Actor{
    constructor(){
        this.x = 0;
        this.y = 0;
    }
    jump(){
        console.log("Actor jump");
    }
    fire(){
        console.log("Actor fire");
    }
    moveTo(x, y){
        this.x = x;
        this.y = y;
        console.log("Actor moveTo current position " + this.x + " " + this.y );
    }
}
module.exports = Actor;
