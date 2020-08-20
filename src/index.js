import "./styles.css";

const one = document.querySelector("#\\31");
const two = document.querySelector("#\\32");
const three = document.querySelector("#\\33");
const four = document.querySelector("#\\34");
const five = document.querySelector("#\\35");

five.addEventListener(
  "click",
  function () {
    delay(this);
  },
  false
);

four.addEventListener(
  "click",
  function () {
    delay(this);
  },
  false
);

three.addEventListener(
  "click",
  function () {
    delay(this);
  },
  false
);

two.addEventListener(
  "click",
  function () {
    delay(this);
  },
  false
);

one.addEventListener(
  "click",
  function () {
    delay(this);
  },
  false
);

function delay(t) {
  const timeout = setTimeout(() => {
    t.style.backgroundColor = "red";

    console.log(t.id);
  }, 1000);
}

// Please make each div clickable programmatically, considering UX
// 1 - Log the id of the clicked div.
// 2 - make clicked div and parents highlighted by changing background color,
//     respectively with a small delay
