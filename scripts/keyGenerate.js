'use strict'
const path = require('path');
//const replace = require('replace-in-file');
async function keyGenerator() {
  var fs = require('fs')

  var uniqid = require('uniqid');

  var uniqid = await uniqid()+uniqid()
  console.log(uniqid)
  fs.readFile('.env', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/APP_KEY=/g, `APP_KEY=${uniqid}`);
  
    fs.writeFile('.env', result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}

keyGenerator().catch((err) => {
  console.error(err);
});