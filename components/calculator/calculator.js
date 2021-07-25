/********************************************************************************************************
 * Patrick Aliberti
 * 
 * 5/22/2021
********************************************************************************************************/

// This function returns the history value
function getHistory()
{
  return document.getElementById("history").innerText;
}

// This function takes in a var and prints it to the history
function printHistory(num)
{
  document.getElementById("history").innerHTML=num;
}

// This function returns the display value
function getDisplay()
{
  return document.getElementById("display").innerText;
}

// This function takes in a var and prints it to the display
function printDisplay(num)
{
  if (num == "")
  {
    document.getElementById("display").innerText=num;
  }
  else
  {
    document.getElementById("display").innerText=getFormattedNumber(num);
  }
}

// This functions takes in a var and formats it with commas
function getFormattedNumber(num)
{
  var n = Number(num);
  var Value = n.toLocaleString("en");
  return Value;
}

// This functions takes in a formatted var and gets rid of the commas
function reverseNumberFormat(num)
{
  return Number(num.replace(/,/g,''));
}

// Get number input and display it to the display
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++)
{
  number[i].addEventListener('click', function()
  {
    var display = reverseNumberFormat(getDisplay());
    if (display != NaN)
    {
      display = display  + this.id;
      printDisplay(display);
    }
  });
}

// Get operator input and perform the task
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++)
{
  operator[i].addEventListener('click', function()
  {
    if (this.id == "AC")
    {
      printHistory("0");
      printDisplay("0");
    }
    else
    {
      var display = getDisplay();
      var history = getHistory();
      if (display != "")
      {
        display = reverseNumberFormat(display);
        display = display + this.id;
        history = history + display;

        printHistory(history);
        printDisplay("0");

        if (this.id == "=")
        {
          var history = history.replace(/[^-()\d/*+.]/g, '');
          history = history.substring(1);
          var solution = eval(history);
          printDisplay(solution);
          printHistory("0");
        }
      }
    }
  });
}

// light/dark mode input
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () =>
{
  document.body.classList.toggle('light');
});