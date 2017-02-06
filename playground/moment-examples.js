var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('current time', now.unix());

var timestamp = 1483283022;

var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"));
