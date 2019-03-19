const fs = require('fs');
var scores = [];
for(a = 0; a < 1000; a++) {
	console.clear();
	console.log(`Depending on your device, this may take a while... [${a}/1000]`);
	run();
}

function run() {
	startTime = Date.now();
	for(b = 0; b < 10000; b++) {
		isPrime(b);
	}
	endTime = Date.now();
	score = endTime - startTime;
	scores.push(score);
}
console.clear();
fs.writeFile('results.txt', `Your score is ${median(scores)}! The lower the score, the better. A score of 0 is perfect.`);

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
