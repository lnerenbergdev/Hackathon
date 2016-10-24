/* jshint esversion:6 */

$(function() {
	var currentLevel = 0;
	var clicked = false;

		var optionsArragnment = randomizeOptions();
		var optionIds = ["answer1", "answer2", "answer3"];

		$('#option1').attr("id", optionIds[optionsArragnment[0]]);
		$('#option2').attr("id", optionIds[optionsArragnment[1]]);
		$('#option3').attr("id", optionIds[optionsArragnment[2]]);

		$.get('/levels', function(res) {
			$('#level_div').text(res[currentLevel].title);
			$('#question').text(res[currentLevel].question);
			$('#answer1').html(res[currentLevel].options[0]);
			$('#answer2').html(res[currentLevel].options[1]);
			$('#answer3').html(res[currentLevel].options[2]);
		});


		$('.answers').click(function(){
			timerInterval = null;
			$("#answer1").addClass("correct");
			if($(this).attr('id') === "answer1" && clicked === false){
				updateScore();
			}
			clicked = true;
		});

		$('#next_question_btn').click(function(){
			currentLevel++;
			clicked = false;
			timer = 0;
			$("#answer1").removeClass("correct");
			$.get('/levels', function(res) {
					$('#level_div').text(res[currentLevel].title);
					$('#question').text(res[currentLevel].question);
					$('#answer1').html(res[currentLevel].options[0]);
					$('#answer2').html(res[currentLevel].options[1]);
					$('#answer3').html(res[currentLevel].options[2]);
				});
		});
});
	
function randomizeOptions(){
	var randPermutation = [];
	while(randPermutation.length < 3){
		var randIndex = Math.floor(Math.random() * 3);
		if(!randPermutation.includes(randIndex)){
			randPermutation.push(randIndex);
		}
	}

	console.log(randPermutation);
	return randPermutation;
}

var score = 0;

function updateScore() {
	score += (100 - timer);
	$('#score').text(score);
	return;
}

$('#score').text(score);

var timer = 0;
setInterval(() => {
	secondCounter();
}, 100);

function secondCounter() {
	if (timer < 99) {
	timer += 1;
	}
	$('#timer').text(timer);
}