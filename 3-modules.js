
// common js => every file is module (by default)
// modules => encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require("./5-utils")
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(names);
sayHi("abdo")
sayHi(names.omar)
sayHi(names.mosaad)

