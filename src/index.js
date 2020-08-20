

const one = document.querySelector("#\\31");
const two = document.querySelector("#\\32");
const three = document.querySelector("#\\33");
const four = document.querySelector("#\\34");
const five = document.querySelector("#\\35");

five.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 1500)
    
  },
  false
);

four.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 1750)
    
  },
  false
);

three.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 2000)
    
  },
  false
);

two.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 2250)
    
  },
  false
);

one.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 2500)
    
  },
  false
);

function changeBg(t) {
  document.querySelector("#\\3"+t.id).style.backgroundColor = "red";
  
}


// Please make each div clickable programmatically, considering UX
// 1 - Log the id of the clicked div.
// 2 - make clicked div and parents highlighted by changing background color,
//     respectively with a small delay
