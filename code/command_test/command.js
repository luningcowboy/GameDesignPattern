
class Command{
    constructor(actor){
        console.log("Command create");
        this.actor = actor;
    }
    execute(){
        console.log("Command execute");
    }
    undo(){
        console.log("Command undo");
    }
}
class JumpCommand extends Command{
    constructor(actor){
        super(actor);
        console.log("JumpCommand create");
    }
    execute(){
        super.execute();
        console.log("JumpCommand execute");
        this.actor.jump();
    }
    undo(){
        super.undo();
    }
}
class FireCommand extends Command{
    constructor(actor){
        super(actor);
        console.log("FireCommand create");
    }
    execute(){
        super.execute();
        console.log("FireCommand execute");
        this.actor.fire();
    }
    undo(){
        super.undo();
    }
}
class MoveCommand extends Command{
    constructor(actor, toX, toY){
        super(actor);
        console.log("MoveCommand create");
        this.actor = actor;
        this.toX = toX;
        this.toY = toY;
        this.bX = actor.x;
        this.bY = actor.y;
    }
    execute(){
        super.execute();
        console.log("MoveCommand execute");
        this.actor.moveTo(this.toX, this.toY);
    }
    undo(){
        super.undo();
        console.log("MoveCommand undo");
        this.actor.moveTo(this.bX, this.bY);
    }
}

module.exports = {
    Command,
    JumpCommand,
    FireCommand,
    MoveCommand,
};
