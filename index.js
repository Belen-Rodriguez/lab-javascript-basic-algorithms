// Iteration 1: Names and Input
console.log ('EXERCISE 1: Names and Input__________________')

let hacker1 = 'Belen';
console.log (`The driver's name is ${hacker1}`);
let hacker2 = 'Maria';
console.log (`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
console.log ('EXERCISE 2: Conditionnals____________________')

if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length < hacker2.length){
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else if (hacker1.length == hacker2.length){
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  else {
    console.log ('You may enter a valid name')
  }



// Iteration 3.1: Loops
console.log ('EXERCISE 3.1: Loops_______________________')

let nameUpperCase = '';

for (const value of hacker1){
  nameUpperCase = nameUpperCase + value.toUpperCase() + ' ';
};
  console.log (nameUpperCase);



// Iteration 3.2: Loops
console.log ('EXERCISE 3.2: Loops_______________________')

let nameReverse = '';
for (const value of hacker1){
  nameReverse = value + nameReverse;
};
  console.log (nameReverse);

  // Iteration 3.3: Loops
console.log ('EXERCISE 3.3: Loops_______________________')

if (hacker1[0]<hacker2[0]){
    console.log(`The driver's name goes first.`)
  }
  else if (hacker1[0]>hacker2[0]){
    console.log(`I, the navigator goes first definitely`)
  }
  else if (hacker1[0]===hacker2[0]){
    console.log(`What?! You both have the same name?`)
  }


    // BONUS 1: 
console.log ('Bonus 1: ______________________________')

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit dui, id placerat mauris pharetra eget. Duis sed neque finibus, rhoncus est dignissim, consequat tortor. Nullam eleifend lacus tortor, ornare posuere elit rutrum in. Phasellus libero eros, efficitur et volutpat quis, molestie ac lacus. Morbi interdum sem sed aliquet mattis. Nam aliquam erat id purus varius pretium. Duis et arcu eget ligula cursus mollis et at dolor. Phasellus eget neque sit amet turpis tristique imperdiet. Praesent ornare dapibus nulla, ut iaculis nibh. Mauris egestas magna eu dapibus tincidunt. Aenean volutpat magna justo, quis accumsan metus cursus a. Suspendisse sed leo ligula. Morbi eu lacus nulla. Cras bibendum dui vel eros scelerisque, eu imperdiet lectus congue. In porta odio nunc, sed malesuada sapien laoreet id.

Phasellus aliquam pretium orci, nec commodo nisl viverra in. Praesent condimentum gravida ipsum vel sagittis. Duis blandit neque id bibendum rhoncus. Proin vitae nibh neque. Suspendisse pulvinar nulla et ex fringilla, id aliquet leo feugiat. Curabitur dignissim maximus nisl, vel euismod purus dignissim in. Etiam eget nisi auctor tellus pretium venenatis vel at sem. Sed elit elit, cursus ac sapien a, finibus posuere elit. Duis sit amet ante sed massa dictum sollicitudin.

Donec non arcu faucibus, tristique nibh at, porta massa. Phasellus laoreet, magna in pretium dictum, dui risus ornare lectus, sit amet volutpat nisl nibh in est. Morbi vel neque vitae justo viverra cursus luctus sed eros. Donec ex purus, suscipit nec placerat at, posuere id nisl. In nec luctus mi. Aenean at consectetur leo, quis faucibus leo. Nulla gravida, enim a condimentum elementum, justo metus ullamcorper mi, a venenatis dui nunc quis ipsum. Aliquam vulputate euismod tellus, a dignissim elit tempus nec. Fusce condimentum suscipit nisl non rhoncus. Quisque vitae pulvinar eros.`

let wordCounter = 1;
let etWord = 0;

// Bonus 1 OPCION 1

for (let i =0; i < longText.length; i++){

  if(longText[i] === ' ')
    {wordCounter ++}
  else {continue}
}  
console.log(`Total words are ${wordCounter} (done by solution option 1)`)

// Bonus 1 OPCION 2

let words = longText.split(" ");
console.log(`Total words are ${words.length} (done by solution option 2)`);

for (let j = 0; j < words.length; j++){

if (words[j] === 'et') {
 etWord ++}
}
  console.log(`Total "et" are ${etWord} (done by solution option 2)`)

// Bonus1 OPCION 3

let totalWords = 0
let totalEt = 0

for(const word of longText.split(' ')){
  totalWords ++;
  if (word === 'et'){
    totalEt ++;
  }
}

console.log (`Total words are ${totalWords} (done by solution option 3)`)
console.log (`Total "et" are ${totalEt} (done by solution option 3)`)


    // BONUS 2: 
    console.log ('Bonus 2: ______________________________')

    let phraseToCheck = 'race car'
let rightRead = '';
let reverseRead = '';

for (const letra of phraseToCheck){
  if (letra == ' '){continue} 
  else {
  rightRead = rightRead + letra;
  }
};
//  console.log (rightRead);


for (const letra of phraseToCheck){
 if (letra == ' '){continue} 
  else {
  reverseRead = letra + reverseRead;
  }
};
//  console.log (reverseRead);

if (rightRead == reverseRead) {
  console.log('Hey we have a Palindrome')
}