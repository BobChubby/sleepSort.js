sleepSort.js
============

A Javascript implementation of sleep sort from http://dis.4chan.org/read/prog/1295544154 

The `sleepSort` function requires two arguments. The first is the array of numbers that you wish to sort. The second argument is a callback function. Once `sleepSort` has finished, the sorted array will be passed to the callback.

As an example:

`sleepSort( [1,79,100,4,23,18,993,54], function(array) {console.log(array)} )`

would log the following the console:

`[1, 4, 18, 23, 54, 79, 100, 993]`
