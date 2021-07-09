var count = 0;
var text = "";
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");
var textEl = document.querySelector("#text");

function setCounterText() {
  countEl.textContent = count;
  textEl.textContent = text;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function () {
  count++;
  text = text + " HI!";
  setCounterText();
});


// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function () {
  text = text + " BYE!";
  if (count > 0) {
    count--;
    setCounterText();
  }
})