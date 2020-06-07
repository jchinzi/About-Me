'use strict';

// ==================Variables========================

var petGuess;
var schoolGuess;
var majorGuess;
var fakeJob;
var realJob;
var statesVisited;
var countryArray = ['ecuador', 'ireland', 'england', 'wales', 'scotland', 'canada'];
var countryVisited;

var guestName;
var wantToPlay;

var score = 0;
var i;

// ================Greeting ======================

guestName = prompt('Welcome to my About Me page!  What should I call you?');

console.log('guestName:', guestName);

// ================Guessing Game=======================

wantToPlay = confirm('Great to meet you, ' + guestName + '!  Are you ready to play the game?');

// =================Q1 - False Pet=========================
function askPet(){
  if (wantToPlay){
    petGuess = prompt('Do I have a pet cat?');
  } else {
    alert('Oh well, maybe next time.');
  }

  var lowPetGuess = petGuess.toLowerCase();

  if (lowPetGuess === 'no' || lowPetGuess === 'n'){
    alert('That\'s right!  My mom has cats, but I have sugar gliders!');
    score++;
  } else if (lowPetGuess === 'yes' || lowPetGuess === 'y'){
    alert('Nope, you must have me confused with someone else.');
  } else {
    alert('Yes or No answers only, please.');}
}
// =================Q2 - False School=========================
function askSchool(){
  schoolGuess = prompt('Did I go to the University of Washington?');

  var lowSchoolGuess = schoolGuess.toLowerCase();

  if (lowSchoolGuess === 'no' || lowSchoolGuess === 'n'){
    alert('That\'s right!  I graduated from UCSC and am a proud Banana Slug!');
    score++;
  } else if (lowSchoolGuess === 'yes' || lowSchoolGuess === 'y'){
    alert('Nope, I\'ve actually never taken a class at UW');
  } else {
    alert('Yes or No answers only, please.');}
}
// =================Q3 - True Major=========================
function askMajor(){
  majorGuess = prompt('Did I study Literature in college?');

  var lowmajorGuess = majorGuess.toLowerCase();

  if (lowmajorGuess === 'no' || lowmajorGuess === 'n'){
    alert('Sorry, that is incorrect.  In fact, Literature was my major!');
  } else if (lowmajorGuess === 'yes' || lowmajorGuess === 'y'){
    alert('You\'re right!  I majored in Literature.');
    score++;
  } else {
    alert('Yes or No answers only, please.');}
}
// =================Q4 - False Job=========================
function askWrongJob(){
  fakeJob = prompt('Have I worked as a waitress?');

  var lowfakeJob = fakeJob.toLowerCase();

  if (lowfakeJob === 'no' || lowfakeJob === 'n'){
    alert('Correct!  I\'ve had quite a few jobs, but I\'ve never worked as a waitress');
    score++;
  } else if (lowfakeJob === 'yes' || lowfakeJob === 'y'){
    alert('Nope!  Surprising, I know, but I\'ve never worked as a waitress.');
  } else {
    alert('Yes or No answers only, please.');}
}
// =================Q5 - True Job=========================
function askRightJob(){
  realJob = prompt('Have I ever worked in the performing arts?');

  var lowrealJob = realJob.toLowerCase();

  if (lowrealJob === 'no' || lowrealJob === 'n'){
    alert('Sorry, that is incorrect.  I actually worked for a theater company for several years while I was a college student!');
  } else if (lowrealJob === 'yes' || lowrealJob === 'y'){
    alert('You\'re right!  I worked as an electrician for a theater company when I was a college student.');
    score++;
  } else {
    alert('Yes or No answers only, please.');}
}
// =================Q6 - States=========================
function askStates(){
  for (i = 0; i <4; i++){ //Allows up to 4 guesses

    statesVisited = prompt('How many states in the US have I visited?');
    var numStatesVisited = parseInt(statesVisited);

    if (numStatesVisited===22){
      alert('That\'s exactly right! How did you know?');
      score++;
      break; //stops loop early in the case of a correct answer
    } else if (numStatesVisited>22 && numStatesVisited<50){
      alert('Not quite that many.');
    } else if (numStatesVisited<22 && numStatesVisited>0){
      alert('More than that!');
    } else {
      alert('Please enter a number between 1 and 50');}
  }
  alert('Though I\'d like to visit them all some day, I have already visited 22 US states!  Many of them were visited during road trips from California to Texas, and then later from Washington to Illinois');
}
// =================Q7 - Countries=========================
function askCountry(){
  for (i = 0; i<6; i++){ //Allows up to 6 guesses


    countryVisited = prompt('I\'ve also traveled outside the US a bit.  Try and guess what other countries I\'ve visited!').toLowerCase();

    if (countryVisited === countryArray[0]||countryVisited === countryArray[1]||countryVisited === countryArray[2]||countryVisited === countryArray[3]||countryVisited === countryArray[4]||countryVisited === countryArray[5]){
      alert('That\'s right!  How did you know?');
      score++;
      break;

    } else if (countryVisited !== countryArray[0] && countryVisited !== countryArray[1] && countryVisited !== countryArray[2] && countryVisited !== countryArray[3] && countryVisited !== countryArray[4] && countryVisited !== countryArray[5]){
      alert('Nope!  I haven\'t been there yet.');

    } else {
      console.log('this is broken');}
  }
  alert('I\'d like to travel more extensively, but so far I\'ve visited Ecuador, Ireland, England, Wales, Scotland & Canada.');
}
// =================Final Score=========================
function reportScore(){
  if (score > 6){
    alert('Congratulations ' + guestName + '! You got all ' + score +' questions right!  I hope you enjoyed the game!');
  } else {
    alert('Congratulations ' + guestName + '. You got a score of ' + score + ' out of 7.  If you\'d like to play again, just refresh the page!');}
}
//==================Function Invocations=========================

askPet();
askSchool();
askMajor();
askWrongJob();
askRightJob();
askStates();
askCountry();
reportScore();
