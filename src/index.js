const allDivElements = document.querySelectorAll("div");

let timeout = 300;
allDivElements.forEach((div) => {
  div.addEventListener("click", function () {
    setTimeout(() => {
      changeBg(this, true);
      setTimeout(() => {
        changeBg(this, false);
        timeout = 300;
      }, timeout);
    }, timeout);
    timeout += 300;
  });
});

function changeBg(div, phase) {
  if (phase) div.style.backgroundColor = "lightblue";
  else div.style.backgroundColor = "#fff";
}

// Please make each div clickable programmatically, considering UX
// 1 - Log the id of the clicked div.
// 2 - make clicked div and parents highlighted by changing background color,
//     respectively with a small delay
