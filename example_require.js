// JavaScript File
var fun = require("./myFun.js");
fun();

var moreFun = require("./test").other; // when requires dir, looks up index.js in there
moreFun();

var smoreFun = require("./test").someOther; // when requires dir, looks up index.js in there
smoreFun();

