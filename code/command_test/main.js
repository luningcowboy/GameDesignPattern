let CMD = require('./command.js');
let FuncCMD = require('./func_command.js');
let Actor = require('./actor.js');

let actor = new Actor();
console.log(actor, actor.x , actor.y);
let c1 = new CMD.Command(actor);
let fc = new CMD.FireCommand(actor);
let jc = new CMD.JumpCommand(actor);
let mc = new CMD.MoveCommand(actor, 100, 100);

c1.execute();
fc.execute();
jc.execute();

mc.execute();
mc.undo();

console.log("test function command");

let f_func = new FuncCMD.fireCommand(actor);
let j_func = new FuncCMD.jumpCommand(actor);
let m_func = new FuncCMD.moveCommand(actor, 200, 200);

f_func.execute();
j_func.execute();
m_func.execute();

m_func.undo();

