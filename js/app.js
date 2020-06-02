'use strict';

// Variables==================================

var petGuess;
var schoolGuess;
var majorGuess;
var fakeJob;
var realJob;

var guestName;
var wantToPlay;

// Greeting ==============================

guestName = prompt('Welcome to my About Me page!  What should I call you?');

console.log('guestName:', guestName);

// Guessing Game==============================

wantToPlay = confirm('Great to meet you, ' + guestName + '!  Are you ready to play the game?');

if (wantToPlay){
  petGuess = prompt('Do I have a pet cat?');
} else {
  alert('Oh well, maybe next time.');
}

var lowPetGuess = petGuess.toLowerCase();

if (lowPetGuess === 'no' || lowPetGuess === 'n'){
  console.log('That\'s right!  My mom has cats, but I have sugar gliders!');
} else if (lowPetGuess === 'yes' || lowPetGuess === 'y'){
  console.log('Nope, you must have me confused with someone else.');
} else {console.log('Yes or No answers only, please.');}


schoolGuess = prompt('Did I go to the University of Washington?');

var lowSchoolGuess = schoolGuess.toLowerCase();

if (lowSchoolGuess === 'no' || lowSchoolGuess === 'n'){
  console.log('That\'s right!  I\'m a proud Banana Slug!');
} else if (lowSchoolGuess === 'yes' || lowSchoolGuess === 'y'){
  console.log('Nope, I\'ve actually never taken a class at UW');
} else {console.log('Yes or No answers only, please.');}


majorGuess = prompt('Did I study Literature in college?');

var lowmajorGuess = majorGuess.toLowerCase();

if (lowmajorGuess === 'no' || lowmajorGuess === 'n'){
  console.log('Sorry, that is incorrect.  In fact, Literature was my major!');
} else if (lowmajorGuess === 'yes' || lowmajorGuess === 'y'){
  console.log('You\'re right!  I majored in Literature.');
} else {console.log('Yes or No answers only, please.');}


fakeJob = prompt('Have I worked as a waitress?');

var lowfakeJob = fakeJob.toLowerCase();

if (lowfakeJob === 'no' || lowfakeJob === 'n'){
  console.log('Correct!  I\'ve had quite a few jobs, but I\'ve never worked as a waitress');
} else if (lowfakeJob === 'yes' || lowfakeJob === 'y'){
  console.log('Nope!  Surprising, I know, but I\'ve never worked as a waitress.');
} else {console.log('Yes or No answers only, please.');}


realJob = prompt('Have I ever worked in the performing arts?');

var lowrealJob = realJob.toLowerCase();

if (lowrealJob === 'no' || lowrealJob === 'n'){
  console.log('Sorry, that is incorrect.  I actually worked for a theater company for several years while I was a college student!');
} else if (lowrealJob === 'yes' || lowrealJob === 'y'){
  console.log('You\'re right!  I worked as an electrician for a theater company when I was a college student.');
} else {console.log('Yes or No answers only, please.');}

if ((lowPetGuess === 'no' || lowPetGuess === 'n') && (lowSchoolGuess === 'no' || lowSchoolGuess === 'n') && (lowmajorGuess === 'yes' || lowmajorGuess === 'y') && (lowfakeJob === 'no' || lowfakeJob === 'n') && (lowrealJob === 'yes' || lowrealJob === 'y')){
  console.log('Congratulations ' + guestName + '! You got every question right!  I look forward to getting to know you as well.');
} else {console.log('Thanks for playing my game, ' + guestName + '. I look forward to getting to know you as well.');}
