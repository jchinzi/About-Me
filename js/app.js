'use strict';

// ==================Variables========================

var petGuess;
var schoolGuess;
var majorGuess;
var fakeJob;
var realJob;
var statesVisited;

var guestName;
var wantToPlay;

// ================Greeting ======================

guestName = prompt('Welcome to my About Me page!  What should I call you?');

console.log('guestName:', guestName);

// ================Guessing Game=======================

wantToPlay = confirm('Great to meet you, ' + guestName + '!  Are you ready to play the game?');

// =================Q1 - False Pet=========================

if (wantToPlay){
  petGuess = prompt('Do I have a pet cat?');
} else {
  alert('Oh well, maybe next time.');
}

var lowPetGuess = petGuess.toLowerCase();

if (lowPetGuess === 'no' || lowPetGuess === 'n'){
  //console.log('That\'s right!  My mom has cats, but I have sugar gliders!');
  alert('That\'s right!  My mom has cats, but I have sugar gliders!');
} else if (lowPetGuess === 'yes' || lowPetGuess === 'y'){
  //console.log('Nope, you must have me confused with someone else.');
  alert('Nope, you must have me confused with someone else.');
} else {
  //console.log('Yes or No answers only, please.');}
  alert('Yes or No answers only, please.');}

// =================Q2 - False School=========================

schoolGuess = prompt('Did I go to the University of Washington?');

var lowSchoolGuess = schoolGuess.toLowerCase();

if (lowSchoolGuess === 'no' || lowSchoolGuess === 'n'){
  //console.log('That\'s right!  I graduated from UCSC and am a proud Banana Slug!');
  alert('That\'s right!  I graduated from UCSC and am a proud Banana Slug!');
} else if (lowSchoolGuess === 'yes' || lowSchoolGuess === 'y'){
  //console.log('Nope, I\'ve actually never taken a class at UW');
  alert('Nope, I\'ve actually never taken a class at UW');
} else {
  //console.log('Yes or No answers only, please.');}
  alert('Yes or No answers only, please.');}

// =================Q3 - True Major=========================

majorGuess = prompt('Did I study Literature in college?');

var lowmajorGuess = majorGuess.toLowerCase();

if (lowmajorGuess === 'no' || lowmajorGuess === 'n'){
  //console.log('Sorry, that is incorrect.  In fact, Literature was my major!');
  alert('Sorry, that is incorrect.  In fact, Literature was my major!');
} else if (lowmajorGuess === 'yes' || lowmajorGuess === 'y'){
  //console.log('You\'re right!  I majored in Literature.');
  alert('You\'re right!  I majored in Literature.');
} else {
  //console.log('Yes or No answers only, please.');}
  alert('Yes or No answers only, please.');}

// =================Q4 - False Job=========================

fakeJob = prompt('Have I worked as a waitress?');

var lowfakeJob = fakeJob.toLowerCase();

if (lowfakeJob === 'no' || lowfakeJob === 'n'){
  //console.log('Correct!  I\'ve had quite a few jobs, but I\'ve never worked as a waitress');
  alert('Correct!  I\'ve had quite a few jobs, but I\'ve never worked as a waitress');
} else if (lowfakeJob === 'yes' || lowfakeJob === 'y'){
  //console.log('Nope!  Surprising, I know, but I\'ve never worked as a waitress.');
  alert('Nope!  Surprising, I know, but I\'ve never worked as a waitress.');
} else {
  //console.log('Yes or No answers only, please.');}
  alert('Yes or No answers only, please.');}

// =================Q5 - True Job=========================

realJob = prompt('Have I ever worked in the performing arts?');

var lowrealJob = realJob.toLowerCase();

if (lowrealJob === 'no' || lowrealJob === 'n'){
  //console.log('Sorry, that is incorrect.  I actually worked for a theater company for several years while I was a college student!');
  alert('Sorry, that is incorrect.  I actually worked for a theater company for several years while I was a college student!');
} else if (lowrealJob === 'yes' || lowrealJob === 'y'){
  //console.log('You\'re right!  I worked as an electrician for a theater company when I was a college student.');
  alert('You\'re right!  I worked as an electrician for a theater company when I was a college student.');
} else {
  //console.log('Yes or No answers only, please.');}
  alert('Yes or No answers only, please.');}

// =================Q6 - States=========================

for (var i = 0; i <4; i++){ //Allows up to 4 guesses

  statesVisited = prompt('How many states in the US have I visited?');
  var numStatesVisited = parseInt(statesVisited);

  if (numStatesVisited===22){
    alert('That\'s exactly right! How did you know?');
    break; //stops loop early in the case of a correct answer
  } else if (numStatesVisited>22 && numStatesVisited<50){
    alert('Not quite that many');
  } else if (numStatesVisited<22 && numStatesVisited>0){
    alert('More than that!');
  } else {alert('please enter a number between 1 and 50');}
}

// =================Final Message=========================

if ((lowPetGuess === 'no' || lowPetGuess === 'n') && (lowSchoolGuess === 'no' || lowSchoolGuess === 'n') && (lowmajorGuess === 'yes' || lowmajorGuess === 'y') && (lowfakeJob === 'no' || lowfakeJob === 'n') && (lowrealJob === 'yes' || lowrealJob === 'y')){
  //console.log('Congratulations ' + guestName + '! You got every question right!  I look forward to getting to know you as well.');
  alert('Congratulations ' + guestName + '! You got every question right!  I look forward to getting to know you as well.');
} else {
  //console.log('Thanks for playing my game, ' + guestName + '. I look forward to getting to know you as well.');}
  alert('Thanks for playing my game, ' + guestName + '. I look forward to getting to know you as well.');}
