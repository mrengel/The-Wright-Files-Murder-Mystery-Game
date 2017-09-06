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
  var clue = "";
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
    clue = data.val().clue;
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
    suspect1image = data.val().suspect1.image;

    suspect2name = data.val().suspect2.name;
    suspect2question1 = data.val().suspect2.question1;
    suspect2question2 = data.val().suspect2.question2;
    suspect2question3 = data.val().suspect2.question3;
    suspect2answer1 = data.val().suspect2.answer1;
    suspect2answer2 = data.val().suspect2.answer2;
    suspect2answer3 = data.val().suspect2.answer3;
    suspect2bio = data.val().suspect2.bio;
    suspect2image = data.val().suspect2.image;

    suspect3name = data.val().suspect3.name;
    suspect3question1 = data.val().suspect3.question1;
    suspect3question2 = data.val().suspect3.question2;
    suspect3question3 = data.val().suspect3.question3;
    suspect3answer1 = data.val().suspect3.answer1;
    suspect3answer2 = data.val().suspect3.answer2;
    suspect3answer3 = data.val().suspect3.answer3;
    suspect3bio = data.val().suspect3.bio;
    suspect3image = data.val().suspect3.image;

    console.log("clue: " + clue);
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
    $("#scenario").append(br);
    //**************************************************/
    // Add Next button to get to game from first "view" /
    //**************************************************/
    var nextBtn = $("<button id='next' style='float:right'>").text("Next");
    $("#scenario").append(nextBtn);
  }

  //*****************************/
  // Runs behind Previous button /
  //*****************************/
  function rulesScenarioPrevious() {
    $("#rules").empty();
    $("#scenario").empty(); 
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
    var nextBtn = $("<button id='next' style='float:right'>").text("Next");
    $("#scenario").append(nextBtn);
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
    var suspect1Btn = $("<button id='suspect1' class='suspect'>").text("Suspect1");
    var suspect2Btn = $("<button id='suspect2' class='suspect'>").text("Suspect2");
    var suspect3Btn = $("<button id='suspect3' class='suspect'>").text("Suspect3");
    $("#buttons").append(suspect1Btn);
    $("#buttons").append(suspect2Btn);
    $("#buttons").append(suspect3Btn);
  }

 //***************************/
 //Function for suspect click /
 //***************************/
  $(document).on("click", ".suspect", function() {
    $( "#rules" ).empty();
    $( "#scenario" ).empty();
    var suspect = $(this).attr('id');
    var h3 = $("<h3>").text("Bio");
    $("#rules").append(h3);
    var hr = $("<hr width='100%' id='line'>");
    $("#rules").append(hr);
    $("#rules").append("<h5><span id='bio'></span></h5>");
    $("#rules").append("<br>");
    $("#rules").append("<br>");
    var h3 = $("<h3>").text("Interview Questions");
    $("#scenario").append(h3);
    var hr = $("<hr width='100%' id='line'>");
    $("#scenario").append(hr);
    $("#scenario").append("<h5>Question1: <span id='question1'></span></h5>");
    $("#scenario").append("<h5>Answer1: <span id='answer1'></span></h5>");
    $("#scenario").append("<br>");  
    $("#scenario").append("<h5>Question2: <span id='question2'></span></h5>");
    $("#scenario").append("<h5>Answer2: <span id='answer2'></span></h5>");
    $("#scenario").append("<br>"); 
    $("#scenario").append("<h5>Question3: <span id='question3'></span></h5>");
    $("#scenario").append("<h5>Answer3: <span id='answer3'></span></h5>");
    $("#scenario").append("<br>"); 
    var prevBtn = $("<button id='previous' style='float:right'>").text("Previous");
    $("#scenario").append(prevBtn);
    
    //************************************************/
    // Determine suspect and use applicable variables /
    //************************************************/
    if (suspect == "suspect1") {
      $("#question1").html(suspect1question1);
      $("#answer1").html(suspect1answer1);
      $("#question2").html(suspect1question2);
      $("#answer2").html(suspect1answer2);
      $("#question3").html(suspect1question3);
      $("#answer3").html(suspect1answer3);
      $("#bio").html(suspect1bio);
    } else if (suspect == "suspect2") {
      $("#question1").html(suspect2question1);
      $("#answer1").html(suspect2answer1);
      $("#question2").html(suspect2question2);
      $("#answer2").html(suspect2answer2);
      $("#question3").html(suspect2question3);
      $("#answer3").html(suspect2answer3);
      $("#bio").html(suspect2bio);
    } else if (suspect == "suspect3") {
      $("#question1").html(suspect3question1);
      $("#answer1").html(suspect3answer1);
      $("#question2").html(suspect3question2);
      $("#answer2").html(suspect3answer2);
      $("#question3").html(suspect3question3);
      $("#answer3").html(suspect3answer3);
      $("#bio").html(suspect3bio);
    }
  });

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
    startGame();
  });

  //Click functions for the volume icon to switch b/w mute and play
  $(".volume").on("click",function() {

    $(".volume").hide();
     $(".volume2").show();
  });
  $(".volume2").on("click",function() {

    $(".volume2").hide();
     $(".volume").show();
  });
