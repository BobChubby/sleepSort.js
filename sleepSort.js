// Created by James Curry
// https://github.com/BobChubby
// Original idea taken from http://dis.4chan.org/read/prog/1295544154

function sleepSort(items,callback) {
	var scope = this;
	scope.sorted = [];
	function sleeper(item) {
		return function() {
			scope.sorted.push(item);
			if(scope.sorted.length == items.length) {
				callback(scope.sorted);
			}
		}
	}
	for(var i=0;i<items.length;i++) {
		var item = items[i];
		setTimeout(sleeper(item),item);
	}
}
