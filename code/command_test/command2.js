class Command{
    constructor(actor){
        this.actor = actor;
    }
    execute(){}
}
class Chef{
    constructor(){}
    doChangFen(){}
    doHeFen(){}
    doHunTun(){}
}
class CommandChangFen extends Command{
    constructor(chef){
        super(chef);
    }
    execute(){
        super.execute();
        this.actor.doChangFen();
    }
}
class CommandHeFen extends Command{
    constructor(chef){
        super(chef);
    }
    execute(){
        super.execute();
        this.actor.doHeFen();
    }
}
class CommandHunTun extends Command{
    constructor(chef){
        super(chef);
    }
    execute(){
        super.execute();
        this.actor.doHunTun();
    }
}

