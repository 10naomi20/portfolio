console.log("Hello World");

alert("Hello!");

const now = new Date();
console.log(now)
const nowYear=now.getFullYear();
console.log(nowYear);

console.log('${nowYear}')

var date = new Date();
var year = date.getFullYear();
document.getElementById('curYr').innerHTML = year;


// get the button element
var alertButton = document.getElementById('btn-alert');

// Add a click event listener to the button
alertButton.addEventListener('click', function() {
    // Alert message
    alert('Thank you for your click!');

    // console message
    console.log('Button clicked!');
});



 // get the botton element
 var hoverButton = document.getElementById('hoverBtn');

 // add a mouseover event handler to the botton
 hoverButton.addEventListener('mouseover', function() {
     // action to be performed on hover
     console.log('Mouse over the button!');
 });



    
 let count = 1;

 // get the botton and text element
 var incrementButton = document.getElementById('btn-counter');
 var txtCounter = document.getElementById('txt-counter');
 
 // add a click event listener to the button
 incrementButton.addEventListener('click', function () {
   // increment the count
   count = count + 1;
 
   // display the new value in the text
   txtCounter.innerHTML = `Numbers: ${count}`;
 
   // check if the number is even or odd and add CSS class accordingly
   if (count % 2 === 0) {
     // If even
     txtCounter.classList.remove('odd');
     txtCounter.classList.add('even');
   } else {
     // If odd
     txtCounter.classList.remove('even');
     txtCounter.classList.add('odd');
   }
 });
 
 // Get the ordered list with the ID "numbers"
 var numbersList = document.getElementById('numbers');
 
 // generate numbers from 1 to 100 and add them to the ordered list
 for (let i = 1; i <= 100; i++) {
   // create a new <li> element
   var listItem = document.createElement('li');
 
   // set the text based on the index as Even or Odd
   listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';
 
   // Apply zebra stripe style
   if (i % 2 === 0) {
     // If even index
     listItem.classList.add('even-row');
   } else {
     // If odd index
     listItem.classList.add('odd-row');
   }
 
   // Add the <li> element to the ordered list
   numbersList.appendChild(listItem);
 }
 
const myButton = document.getElementById('myButton');

myButton.addEventListener('mouseover', function() {
  changeButtonLabel('Thank you!');
});

myButton.addEventListener('mouseleave', function() {
  changeButtonLabel('Click me ');
});

function changeButtonLabel(newLabel) {
  myButton.innerText = newLabel;
}
