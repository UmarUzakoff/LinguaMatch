const modalWrapper = document.querySelector(".modal-wrapper");
const modalBtn = document.querySelector(".modalBtn");
const form = document.querySelector(".form");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

modalBtn.addEventListener("click", () => {
  modalWrapper.classList.add("unvisible");
});
const hard = [
  {
    id: 4,
    name: "Ambiguous",
    bgColor: "chartreuse",
  },
  {
    id: 2,
    name: "Bureaucracy",
    bgColor: "blue",
  },
  {
    id: 5,
    name: "Hierarchy",
    bgColor: "yellow",
  },
  {
    id: 6,
    name: "Conundrum",
    bgColor: "aqua",
  },
  {
    id: 10,
    name: "Impartial",
    bgColor: "violet",
  },
  {
    id: 1,
    name: "Paradox",
    bgColor: "red",
  },
  {
    id: 7,
    name: "Fluctuate",
    bgColor: "cadetblue",
  },
  {
    id: 8,
    name: "Depravity",
    bgColor: "red",
  },
  {
    id: 3,
    name: "Kudos",
    bgColor: "violet",
  },
  {
    id: 9,
    name: "Egalitarian",
    bgColor: "blue",
  },
];
const hardUz = [
  {
    id: 2,
    name: "Byurokratiya",
    bgColor: "blue",
  },
  {
    id: 4,
    name: "Shubhali",
    bgColor: "chartreuse",
  },
  {
    id: 6,
    name: "Kanandrum",
    bgColor: "aqua",
  },
  {
    id: 5,
    name: "Iyerarxiya",
    bgColor: "yellow",
  },
  {
    id: 1,
    name: "Paradoksiya",
    bgColor: "red",
  },
  {
    id: 10,
    name: "Qisman",
    bgColor: "violet",
  },
  {
    id: 7,
    name: "To'lqinlanmoq",
    bgColor: "cadetblue",
  },
  {
    id: 8,
    name: "Buzuqlik",
    bgColor: "red",
  },
  {
    id: 3,
    name: "Rag'batlantirish",
    bgColor: "violet",
  },
  {
    id: 9,
    name: "Egalitar",
    bgColor: "blue",
  },
];

let err = true;

window.onload = () => {
  render(hard, hardUz);
};
let div = document.createElement("div");
div.className = "wrapper";
let div2 = document.createElement("div");
div2.className = "wrapper";

// Check the IDs of the objects
// if (object1.id === object2.id) {
//   // If the IDs are equal, add 1 to the score
//   score++;
// } else {
//   // If the IDs are not equal, display "error" in a paragraph element for 3 seconds
//   const errorParagraph = document.createElement("p");
//   errorParagraph.textContent = "error";
//   document.body.appendChild(errorParagraph);
//   setTimeout(() => {
//     document.body.removeChild(errorParagraph);
//   }, 3000);
// }

var id1 = 0;
var id2 = 0;
let score = 0;

const winningAudio = new Audio("../images/mixkit-achievement-bell-600.wav");
const losingAudio = new Audio("../images/mixkit-retro-arcade-lose-2027.wav");

function getId1(id) {
  id1 = id;
  if (id === id2) {
    result1.textContent = `Score: ${(score += 1)}`;
    winningAudio.play();
  }
}

function getId2(id) {
  id2 = id;
  if (id2 === id1) {
    result1.textContent = `Score: ${(score += 1)}`;
    winningAudio.play();
  } else {
    losingAudio.play();
    const errorParagraph = document.createElement("p");
    errorParagraph.textContent = "error";
    result2.appendChild(errorParagraph);
    errorParagraph.style.transition = "opacity 3s ease-in-out 5s";
    errorParagraph.style.opacity = "1";
    setTimeout(() => {
      errorParagraph.style.opacity = "0";
      setTimeout(() => {
        result2.removeChild(errorParagraph);
      }, 80);
    }, 500);
  }
}

function render(hard, hardUz) {
  hard.map((el) => {
    let btn1 = document.createElement("button");
    btn1.onclick = () => getId1(el.id);
    btn1.textContent = el.name;
    btn1.className = "enWords";
    btn1.style.backgroundColor = el.bgColor;
    div.append(btn1);
  });
  hardUz.map((el) => {
    let btn2 = document.createElement("button");
    btn2.onclick = () => getId2(el.id);
    btn2.textContent = el.name;
    btn2.className = "uzWords";
    div2.append(btn2);
  });

  form.append(div);
  form.append(div2);
}

let timeInSecs;
let ticker;

function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval("tick()", 1000);
}

function tick() {
  let secs = timeInSecs;
  if (secs > 0) {
    timeInSecs--;
  } else {
    clearInterval(ticker);
    startTimer(0.3 * 60); // 5 minutes in seconds
  }

  let mins = Math.floor(secs / 60);
  secs %= 60;

  let result =
    (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

  document.getElementById("countdown").innerHTML = result;
}
startTimer(0.5 * 60); // 5 minutes in seconds
