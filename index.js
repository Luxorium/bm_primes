const fs = require('fs');
var scores = [];
for(r = 0; r <= 1000; r++) {
	console.clear();
	console.log(`This may take a while... [${r}/1000]`);
	run();
}

function run() {
	startTime = Date.now();
	for(i = 0; i <= 10000; i++) {
		isPrime(i);
	}
	endTime = Date.now();
	score = endTime - startTime;
	scores.push(score);
}
fs.writeFile('score.txt', `Your score is ${Math.round(median(scores))}!`);

function isPrime(n) {
	if(n === 1) {
		return false;
	} else if(n === 2) {
		return true;
	} else {
		for(x = 2; x < n; x++) {
			if(n % x === 0) {
				return false;
			}
		}
		return true;
	}
}

function median(values) {
	values.sort(function(a, b) {
		return a - b;
	});
	var half = Math.floor(values.length / 2);
	if(values.length % 2)
		return values[half];
	else
		return (values[half - 1] + values[half]) / 2.0;
}
