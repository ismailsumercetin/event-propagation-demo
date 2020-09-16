const allDivElements = document.querySelectorAll("div");
const timeout = 300;
const timeOuts = [];
let count;

allDivElements.forEach((div, index) => {
  div.addEventListener("click", function (e) {
    //set count for managing reclicks
    count = Number(e.target.id) - index;

    //with another click,
    //clear timeouts, make all divs white and restart the process
    if (count === 1) {
      while (timeOuts.length > 0) clearTimeout(timeOuts.pop());
      allDivElements.forEach((div) => {
        div.style.backgroundColor = "#fff";
      });
    }

    //store timeouts
    timeOuts.push(
      setTimeout(() => {
        //make div lightblue
        changeBg(this, true);
        timeOuts.push(
          setTimeout(() => {
            //make div white
            changeBg(this, false);
          }, timeout * Number(e.target.id)) //after 1800 milliseconds for each div
        );
      }, timeout * count)
    );

    //as soon as it reaches the target id (clicked div id)
    if (count === Number(e.target.id)) count = 0;
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
