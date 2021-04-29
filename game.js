function addUser(){
    player1Name=document.getElementById("player_1_placeHolder").value;
    player2Name=document.getElementById("player_2_placeHolder").value;

    localStorage.setItem("player1Name",player1Name);
    localStorage.setItem("player2Name",player2Name);

    window.location="gamePage.html";
}