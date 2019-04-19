function jumpCommand(actor){
    return {
        execute : function(){
            console.log("jumpCommand execute");
            actor.jump();
        },
        undo : function(){}
    };
}
function fireCommand(actor){
    return {
        execute : function(){
            console.log("fireCommand execute");
            actor.fire();
        },
        undo : function(){
            actor.undo();
        }
    };
}
function moveCommand(actor, x, y){
    let [bx, by] = [actor.x , actor.y];
    return {
        execute: function(){
            console.log("moveCommand execute");
            actor.moveTo(x, y);
        },
        undo : function(){
            console.log("moveCommand undo");
            actor.moveTo(bx, by);
        }
    };
}

module.exports = {
    jumpCommand,
    fireCommand,
    moveCommand,
};
