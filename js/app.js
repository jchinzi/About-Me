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
  score++;
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
  score++;
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
  score++;
} else {
  //console.log('Yes or No answers only, please.');}
  alert('Yes or No answers only, please.');}

// =================Q4 - False Job=========================

fakeJob = prompt('Have I worked as a waitress?');

var lowfakeJob = fakeJob.toLowerCase();

if (lowfakeJob === 'no' || lowfakeJob === 'n'){
  //console.log('Correct!  I\'ve had quite a few jobs, but I\'ve never worked as a waitress');
  alert('Correct!  I\'ve had quite a few jobs, but I\'ve never worked as a waitress');
  score++;
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
  score++;
} else {
  //console.log('Yes or No answers only, please.');}
  alert('Yes or No answers only, please.');}

// =================Q6 - States=========================

for (var i = 0; i <4; i++){ //Allows up to 4 guesses

  statesVisited = prompt('How many states in the US have I visited?');
  var numStatesVisited = parseInt(statesVisited);

  if (numStatesVisited===22){
    //console.log('That\'s exactly right! How did you know?');
    alert('That\'s exactly right! How did you know?');
    score++;
    break; //stops loop early in the case of a correct answer
  } else if (numStatesVisited>22 && numStatesVisited<50){
    //console.log('Not quite that many.');
    alert('Not quite that many.');
  } else if (numStatesVisited<22 && numStatesVisited>0){
    //console.log('More than that!')
    alert('More than that!');
  } else {
    //console.log('Please enter a number between 1 and 50');}
    alert('Please enter a number between 1 and 50');}
}
alert('Though I\'d like to visit them all some day, I have already visited 22 US states!  Many of them were visited during road trips from California to Texas, and then later from Washington to Illinois');

// =================Q7 - Countries=========================

for (i = 0; i<6; i++){ //Allows up to 6 guesses


  countryVisited = prompt('I\'ve also traveled outside the US a bit.  Try and guess what other countries I\'ve visited!').toLowerCase();

  if (countryVisited === countryArray[0]||countryVisited === countryArray[1]||countryVisited === countryArray[2]||countryVisited === countryArray[3]||countryVisited === countryArray[4]||countryVisited === countryArray[5]){
    //console.log('That\'s right!  How did you know?');
    alert('That\'s right!  How did you know?');
    score++;
    break;

  } else if (countryVisited !== countryArray[0] && countryVisited !== countryArray[1] && countryVisited !== countryArray[2] && countryVisited !== countryArray[3] && countryVisited !== countryArray[4] && countryVisited !== countryArray[5]){
    //console.log('Nope!  I haven\'t been there yet.');
    alert('Nope!  I haven\'t been there yet.');

  } else {
    console.log('this is broken');}
}
alert('I\'d like to travel more extensively, but so far I\'ve visited Ecuador, Ireland, England, Wales, Scotland & Canada.');

// =================Final Score=========================

if (score > 6){
  //console.log('Congratulations ' + guestName + '! You got all ' + score +' questions right!  I hope you enjoyed the game!');
  alert('Congratulations ' + guestName + '! You got all ' + score +' questions right!  I hope you enjoyed the game!');
} else {
  //console.log('Congratulations ' + guestName + '. You got a score of ' + score + ' out of 7.  If you\'d like to play again, just refresh the page!');}
  alert('Congratulations ' + guestName + '. You got a score of ' + score + ' out of 7.  If you\'d like to play again, just refresh the page!');}
