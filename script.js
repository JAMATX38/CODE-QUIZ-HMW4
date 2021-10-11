var myQuestions = [
    {
        question: "1. Why did Englad tax the colonies?" ,
        answers: [
             "Because Tea leaves went up in price.",
             "To pay off debt from the French and Indian Way",
             "Englad became greedy."
        ],
        correctAnswer: "To pay off debt from the French and Indian Way"    
    },
    {
        question: "2.What was the first key event leading up to the American Revolution?",
        answers: [
             "Gettysburg.",
             "Battle of the Bulge.",
             "Boston Massacre."
        ],
        correctAnswer: "Boston Massacre."
    },
    {
        question: "3.Which Battle was the turning point of the American Revolution?",
        answers: [
             "Battle of Yorktown.",
             "Battle of Saratoga",
             "Battle of Bunker Hill"
        ],
        correctAnswer: "Battle of Saratoga"
    },
    {
        question: "4.What was the name of Thomas Paine's pamphlet?",
        answers:[
             "Vouge",
             "thrasher",
             "Common Sense"
        ],
        correctAnswer: "Common Sense"
    },
    {
        question: "5.What English policy restricted the settlers moving westward?",
        answers: [
             "Westard Proclamation",
             "Proclamation of 1763",
             "Proclamation of 1776"
        ],
        correctAnswer: "Proclamation of 1763"
    },
    {
        question: "6.What was the first Battle of the Revolutionary War?",
        answers: [
             "Lexington and Concord",
             "Battle of Long Island",
             "Battle of Bunker Hill"
        ],
        correctAnswer: "Lexington and Concord"    
    },
    {
        question: "7.Which Southern colony did not send delegates to the First Continental Congress?",
        answers: [
             "Texas",
             "Louisana",
             "Georgia"        
        ],
        correctAnswer: "Georgia"
    },
    {
        question: "8.What battle marked the end of fighting in the American Revolution?",
        answers: [
             "Battle of Yorktown",
             "Battle of Princeton",
             "Battle of Bunker Hill"
        ],
        correctAnswer: "Battle of Yorktown"
    },
    {
        question: "9.Who won the Battle of Bunker Hill?",
        answers: [
             "England",
             "the Colonies",
             " it was a tie"
        ],
        correctAnswer: "England"
    },
    {
        question: "10.What was the treaty of Paris?",
        answers: [
             "It gave the colonies better Tea prices.",
             "Great Britain recognized American Independence",
             "There was no treaty of Paris"
        ],
        correctAnswer: "Great Britain recognized American Independence"
    },
    ];
    




var body = document.body;
//create div to start questions
var div1ST = document.createElement("div");

//create h elements for the lists
var h1QS = document.createElement("h1");
var h2QS = document.createElement("h1");
var h3QS = document.createElement("h1");
var h4QS = document.createElement("h1");
var h5QS = document.createElement("h1");
var h6QS = document.createElement("h1");
var h7QS = document.createElement("h1");
var h8QS = document.createElement("h1");
var h9QS = document.createElement("h1");

//create ol element with 3 li elements for the lists
var list1 = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

var list2 = document.createElement("ol");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
var li6 = document.createElement("li");

var list3 = document.createElement("ol");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
var li6 = document.createElement("li");

var list4 = document.createElement("ol");
var li5 = document.createElement("li");
var li6 = document.createElement("li");
var li7 = document.createElement("li");

var list4 = document.createElement("ol");
var li8 = document.createElement("li");
var li9 = document.createElement("li");
var li10 = document.createElement("li");

var list5 = document.createElement("ol");
var li11 = document.createElement("li");
var li12= document.createElement("li");
var li13= document.createElement("li");

var list6 = document.createElement("ol");
var li14 = document.createElement("li");
var li15 = document.createElement("li");
var li16 = document.createElement("li");

var list7 = document.createElement("ol");
var li17 = document.createElement("li");
var li18= document.createElement("li");
var li19= document.createElement("li");
var li20= document.createElement("li");
var li21= document.createElement("li");



var paraGraph = document.createElement("p");

div1ST.textContent = "Revolutionary War Quiz";
h1QS.textContent = " Question 1";
h2QS.textContent = " Question 2";
h3QS.textContent = " Question 3";
h4QS.textContent = "Question 5";
h5QS.textContent = "Question 6";
h6QS.textContent = "Question 7";
h7QS.textContent = "Question 8";
h8QS.textContent = "Question 9";
h9QS.textContent = "Question 10";

list1.textContent = (myQuestions[0].question);
list2.textContent = (myQuestions[1].question);
list3.textContent = (myQuestions[2].question);
list4.textContent = (myQuestions[3].question);
list5.textContent = (myQuestions[4].question);
list6.textContent = (myQuestions[5].question);
list7.textContent = (myQuestions[6].question);


