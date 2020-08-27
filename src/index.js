const one = document.querySelector("#\\31");
const two = document.querySelector("#\\32");
const three = document.querySelector("#\\33");
const four = document.querySelector("#\\34");
const five = document.querySelector("#\\35");
const allDivElements = document.querySelectorAll("div");

five.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 750);
  },
  false
);

four.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 1000);
  },
  false
);

three.addEventListener(
  "mousedown",
  function (event) {
    setTimeout(() => {
      changeBg(this);
    }, 1250);
  },
  false
);

two.addEventListener(
  "mousedown",
  function () {
    setTimeout(() => {
      changeBg(this);
    }, 1500);
  },
  false
);

one.addEventListener(
  "mousedown",
  function (event) {
    allDivElements.forEach((div) => {
      div.style.backgroundColor = "#fff";
    });

    console.log(event.target.id);
    setTimeout(() => {
      changeBg(this);
    }, 1750);
  },
  false
);

function changeBg(t) {
  const element = document.querySelector("#\\3" + t.id);
  element.style.backgroundColor = "lightblue";
}

// Please make each div clickable programmatically, considering UX
// 1 - Log the id of the clicked div.
// 2 - make clicked div and parents highlighted by changing background color,
//     respectively with a small delay
