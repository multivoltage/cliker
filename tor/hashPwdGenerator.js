var shell = require('shelljs');

var TOR_PATH = "./tor/tor-browser_en-US/Browser/TorBrowser/Tor/tor";
const my_torrc_file = './tor/tor_conf/my-torrc';
var password = "stupid_password";

module.exports = {
  generateHashPwd: function() {
    console.log('try to generate hash for password '+password);
    var command = shell.exec(TOR_PATH+' --hash-password '+password,{silent:true});
    if (command.code !== 0) {
      console.log('error generating hash password');
      shell.exit(1);
    } else {
      console.log('hash password generated');
      return command.stdout;
    }
  }
};
