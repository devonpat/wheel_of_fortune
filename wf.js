$(document).ready(function() {

	$("#spinWheel").click(function() {
		var points = Math.floor((Math.random() * 10) + 1);
		$("#spinArea").html("Spin: $ " + points);
	});

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

	function Word(words) {
		this.words = words;
	};

	var wordAnswers = new Words();
	var devon = new Word;
	var patey = new Word;
	var wheel = new Word;
	var fortune = new Word;

	wordAnswers.addWord(devon);
	wordAnswers.addWord(patey);
	wordAnswers.addWord(wheel);
	wordAnswers.addWord(fortune);


	
	$(".buttons").click(function(keypress){

	});

}); // end doc ready function

