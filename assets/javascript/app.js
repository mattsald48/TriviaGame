var myTimer;
var timeOut = false;// returns if time ran out. Not being used yet
var qNum = 1; //what question player is on
var currentQ = "#question"+qNum; //for the question class
var correctAns = ""; //not used yet
var wrongAns = "";   //not used yet
var numCorrect = 0;  //number of question correct
var numWrong = 0;    //number answerd incorrectly
var unAnswered = 0;  //number unaswered
   




//time function that can take a time parameter in
function countDTimer(time) {
 	myTimer = setInterval(myClock, 1000);
    var t = time;
			//prints out the time remaining
     function myClock() {
     document.getElementById("timer").innerHTML = "You have " + t + "s left!";
     t--;

			//stops the timer.  conditions are in place for the two different intervals      
    if (t < 0  && time == 10) {///////////////////////change to 30 when done
    clearInterval(myTimer);
    $(currentQ).hide();
    unAnswered++;
    qNum++;
    currentQ = "#question"+qNum;
    $("#updateP").html('<h2>Time is up!</h2>');
    $("#imgUpdateP").html('<img src = "assets/images/nooo.gif"/>');
    $("#update").show();
    countDTimer(5);
    
    }else if( t < 0 && time == 5){//clearInterval for showing feed back page
   	clearInterval(myTimer);
    nextQuestion();
    }
   }
 }




startGame();


//choosing the right/wrong answer will hide the question and display if player was right or wrong
$(".choices").click(function(){
	var ans = this.className;
	correctAns = $(".correct").text();

    if (ans == "choices correct"){          //correct choice
    	$(currentQ).hide();
    	//console.log(1);
    	qNum++;
    	numCorrect++;
    	currentQ = "#question"+qNum;
    	clearInterval(myTimer);
    	$("#updateP").html('<h2>You guessed the correct answer!</h2>');
    	$("#imgUpdateP").html('<img src = "assets/images/partyHard.gif"/>');
    	$("#update").show();
    	console.log(currentQ);
    	countDTimer(5);
    }

    if (ans !== "choices correct"){         //incorrect choice
    	$(currentQ).hide();
    	//console.log(2);
    	qNum++;
    	numWrong++;
    	currentQ = "#question"+qNum;
    	clearInterval(myTimer);
    	$('#updateP').html('<h2>Nope</h2> <h3>That was the incorrect answer!</h3>');
    	$('#imgUpdateP').html('<img src = "assets/images/lukeEyes.gif"/>');
    	$("#update").show();
    	console.log(currentQ);
    	countDTimer(5);

    }

});

//moves on to next question. also ends the game
function nextQuestion(){

	$(currentQ).show();
	$("#update").hide();
	countDTimer(10);/////////////////////////////change to 30 when done
	console.log("Number correct: " + numCorrect);
	console.log("Number Wrong: " + numWrong);
	console.log("Number unaswered: " + unAnswered);
	console.log("Current question: " + currentQ);

	 if(qNum > 10){

	 	$("#timer").hide();
	 	$("#qAndA").hide();
	 	$("#update").hide();
	 	$("#question1").hide();
	 	$(".main").show();
	 	$('#mainP1').show();
	 	$('#mainP2').show();
	 	$('#mainP3').show();
	 	$('#mainP1').append(numCorrect);
	 	$('#mainP2').append(numWrong);
	 	$('#mainP3').append(unAnswered);
	 	clearInterval(myTimer);
	 	startGame();
	 }
}


//starts game.  Sets global var back to initial state
function startGame(){
	$(".startButton").on("click", function(){
	  timeOut = false;// returns if time ran out. Not being used yet
	  qNum = 1; //what question player is on
	  currentQ = "#question"+qNum; //for the question class
	  correctAns = ""; //not used yet
	  wrongAns = "";   //not used yet
	  numCorrect = 0;  //number of question correct
	  numWrong = 0;    //number answerd incorrectly
	  unAnswered = 0;  //number unaswered
	  countDTimer(10);
	  $(".main").hide();
	  $("#timer").show();
	  $("#qAndA").show();
	  $("#question1").show();
	});
}