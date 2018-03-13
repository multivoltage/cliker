// to do, now not used
var myIP = require('my-ip');

var u = myIP();
console.dir(u);// return external IPv4 
console.dir(myIP('IPv6'));// return external IPv6 
console.dir(myIP(null,true));// return internal IPv4 
console.dir(myIP('IPv6',true));

var TorControl = require('tor-control');
 
var control = new TorControl({
    password: 'password',                     // Your password for tor-control
    persistent: false                         // Keep connection (persistent)
});
 
control.signalNewnym(function (err, status) { // Get a new circuit
   if (err) {
      return console.error(err);
   }
   console.log(status.messages[0]); // --> "OK"
});
 
control.getInfo(['version', 'exit-policy/ipv4'], function (err, status) { // Get info like describe in chapter 3.9 in tor-control specs.
   if (err) {
      return console.error(err);
   }
   console.log(status.messages.join(' - '));
});