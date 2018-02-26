const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let input = prompt("type in sth to check if it is a pangram").toLowerCase().replace(/ /g, "").split("");

let repeating = {};

for (let i = 0; i < input.length; i++) {

  let j = alphabet.indexOf(input[i]);

  if (j>-1) {
    alphabet.splice(j, 1);
  }

  else {
    repeating[input[i]] = true;
  }
}

if (alphabet.length === 0) {

  if (repeating) {
    console.log("it's almost a pangram, there are repeating letters: " + Object.keys(repeating).join(''));
  }

  else {
    console.log("it's a pangram!");
  }
}

else {
  console.log("there are missing letters: " + alphabet);
}


//Jckdw lve my bg sphinx of quartz
//The quick brown fox jumps over the lazy dog.
