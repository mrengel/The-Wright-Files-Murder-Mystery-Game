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
  
  //******************************************************
  // Get mystery data from firebase and hold in variables*
  //******************************************************
  var refData = database.ref().child("Mysteries/" + mysteryNum + "/");
  refData.on('value', getData, errData)

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

  //****************************/
  // Function for button1 click /
  //****************************/
  var effect = "";
  $("#button1").on("click", function(event) {
    var h3 = $("<h3>").text("Game Rules");
    $("#rules").append(h3);
    var br = $("<br>").text();
    $("#rules").append(br);
    $("#rules").append(rules);
    var br = $("<br>").text();
    $("#rules").append(br);
    var hr = $("<hr width='100%' id='line'>");
    $("#rules").append(hr);
    var h3 = $("<h3>").text("Scenario");
    $("#scenario").append(h3);
    var br = $("<br>").text();
    $("#scenario").append(br);
    $("#scenario").append(scenario); 
    var br = $("<br>").text();
    $("#scenario").append(br);

    //Added a return button in case users wanted to return to the modal page//
    //No functionality yet//
    var back = $("<button id='Go Back'>").text("Go Back");
    $("#scenario").append(back);

    runEffect();

  });


  //****************************/
  // Function for button2 click /
  //****************************/
  $("#button2").on("click", function(event) {
    var h3 = $("<h3>").text("Biography");
    $("#rules").append(h3);
    var br = $("<br>").text();
    $("#rules").append(br);

    var h3 = $("<h3>").text("Interview Questions");
    $("#scenario").append(h3);
    var br = $("<br>").text();
    $("#scenario").append(br);

    $()



    runEffect();
  });

  function runEffect() {
    //******************************/
    // Get randomly selected effect /
    //******************************/
    var effectArray = ["blind","clip","drop","explode","fold","puff"];
    var effectNumber = Math.floor(Math.random() * 6) + 1;
    effectNumber--;
    effect = effectArray[effectNumber];
    console.log("Effect: " + effect);
    $("#button1").effect(effect,750);
    $("#button2").effect(effect,750);
    setTimeout(function(){
      mpopup.style.display = "none";
    },749);
  }