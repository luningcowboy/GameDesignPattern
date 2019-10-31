class FSM {
    constructor(){}
}
let fsm = new FSM({
    stats:[
        {name:'sa', next: 'sb'},
        {name:'sb', next: 'sc'},
        {name:'sc', next: 'sd'},
        {name:'sd', next: 'sa'},
        {name:'sa', next: 'se'},
        {name:'se', next: 'sa'}
    ],
    callback:[
        {from: 'sa', to: 'sb', onChange:()=>{}, change:()=>{}},
        {from: 'sb', to: 'sc', onChange:()=>{}, change:()=>{}},
        {from: 'sc', to: 'sd', onChange:()=>{}, change:()=>{}},
        {from: 'sd', to: 'sa', onChange:()=>{}, change:()=>{}},
        {from: 'sa', to: 'se', onChange:()=>{}, change:()=>{}},
        {from: 'se', to: 'sa', onChange:()=>{}, change:()=>{}},
    ],
});
