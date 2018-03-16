/** 
 * here we check we have some command and some file and download some file :)
*/
var shell = require('shelljs');
var fs = require('fs');

const VERSION = '7.5.1';
const TOR_BROWSER_WGET_URL = 'https://www.torproject.org/dist/torbrowser/'+VERSION+'/tor-browser-linux64-'+VERSION+'_en-US.tar.xz';
const filename_tor_browser = 'tor-browser-linux64-'+VERSION+'_en-US.tar.xz';

function init(){
  if(!isAllToolsAvailable())
    return;

  if(!isTorBrowserDownloaded())
    return;

  if(!isTorCorrectlyExtracted())
    return;

}

function isTorBrowserDownloaded(){
  // Run external tool synchronously
  console.log('try to download tor browser from '+TOR_BROWSER_WGET_URL);
  // we run get and save file inside ./tor folder of this project
  if (shell.exec('wget '+TOR_BROWSER_WGET_URL+' -P ./tor').code !== 0) {
    console.log('cannot download tor browser correctly. Check connection or valid url');
    shell.exit(1);
    return false;
  }
  return true;
}

function isAllToolsAvailable(){
  if (!shell.which('sh')) {
    shell.echo('please install sh before run this app');
    shell.exit(1);
    return false;
  }
  if (!shell.which('nc')) {
    shell.echo('please install nc before run this app');
    shell.exit(1);
    return false;
  }
  if (!shell.which('curl')) {
    shell.echo('please install curl before run this app');
    shell.exit(1);
    return false;
  }
  if (!shell.which('grep')) {
    shell.echo('please install grep before run this app');
    shell.exit(1);
    return false;
  }
  return true;
}

function isTorCorrectlyExtracted(path){
  console.log('I am extracting tor browser into folder');
  if (shell.exec('tar xf ./tor/'+filename_tor_browser).code !== 0) {
    console.log('cannot execute tar xf of tor/'+filename_tor_browser);
    shell.exit(1);
    return false;
  }
  console.log('Deleting file...');
  fs.unlink('./tor/'+filename_tor_browser,function(){
    console.log('correctly deleted file');
    return true;
  });
}

function givePermissionForShScript(){
  console.log('try to give permission to sh/*.sh scripts');
  if (shell.exec('chmod 755 ./tor/sh/*.sh').code !== 0) {
    console.log('cannot execute chmod 755 '+filename_tor_browser);
    shell.exit(1);
    return false;
  }
  return true;
}

init();