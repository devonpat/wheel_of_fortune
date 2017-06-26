$(document).ready(function() {

// Adding words for the game to be played
	function Words() {
		this.answers_array = [];
		this.addWord = function(word) {
			this.answers_array.push(word);
		};

		this.getWordList = function() {
			let word_list = [];
			for (var i = 0; i < this.answers_array.length; i++) {
				word_list.push(this.answers_array[i].words);
			}
			console.log(word_list);
		};
	};

	function Word(word) {
		this.word = word;
	};

	var wordAnswers = new Words();
	var devon = new Word('devon');
	var patey = new Word('patey');
	var fortune = new Word('fortune');
	var stacy = new Word('stacy');
	var kyson = new Word('kyson');

	wordAnswers.addWord(devon);
	wordAnswers.addWord(patey);
	wordAnswers.addWord(fortune);
	wordAnswers.addWord(stacy);
	wordAnswers.addWord(kyson);
// end of adding game words	


//adding the Vanna White div buttons into an array 
	function ShowButtons() {
		this.button_array = [];
		this.addButton = function(buttons) {
			this.button_array.push(buttons);
		};

		this.getButtonList = function() {
			let button_list = [];
			for (var i = 0; i < this.button_array.length; i++) {
				button_list.push(this.answers_array[i].buttons);
			}
			console.log(button_list);
		};
	}

	function Button(button) {
		this.button = button;
		this.value = "";
		this.setvalue = function(value){
			this.value = value;
		};
	};

	var vanna_array = new ShowButtons();
	var b1_1 = new Button($("#b1-1"));
	var b1_2 = new Button($("#b1-2"));
	var b1_3 = new Button($("#b1-3"));
	var b1_4 = new Button($("#b1-4"));
	var b1_5 = new Button($("#b1-5"));
	var b1_6 = new Button($("#b1-6"));
	var b1_7 = new Button($("#b1-7"));
	var b1_8 = new Button($("#b1-8"));
	var b1_9 = new Button($("#b1-9"));
	var b1_10 = new Button($("#b1-10"));


	vanna_array.addButton(b1_1);
	vanna_array.addButton(b1_2);
	vanna_array.addButton(b1_3);
	vanna_array.addButton(b1_4);
	vanna_array.addButton(b1_5);
	vanna_array.addButton(b1_6);
	vanna_array.addButton(b1_7);
	vanna_array.addButton(b1_8);
	vanna_array.addButton(b1_9);
	vanna_array.addButton(b1_10);
// end of Vanna White button additions


	var puzzleWord = "undefined";
	var your_points = parseInt($("#money").text());
	var right_answers = 0;

	$("#newPuzzle").click(function(){
		puzzleWord = wordAnswers.answers_array[Math.floor(Math.random() * wordAnswers.answers_array.length)];
		console.log(puzzleWord.word);
		for (var i = 0; i < puzzleWord.word.length; i++) {
			vanna_array.button_array[i].setvalue(puzzleWord.word.charAt(i));
		}
	});

	$("#spinWheel").click(function() {
		var points = Math.floor((Math.random() * 10) + 1);
		$("#spin").html(points);
	});

	$("#guessBox").keypress(function(event){
		var guess = puzzleWord.word.indexOf($("#guessBox").val());
		if (event.keyCode === 13) {
			if(guess >= 0){
				console.log(vanna_array.button_array[guess].button);
				vanna_array.button_array[guess].button.html("<p>" + vanna_array.button_array[guess].value+"</p>");
			}
			
			if (guess >= 0) {
				your_points += parseInt($("#spin").text());
				right_answers++;
			}else { 
				your_points -= parseInt($("#spin").text());
			}
			if (right_answers == puzzleWord.word.length){
				alert ("you win");
			}
			$('#money').text(your_points);
		}
	});






}); // end doc ready function

//