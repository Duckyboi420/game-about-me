var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var line = chalk.white.gray('-------------');
var userName = readlineSync.question(chalk.cyan('What is your name? '));

console.log(
	chalk.white('Welcome ' + userName + '!') +
		chalk.cyan(' to Do YOU Know Daksh?')
);
console.log(line);

var questions = [
	{
		question: 'What is my age? ',
		answer: '18'
	},

	{
		question: 'Do I like Coldplay? ',
		answer: 'Yes'
	},
	{
		question: 'What is my favorite thing at KFC? ',
		answer: 'popcorn chicken'
	}
];

var highScores = [
	{
		name: 'Raghav',
		score: 3
	},
	{
		name: 'Rishu',
		score: 2
	}
];

function game(questionX) {
	var ans = readlineSync.question(questionX.question);

	if (ans.toUpperCase() === questionX.answer.toUpperCase()) {
		console.log(chalk.green('CORRECT!'));
		score++;
	} else {
		console.log(chalk.red('WRONG!'));
	}
}

for (var i = 0; i < questions.length; i++) {
	game(questions[i]);

	console.log('Current score: ' + chalk.yellow(score));
	console.log(line);
}

console.log('WOOHOO!, Your total score is: ' + score);
console.log(line);
console.log(chalk.blueBright('Current high scores are: '));

for (var i = 0; i < highScores.length; i++) {
	console.log(chalk.blueBright(highScores[i].name + ': ' + highScores[i].score));
}

console.log(line);
console.log('If you have beaten the high score, send me a screenshot');
