var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("Hey! What's your name?\n");
var welcomeAns = readlineSync.question("Welcome " + userName + " Do you know Rishabh ?  (Choose 'a' or 'b') \n \t a. Yes \n \t b. No\n");
console.log("\nCool! Let's take a quiz! \n\t");

function quiz(que,ans){
  var userAns = readlineSync.question(que + "\n" + "Answer :  ");
  console.log("You entered : " + userAns );

  if(userAns === ans){
    console.log("Correct!");
    score = score  + 1;  
    }
  else {
    console.log("Wrong!");
    }

  console.log("Your score is: "+ score);
  console.log("\n"+"------------"+"\n");
};

//Questions Data in Array and Objects
var queArray = [  
  { q : "Where do I belong to? \n\t a. Delhi \n\t b. Indore \n\t c. Bhopal",
    a : "b",
  },

  { q : "What's my age ? \n\t a. 26 \n\t b. 28 \n\t c. 30",
    a : "a",
  },
  {  q : "What's my biggest passion? \n\t a. Entrepreneurship \n\t b. Gaming \n\t c. Teaching",
    a : "c",
  },
  {  q : "My Favourite Anime? \n\t a. Death Note \n\t b. Doraemon \n\t c. Naruto",
    a : "c",
  },
  {  q : "Where do I work? \n\t a. Byjus \n\t b. ICT Academy \n\t c. Vella",
    a : "b",
  },
];

//HighScores Array
var highScores = [
  {
    name : "Rish",
    score : 5,
  },

  {
    name : "Nimbudi",
    score : 4,
  },

]

//Function calls
for(i=0; i<queArray.length; i++){
  var currentque = queArray[i].q;
  var currentans = queArray[i].a;
  quiz(currentque, currentans);
};

console.log("Hey " + userName + " Your Final Score is : " + score);


//High Scores Display and Checks
console.log("\n\t\tExisting High Scores : \n  ")
for(j=0; j<highScores.length; j++){
  console.log("\t\t\t\t" + highScores[j].name + " : " + highScores[j].score);
};

var scoreStatus = "neutral";
for (k=0; k<highScores.length; k++){
    if(score > highScores[k].score){
        k = highScores.length;
        scoreStatus = "beaten";
        console.log("\nCongrats!! " + userName + " You have beaten one of the High Scores");
    }
}  

if(scoreStatus == "neutral"){
for (k=0; k<highScores.length; k++){
    if(score == highScores[k].score){
        k = highScores.length;
        scoreStatus = "matched";
        console.log("\nNot bad! " + userName + " You have matched one of the High Scores.");
    };
};
};

if(scoreStatus == "neutral"){
for (k=0; k<highScores.length; k++){
    if(score < highScores[k].score){
        k = highScores.length;
        console.log("\n Sorry " + userName + " You couldn't beat any of the High Scores this time");
    };
};
};

console.log("\n Note : - If you have beaten the existing HighScores then send me Screenshot, I will update it.");
console.log("\n Thanks for playing!!  Bubye!")