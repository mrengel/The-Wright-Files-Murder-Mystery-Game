$(document).ready(function(){
var bgm = new Audio("bgm.mp3");
    bgm.play();

    //var nextSFX = new Audio("PageTurn.mp3");
$(".volume").on("click",function() {

    $(".volume").hide();
     $(".volume2").show();
     bgm.pause();
  });
  $(".volume2").on("click",function() {

    $(".volume2").hide();
     $(".volume").show();
     
      bgm.play();
  });


var config = {
    apiKey: "AIzaSyCrEZMsZawnMNSTCe_mteQBAaGpmuMQH6Y",
    authDomain: "groupproject-14138.firebaseapp.com",
    databaseURL: "https://groupproject-14138.firebaseio.com",
    projectId: "groupproject-14138",
    storageBucket: "groupproject-14138.appspot.com",
    messagingSenderId: "117676393673"
  };

  //***************************************************************************
  // NOTE: Currently, Firbase has no way to get children count without pulling*
  //       data to client side.  I added a count child to hold the number of  *
  //       mysteries have been added in the database. That value will be used *
  //       in range to random generate from.                                  *
  //***************************************************************************

  firebase.initializeApp(config);
  var database = firebase.database();

  //*********************************
  // Get mystery count from database*
  //*********************************
  var refCount = database.ref().child("Count");
  refCount.on('value', getCount, errData)
  var count = 0;

  function getCount(data) {
    count = data.val().count;
    console.log("count: " + count);
  }
  function errData(err) {
    console.log("Error: " + err.val())
  }

  //********************************************
  // Generate random number to retrieve mystery*
  //********************************************
  var mysteryNum = Math.floor(Math.random() * count) + 1;
  console.log("mysteryNum: " + mysteryNum);

  //********************
  // Variables for data*
  //********************
  var clue1image = "";
  var clue2image = "";
  var clue3image = "";
  var detimage ="";
  var murderer = "";
  var rules = "";
  var scenario = "";
  var suspect1name = "";
  var suspect1question1 = "";
  var suspect1question2 = "";
  var suspect1question3 = "";
  var suspect1answer1 = "";
  var suspect1answer2 = "";
  var suspect1answer3 = "";
  var suspect1bio = "";
  var suspect1image = "";

  var suspect2name = "";
  var suspect2question1 = "";
  var suspect2question2 = "";
  var suspect2question3 = "";
  var suspect2answer1 = "";
  var suspect2answer2 = "";
  var suspect2answer3 = "";
  var suspect2bio = "";
  var suspect2image = "";

  var suspect3name = "";
  var suspect3question1 = "";
  var suspect3question2 = "";
  var suspect3question3 = "";
  var suspect3answer1 = "";
  var suspect3answer2 = "";
  var suspect3answer3 = "";
  var suspect3bio = "";
  var suspect3image = "";
  
  var refData = database.ref().child("Mysteries/" + mysteryNum + "/");
  refData.on('value', getData, errData)

  /*******************************************************/
  // Get mystery data from firebase and hold in variables /
  //******************************************************/
  function getData(data) {
    //var imagepath = "/assets/images";

    clue1image = data.val().clue;
    clue2image = data.val().clue2;
    clue3image = data.val().clue3;
    suspect1image = data.val().suspect1.image;
    suspect2image = data.val().suspect2.image;
    suspect3image = data.val().suspect3.image;
    detimage = data.val().detective;


    murderer = data.val().murderer;
    rules = data.val().rules;
    scenario = data.val().scenario;
    suspect1name = data.val().suspect1.name;
    suspect1question1 = data.val().suspect1.question1;
    suspect1question2 = data.val().suspect1.question2;
    suspect1question3 = data.val().suspect1.question3;
    suspect1answer1 = data.val().suspect1.answer1;
    suspect1answer2 = data.val().suspect1.answer2;
    suspect1answer3 = data.val().suspect1.answer3;
    suspect1bio = data.val().suspect1.bio;

    suspect2name = data.val().suspect2.name;
    suspect2question1 = data.val().suspect2.question1;
    suspect2question2 = data.val().suspect2.question2;
    suspect2question3 = data.val().suspect2.question3;
    suspect2answer1 = data.val().suspect2.answer1;
    suspect2answer2 = data.val().suspect2.answer2;
    suspect2answer3 = data.val().suspect2.answer3;
    suspect2bio = data.val().suspect2.bio;

    suspect3name = data.val().suspect3.name;
    suspect3question1 = data.val().suspect3.question1;
    suspect3question2 = data.val().suspect3.question2;
    suspect3question3 = data.val().suspect3.question3;
    suspect3answer1 = data.val().suspect3.answer1;
    suspect3answer2 = data.val().suspect3.answer2;
    suspect3answer3 = data.val().suspect3.answer3;
    suspect3bio = data.val().suspect3.bio;

    console.log("clue1: " + clue1image);
    console.log("clue2: " + clue2image);
    console.log("clue3: " + clue3image);
    console.log("det: " + detimage);
    console.log("murderer: " + murderer);
    console.log("rules: " + rules);
    console.log("scenario: " + scenario);
    console.log("suspect1name: " + suspect1name);
    console.log("suspect1question1: " + suspect1question1);
    console.log("suspect1question2: " + suspect1question2);
    console.log("suspect1question3: " + suspect1question3);
    console.log("suspect1answer1: " + suspect1answer1);
    console.log("suspect1answer2: " + suspect1answer2);
    console.log("suspect1answer3: " + suspect1answer3);
    console.log("suspect1bio: " + suspect1bio);
    console.log("suspect1image: " + suspect1image);

    console.log("suspect2name: " + suspect2name);
    console.log("suspect2question2: " + suspect2question2);
    console.log("suspect2question3: " + suspect2question3);
    console.log("suspect2answer1: " + suspect2answer1);
    console.log("suspect2answer2: " + suspect2answer2);
    console.log("suspect2answer3: " + suspect2answer3);
    console.log("suspect2bio: " + suspect2bio);
    console.log("suspect2image: " + suspect2image);

    console.log("suspect3name: " + suspect3name);
    console.log("suspect3question1: " + suspect3question1);
    console.log("suspect3question2: " + suspect3question2);
    console.log("suspect3question3: " + suspect3question3);
    console.log("suspect3answer1: " + suspect3answer1);
    console.log("suspect3answer2: " + suspect3answer2);
    console.log("suspect3answer3: " + suspect3answer3);
    console.log("suspect3bio: " + suspect3bio);
    console.log("suspect3image: " + suspect3image);
  }

  /*******************************************/
  //Reference the modal popup box in variable /
  /*******************************************/
  var mpopup = document.getElementById('mpopupBox');

  //****************************************************/
  // Function for GameRules button click on Modal popup /
  //****************************************************/
  var effect = "";
  var br = $("<br>").text();
  var p = $("<p>");

  //*****************************/
  // Runs behind GameRules button/
  //*****************************/
  function rulesScenario() {
    $( "#rules" ).empty();
    $( "#scenario" ).empty(); 
    var h3 = $("<h3>").text("Game Rules");
    $("#rules").append(h3);
    $("#rules").append(br);
    $("#rules").append(rules);
    $("#rules").append(br);
    var hr = $("<hr width='100%' id='line'>");
    $("#rules").append(hr);
    var h3 = $("<h3>").text("Scenario");
    $("#scenario").append(h3);
    $("#scenario").append(br);
    $("#scenario").append(scenario); 
    //$("#scenario").append(p);
    //**************************************************/
    // Add Next button to get to game from first "view" /
    //**************************************************/
    var h3 = $("<h3>").text("");
    $("#scenario").append(h3);
    var nextBtn = $("<button id='next' style='float:right'>").text("Interview");
    $("#scenario").append(nextBtn);
  

    //Add clues///
    $('#buttons').append("<img class='clues' src="+clue1image+" />");
    $('#buttons').append("<img class='clues' src="+clue2image+" />");
    $('#buttons').append("<img class='clues' src="+clue3image+" />");
    $('#buttons').append("<img class='clues' src="+detimage+" />");
  }
  //*****************************/
  // Runs behind Previous button /
  //*****************************/
  function rulesScenarioPrevious() {
    $("#rules").empty();
    $("#scenario").empty();
    $( "#text").empty(); 
    $( "#buttons").empty();
    var h3 = $("<h3>").text("Game Rules");
    $("#rules").append(h3);
    $("#rules").append(br);
    $("#rules").append(rules);
    $("#rules").append(br);
    var hr = $("<hr width='100%' id='line'>");
    $("#rules").append(hr);
    var h3 = $("<h3>").text("Scenario");
    $("#scenario").append(h3);
    $("#scenario").append(br);
    $("#scenario").append(scenario); 
    $("#scenario").append(br);
    //**************************************************/
    // Add Next button to get to game from first "view" /
    //**************************************************/
    var h3 = $("<h3>").text("");
    $("#scenario").append(h3);
    var nextBtn = $("<button id='next' style='float:right'>").text("Interview");
    $("#scenario").append(nextBtn);
  

    //Add clues///
    $('#buttons').append("<img class='clues' id='clue1' src="+clue1image+" />")
    $('#buttons').append("<img class='clues' id='clue2' src="+clue2image+" />")
    $('#buttons').append("<img class='clues' id='clue3' src="+clue3image+" />")
    $('#buttons').append("<img class='clues' src="+detimage+" />");
  }
  //***********************************************************************/
  // Get randomly selected effect and apply to both buttons on Modal popup /
  //***********************************************************************/
  function runEffect() {
    var effectArray = ["blind","clip","drop","explode","fold","puff"];
    var effectNumber = Math.floor(Math.random() * 6) + 1;
    effectNumber--;
    effect = effectArray[effectNumber];
    $("#gamerules").effect(effect,750);
    $("#start").effect(effect,750);
    setTimeout(function(){
      mpopup.style.display = "none";
    },749);
  }

  //************************/
  // Create suspect buttons /
  //************************/
  function startGame() {
    var suspect1Btn = $("<input type='image' class='suspects' id='suspect1' src="+suspect1image+">");
    var suspect2Btn = $("<input type='image' class='suspects' id='suspect2' src="+suspect2image+">");
    var suspect3Btn = $("<input type='image' class='suspects' id='suspect3' src="+suspect3image+">");
    var h5 = $("<h5 id='clickimagetetxt'>").text("(click on an image)");
    $("#text").append(h5);
    $("#buttons").append(suspect1Btn);
    $("#buttons").append(suspect2Btn);
    $("#buttons").append(suspect3Btn);
    $(document).on("click", "#suspect1", suspect1);
    $(document).on("click", "#suspect2", suspect2);
    $(document).on("click", "#suspect3", suspect3);
    $("#submit").attr("disabled", false);
  }

  var name = "";
  var suspect = "";
  
  function suspect1() {
    name = suspect1name;
    suspect = "suspect1";
    processSuspect();
  }

  function suspect2() {
    name = suspect2name;
    suspect = "suspect2";
    processSuspect();
  }

  function suspect3() {
    name = suspect3name;
    suspect = "suspect3";
    processSuspect();
  }

  function processSuspect() {
    $( "#rules" ).empty();
    $( "#scenario" ).empty();
    var h3 = $("<h3>").text("Bio - " + name);
    $("#rules").append(h3);
    $("#rules").append(p);
    $("#rules").append("<h5><span id='bio'></span></h5>");
    $("#rules").append("<br>");
    $("#rules").append("<br>");
    var h3 = $("<h3>").text("Interview Questions");
    $("#scenario").append(h3);
    $("#scenario").append(p);
    $("#scenario").append("<h5>Question1: <span id='question1'></span></h5>");
    $("#scenario").append("<h5>Answer1: <span id='answer1'></span></h5>");
    $("#scenario").append("<br>");  
    $("#scenario").append("<h5>Question2: <span id='question2'></span></h5>");
    $("#scenario").append("<h5>Answer2: <span id='answer2'></span></h5>");
    $("#scenario").append("<br>"); 
    $("#scenario").append("<h5>Question3: <span id='question3'></span></h5>");
    $("#scenario").append("<h5>Answer3: <span id='answer3'></span></h5>");
    $("#scenario").append(p); 
    var prevBtn = $("<button id='previous' style='float:right'>").text("Study Case");
    $("#scenario").append(prevBtn);
    $("#question1").html(eval(suspect + "question1"));
    $("#answer1").html(eval(suspect + "answer1"));
    $("#question2").html(eval(suspect + "question2"));
    $("#answer2").html(eval(suspect + "answer2"));
    $("#question3").html(eval(suspect + "question3"));
    $("#answer3").html(eval(suspect + "answer3"));
    $("#bio").html(eval(suspect + "bio"));
  }


  //"Win"Modal appears after User Wins with option to play again
  var viewportWidth = $(window).width();
  function winGame() {
    //$("#mpopupBox").empty();
    var playAgain = $("<button id='playagain' class='btn btn-primary center-block'>").text("Play Again?");
    $(".mpopup-content").css('background-image','url("assets/images/winAmelia.png")');
    $(".mpopup-content").append(playAgain);
    mpopup.style.display = "block";
    if (viewportWidth < 768) {
  $(".mpopup-content").css('background-image','url("assets/images/winAmeliaResize.png")');}
  }

  //"Lose"Modal appears after User loses with option to play again
   function loseGame() {
    //$("#mpopupBox").empty();
    var playAgain = $("<button id='playagain' class='btn btn-primary center-block'>").text("Play Again?");
    $(".mpopup-content").css('background-image','url("assets/images/losePaper.png")');
    $(".mpopup-content").append(playAgain);
    mpopup.style.display = "block";
    if (viewportWidth < 768) {
  $(".mpopup-content").css('background-image','url("assets/images/losePaperResize.png")');}
  }

  //"Invalid" Modal appears if user enters an invalid name
  function invalidInput() {
    jQuery.noConflict();
    $("#invalidModal").modal('show');
  }

 //Function for "Try Again" button in Invalid Modal
 $(document).on("click", "#tryagain", function(){
    jQuery.noConflict();
    $(".modal").modal('hide');
  }); 

  //Function for "Play Again" click
  $(document).on("click", "#playagain", function(){
    mpopup.style.display = "none";
    location.reload(true);
  });

  //Function that limits input to only alpha characters
  function alphaOnly(event) {
  var value = String.fromCharCode(event.which);
  var pattern = new RegExp(/[a-zåäö ]/i);
  return pattern.test(value);
  };

  //alphaOnly function being called in the input box
  $(document).on("keypress", "#userGuess", alphaOnly);

 

  //************************************************************************/
  // Click functions for StartGame, GameRules, Next, Previous button clicks /
  //************************************************************************/
  $("#start").on("click", function(event) {
    startGame();
    runEffect();
  });

  $("#gamerules").on("click", function(event) {
    rulesScenario();
    runEffect();
  });

  $(document).on("click", "#previous", rulesScenarioPrevious);

  $(document).on("click", "#next", function() {
    $( "#rules" ).empty();
    $( "#scenario" ).empty();
    $( "#text").empty();
    $( "#buttons" ).empty();
    startGame();
  });

  //Click functions for the volume icon to switch b/w mute and play
  // $(".volume").on("click",function() {

  //   $(".volume").hide();
  //    $(".volume2").show();
  // });
  // $(".volume2").on("click",function() {

  //   $(".volume2").hide();
  //    $(".volume").show();
  // });

  //Click function for Submit button for User Guess

  $("#submit").on("click", function(event) {

    var userGuess = $("#userGuess").val().toLowerCase();
    var correctAnswer = murderer.toLowerCase();
    var suspect1Lc = suspect1name.toLowerCase();
    var suspect2Lc = suspect2name.toLowerCase();
    var suspect3Lc = suspect3name.toLowerCase();
    console.log(userGuess);
    $("#userGuess").val("");

   
    
    if(userGuess!==suspect1Lc&&userGuess!==suspect2Lc&userGuess!==suspect3Lc) {
      invalidInput();
    }

    else if(userGuess===correctAnswer) {
      console.log("You won!");
      winGame();
      
    }
    else{
      loseGame();
    }
    

    });

  //************************************************************************/
  // Web Animations API Code /
  //************************************************************************/

//Changes button sizes
let el = document.querySelector('.volume');
el.addEventListener('mouseover', function () {
    let anim = el.animate({
        transform: ['scale(1)', 'scale(1.25)']
    }, 300);
    el.style.transform = 'scale(1.25)';
});
el.addEventListener('mouseout', function () {
    let anim = el.animate({
        transform: ['scale(1.25)', 'scale(1)']
    }, 300);
    el.style.transform = '';
});

let elem = document.querySelector('.volume2');
elem.addEventListener('mouseover', function () {
    let anim = elem.animate({
        transform: ['scale(1)', 'scale(1.25)']
    }, 300);
    elem.style.transform = 'scale(1.25)';
});
elem.addEventListener('mouseout', function () {
    let anim = el.animate({
        transform: ['scale(1.25)', 'scale(1)']
    }, 300);
    elem.style.transform = '';
});

//Add increase size and Fade effects to modal with Web API
document.getElementById("mpopupBox").animate(
    { transform: ['scale(.25)','scale(1)']},
 {duration:1000});

document.getElementById("mpopupBox").animate([ 
  { opacity: 0 },
  { opacity: .5, easing: 'ease-in' },
  { opacity: 1 },
  ], 750);

document.getElementById("rules").animate([ 
  { opacity: 0 },
  { opacity: .5, easing: 'ease-in' },
  { opacity: 1 },
  ], 2500);

document.getElementById("scenario").animate([ 
  { opacity: 0 },
  { opacity: .5, easing: 'ease-in' },
  { opacity: 1 },
  ], 2500);

});
