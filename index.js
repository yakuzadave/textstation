const axios = require('axios')
//const pug = require('pug');
//const expressServer = require('./textstation/app');
const d20 = require('d20');
//const socket = require('socket.io')







console.log('Testing out the roller')
var r20 = d20.roll(20)
console.log(`You rolled a d20 and your result is ${r20}`);

if (r20 + 5 < 13 ){
    console.log ('You have missed your attack.')
}
else {
    var damage = (d20.roll('1d10+3'))
    console.log(`You have landed a hit, causing ${damage} points of damage.`)
}








