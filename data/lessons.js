var TAFFY = require('node-taffydb').TAFFY;
module.exports.lessons = TAFFY([
  {"name":"super cool lesson 1","categories":["a","b"]},
  {"name":"super cool lesson 2","categories":["a","c"]},
  {"name":"super cool lesson 3","categories":["b","c"]},
]);