li1.textContent = (myQuestions[0].answers[0]);
li2.textContent = (myQuestions[0].answers[1]);
li3.textContent = (myQuestions[0].answers[2]);

li4.textContent = (myQuestions[1].answers[0]);
li5.textContent = (myQuestions[1].answers[1]);
li6.textContent = (myQuestions[1].answers[2]);

li7.textContent = (myQuestions[2].answers[0]);
li8.textContent = (myQuestions[2].answers[1]);
li9.textContent = (myQuestions[2].answers[2]);

li10.textContent = (myQuestions[3].answers[0]);
li11.textContent = (myQuestions[3].answers[1]);
li12.textContent = (myQuestions[3].answers[2]);

li13.textContent = (myQuestions[4].answers[0]);
li14.textContent = (myQuestions[4].answers[1]);
li15.textContent = (myQuestions[4].answers[2]);

li16.textContent = (myQuestions[5].answers[0]);
li17.textContent = (myQuestions[5].answers[1]);
li18.textContent = (myQuestions[5].answers[2]);

li19.textContent = (myQuestions[6].answers[0]);
li20.textContent = (myQuestions[6].answers[1]);
li21.textContent = (myQuestions[6].answers[2]);

console.log(li1);

console.log(myQuestions[0].question);


console.log(list1);

body.appendChild(div1ST);

body.appendChild(h1QS);
body.appendChild(list1);
body.appendChild(li1);
body.appendChild(li2);
body.appendChild(li3);


body.appendChild(h2QS);
body.appendChild(list2);
body.appendChild(li4);
body.appendChild(li5);
body.appendChild(li6);

body.appendChild(h3QS);
body.appendChild(list3);
body.appendChild(li7);
body.appendChild(li8);
body.appendChild(li9);

body.appendChild(h4QS);
body.appendChild(list4);
body.appendChild(li10);
body.appendChild(li11);
body.appendChild(li12);

body.appendChild(h5QS);
body.appendChild(list5);
body.appendChild(li13);
body.appendChild(li14);
body.appendChild(li15);

body.appendChild(h6QS);
body.appendChild(list6);
body.appendChild(li16);
body.appendChild(li17);
body.appendChild(li18);

body.appendChild(h7QS);
body.appendChild(list7);
body.appendChild(li19);
body.appendChild(li20);
body.appendChild(li21);

var style = document.createElement('style');




// create a function display questions- 
    //function display question and choices-
// var current question index=
    // set = 0
//create for loop
    //display answers array from myQuestions
    //append answer buttons to DOM        
//when answer button is selected by way of event listener
    //increment current question index variable     

var currentQuestion = 0;

//currentQuestion ++ increment //


var card_description = document.querySelector(".card_description");

var button = body.querySelector(".card_button");
console.log(button);
console.log(h1QS);
button.addEventListener("click", startQuiz);

function startQuiz () {
    console.log("hellow world");
    document.querySelector(".card").style.display = "none";
    console.log(myQuestions[currentQuestion].answers[0]);
    displayQuestions();
};

function displayQuestions () {
    console.log(card_description);
    //card_description.innerText = myQuestions[0].answers[0];
    document.querySelector(".card-question").style.display = "block";

};
//function playGame() {
//var cardQuestion = document.getElementsByClassName("card_Question");
//if(cardQuestion.display === "none"){
//cardQuestion.style.display = "block";
   // } else {
     //   cardQuestion.style.display = "none";
   // }
//}
//playGame()
//myQuestions[0]
//How should I grab the questions, answer and compare the answers to eachother.
var timeleft = 40;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);





//console.log(myQuestions[0]);


div1ST.textContent 

document.getElementsByClassName("card_description").innerHTML = myQuestions.join("");

//document.body.append(myQuestions[0].question);
//document.body.append(myQuestions[1].answers['b']);
//document.body.append(myQuestions[2].answers['c']);
//document.body.append(myQuestions[3].answers['b']);
//console.log(myQuestions[0].answers);


//function startQuiz(){
  //  var quiz = [];
  //  myQuestions.forEach(
    //    (currentQuestion, questionNumber) => {
     //       var answer = [];
     //       for()
     //   }
   // )
//}
//function getQuestions(myQuestions){
   // div1ST.innerHTML = "";
    //ulCreate.innerHTML = "";

    //for (var i =0; 1 <myQuestions.length; i++){
       // var playerQuestion = myQuestions[myQuestionIndex].title;
       // var userChoices = myQuestions[myQuestionIndex].choices;
       // questionsDiv.textContent = userQuestion;
   // }
//};

//div1ST.appendChild(myQuestions);
//document.getElementById.div1ST.append(myQuestions[0]);
// function buildQuiz(){
   // var output = [];
    //myQuestions.forEach(currentQuestion, questionNumber) => {
      //  var answers = [];
      //  for(letter in currentQuestion.answers){
      //      answers.push(
      //          '<label>
      //          <input '
      //      )
      //  }
 ///   }
//}

