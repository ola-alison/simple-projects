document.getElementById("project-title").innerHTML = 'project 1: temperature calculator';

function calcTemperature() {

  let scale = prompt('choose scale: c (celsius), k (kelvin), f (fahrenheit)');
  let celsius;
  let kelvin;
  let fahrenheit;


  switch(scale) {
    case 'c':
      celsius = parseInt(prompt('What is the Celsius temperature today?'));
      kelvin = celsius + 273;
      fahrenheit = Math.floor(celsius * (9/5) + 32);
      alert(celsius + '*C   -->   '+ kelvin + '*K   -->   '+ fahrenheit + '*F');
      break;

    case 'k':
      kelvin = parseInt(prompt('What is the Kelvin temperature today?'));
      celsius = kelvin - 273;
      fahrenheit = Math.floor(celsius * (9/5) + 32);
      alert(kelvin + '*K   -->   '+ celsius + '*C   -->   ' + fahrenheit + '*F');
      break;

    case 'f':
      fahrenheit = parseInt(prompt('What is the Fahrenheit temperature today?'));
      kelvin = Math.floor((fahrenheit + 459.67) * (5/9));
      celsius = kelvin - 273;
      alert(fahrenheit + '*F   -->   '+ celsius + '*C   -->   '+ kelvin + '*K');
      break;

    default:
      alert("incorrect input");
  }

}

calcTemperature();
