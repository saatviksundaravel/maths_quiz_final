player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1_score = 0;
player2_score = 0;

givenWord="";
correctAnswer=0;


function init() {
    document.getElementById("player_1").innerHTML = player1Name;
    document.getElementById("player_2").innerHTML = player2Name;

    document.getElementById("player1Score").innerHTML = player1_score;
    document.getElementById("player2Score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = "Question Turn - " + player1Name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2Name;
}

function send() {

    firstNumber=document.getElementById("number1").value;
    secondNumber=document.getElementById("number2").value;

    correctAnswer=parseInt(firstNumber) * parseInt(secondNumber);
    question=firstNumber+" X "+secondNumber;

    heading = "<h4> Q. " + question + "</h4>"
    inputBox = "<br> Answer : <input type='text' id='answer_field'>";
    button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"

    row = heading + inputBox + button;
    document.getElementById("output").innerHTML = row;

}

question_turn = "player1";
answer_turn = "player2";

function check() {
    givenAnswer =document.getElementById("answer_field").value;

    if (correctAnswer == parseInt(givenAnswer)) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1Score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2Score").innerHTML = player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML = "Question - "+player2Name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML = "Question - "+player1Name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML = "Answer - "+player2Name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML = "Answer - "+player1Name;
    }
    document.getElementById("output").innerHTML="";
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}