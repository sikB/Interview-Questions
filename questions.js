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

document.getElementById('question-wrapper').addEventListener('click', function(evt){
	var target = evt.target;
	for(i=0; i<questionArray.length; i++){
	var rand = Math.floor(Math.random() * questionArray.length);
	if(target.id === 'askOne'){
	document.getElementById('question-text').innerHTML = questionArray[rand].question;
	document.getElementById('question-diff').innerHTML = questionArray[rand].answer;
	document.getElementById('question-diff').style.visibility = 'hidden';
	}else if(target.id === 'answerOne'){
	document.getElementById('question-diff').style.visibility = 'visible';
	}
  }
});


// var question = new ClassQuizItem("What does html stand for?", "Hyper Text Markup Language", 1);
// console.log(question.answer);
// function Plan(name, price, space, transfer, pages, discountMonths){
// 	this.name = name;
// 	this.price = price;
// 	this.space = space;
// 	this.transfer = transfer;
// 	this.pages = pages;
// 	this.discountMonths = discountMonths;
	
// }
// Plan.prototype.calcAnnual = function(percentIfDiscount){
// 		var bestPrice = this.price;
// 		var currentDate = new Date();
// 		var currentMonth = currentDate.getMonth();
// 		for(i=0; i<this.discountMonths.length; i++){
// 			if(this.discountMonths[i] == currentMonth){
// 				bestPrice = this.price * percentIfDiscount;
// 				break;
// 			}
// 		}
// 		return bestPrice * 12;
// 	}

// var plan1 = new Plan("Basic", 99, 100, 1000, 10, [0,1]);
// var plan2 = new Plan("Premium", 199, 500, 5000, 50, [2,3]);
// var plan3 = new Plan("Diamond", 299, 1000, 2000, 500, [4,5]);


// console.log(plan2);













