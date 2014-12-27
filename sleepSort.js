// Created by James Curry
// https://github.com/BobChubby
// Original idea taken from http://dis.4chan.org/read/prog/1295544154

function sleepSort(items,callback) {
	function sleeper(item,length,scope,callback) {
		return function() {
			scope.sorted.push(item);
			if(scope.sorted.length == length) {
				callback(scope.sorted);
			}
		}
	}
	var self = this;
	self.sorted = [];
	for(var i=0;i<items.length;i++) {
		var item = items[i];
		setTimeout(sleeper(item,items.length,self,callback),item);
	}
}