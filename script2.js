document.getElementById("project-title").innerHTML = 'project 2: dog years calculator';


function calcDogYears() {
  let userAge = parseInt(prompt('how old are you?'));
  let userName = prompt('what is your name?');
  let earlyYears = 2 * 10.5;
  let laterYears = (userAge - 2) * 4;
  let userAgeInDogYears = earlyYears + laterYears;

  console.log(userName + ' is ' + userAge + ' years old  -->  ' + userAgeInDogYears + ' in dog years')
}

calcDogYears();
