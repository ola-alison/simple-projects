document.getElementById("project-title").innerHTML = 'project 3: eight ball ';

function myFunction() {

  let userName = prompt('what\'s your name?');
  let alertMsg = userName ? "hello, " + userName : "hello";

  alert(alertMsg);

  let userQuestion = prompt('ask your question');
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';

  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Cannot predict now';
      break;
    case 3:
      eightBall = 'Don\'t count on it';
      break;
    case 4:
      eightBall = 'My sources say no';
      break;
    case 5:
      eightBall = 'Outlook not so good';
      break;
    case 6:
      eightBall = 'Signs point to yes';
      break;
    case 7:
      eightBall = 'You are in grave danger';
      break;
  }

  console.log('question: ' + userQuestion);
  console.log('answer: ' + eightBall);

}

myFunction();
