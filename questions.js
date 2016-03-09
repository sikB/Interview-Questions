var theClass = [
	"Tristan",
	"Josh",
	"Bogdan",
	"Laz",
	"Rock Man",
	"Will",
	"Curtis",
	"Joe",
	"Koshan",
	"Patrick",
	"The Handsome One",
	"Jeremy"
];

function ClassQuizItem(parameter1, parameter2, parameter3){
	this.question = parameter1;
	this.answer = parameter2;
	this.difficulty = parameter3
}

var questionArray = [];
questionArray.push(new ClassQuizItem('What does HTML stand for?', 'Hyper Text Markup Language', 1));
questionArray.push(new ClassQuizItem('What does CSS stand for?', 'Cascading Style Sheet', 1));
questionArray.push(new ClassQuizItem('What is the default display for an img?', 'display: block', 3));
questionArray.push(new ClassQuizItem('What is a variable?', 'Something you assing a value to', 2));
questionArray.push(new ClassQuizItem('What is Github?', 'Open source website where you can post and share your code publicly', 4));
questionArray.push(new ClassQuizItem('What is console.log?', 'Prints to console and is used to check your code', 4));
questionArray.push(new ClassQuizItem('What is modulus?', 'Modulus is the remainder of a number divided by another number', 5));
questionArray.push(new ClassQuizItem('What is the difference between single and double equals signs?', 'Single is to define something, double is to check if it is true or equal to', 5));
questionArray.push(new ClassQuizItem('What is position absolute?', 'It determines the position by looking upstream to determine its position from its closest relative', 5));
questionArray.push(new ClassQuizItem('What is typeOf?', 'Determines what type of property something is (ex:object;function etc)', 5));

function refreshQuestion(){
for(i=0; i<questionArray.length; i++){
	var rand = Math.floor(Math.random() * questionArray.length);
	var rand2 = Math.floor(Math.random() * theClass.length);
	document.getElementById('question-text').innerHTML = questionArray[rand].question + ', ' + theClass[rand2];
}
}



// var question = new ClassQuizItem("What does html stand for?", "Hyper Text Markup Language", 1);
// console.log(question.answer);














