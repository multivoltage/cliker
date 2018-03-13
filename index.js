// to do, now not used
var myIP = require('my-ip');

var u = myIP();
console.dir(u);// return external IPv4 
console.dir(myIP('IPv6'));// return external IPv6 
console.dir(myIP(null,true));// return internal IPv4 
console.dir(myIP('IPv6',true));