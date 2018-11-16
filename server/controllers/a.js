
'use strict';

const counter = require('./counter');

const increment = function() {
    console.log('In a.js count is ', counter.count);
    counter.count++;
};

module.exports = increment;
