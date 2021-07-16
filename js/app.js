'use strict';

// ask for users name
let username = prompt('What is your name?');
alert('Hello '+ username);
//greet the user
console.log('username: ' + username);

//First yes or no prompt
let live = prompt('Do I live in Seattle? Answer \'yes\' or \'no\'').toLowerCase();

if(live === 'no' || live ==='n'){
  alert(username + ' you are correct!! I live in Lincoln,NE');
} else if (live === 'yes' || live === 'y'){
  alert('Incorrect!! I live in Lincoln,NE');
  // console.log('Incorrect!! I live in Lincoln,NE');
} else{ alert('Please respond with a \'yes\' or \'no\' answer');}

//Second yes or no prompt
let pets = prompt('Do I have any pets? Answer \'yes\' or \'no\'').toLowerCase();

if(pets === 'yes' || pets ==='y'){
  alert(username + ' you are correct!! I have a dog named Lana');
} else if (pets === 'no' || pets === 'n'){
  alert('Incorrect!! I have one dog');
  // console.log('Incorrect!! I have one dog');
} else{ alert('Please respond with a \'yes\' or \'no\' answer');}

//Third yes or no prompt
let kids = prompt('Do I have any children? Answer \'yes\' or \'no\'').toLowerCase();

if(kids === 'no' || kids ==='n'){
  alert(username + ' you are correct!! I do not have any children');
} else if (kids === 'yes' || kids === 'y'){
  alert('Incorrect!! I do not have children');
  // console.log('Incorrect!! I do not have children');
} else{ alert('Please respond with a \'yes\' or \'no\' answer');}

//Fourth yes or no prompt
let read = prompt('Do I like to read? Answer \'yes\' or \'no\'').toLowerCase();

if(read === 'yes' || read ==='y'){
  alert(username + ' you are correct!! I love to read!!');
} else if (read === 'no' || read === 'n'){
  alert('Incorrect!! I love to read');
// console.log('Incorrect!! I love to read');
} else{ alert('Please respond with a \'yes\' or \'no\' answer');}

//Fifth yes or no prompt
let work = prompt('Do I currently work for Zillow? Answer \'yes\' or \'no\'').toLowerCase();

if(work === 'yes' || work ==='y'){
  alert(username + ' you are correct!! I am a Senior Mortgage Data Specialist at Zillow');
} else if (work === 'no' || work === 'n'){
  alert('Incorrect ' + username + 'I do work for Zillow');
  // console.log('Incorrect!! I do work for Zillow');
} else{ alert('Please respond with a \'yes\' or \'no\' answer');}

alert('Enjoy learning more about me ' + username);