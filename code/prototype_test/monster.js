class Monster{
    constructor(){}
    clone(){}
}
class Ghost extends Monster{
    constructor(health, speed){
        super();
        this.health = health;
        this.speed = speed;
    }
    clone(){
        return new Ghost(this.health, this.speed);
    }
}
