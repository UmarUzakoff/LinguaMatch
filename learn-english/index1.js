const form = document.querySelector(".form");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const boxes = document.querySelector(".boxes");

const easy = [
  {
    id: 4,
    name: "Cup",
    bgColor: "chartreuse",
  },
  {
    id: 2,
    name: "Dog",
    bgColor: "blue",
  },
  {
    id: 6,
    name: "Car",
    bgColor: "aqua",
  },
  {
    id: 5,
    name: "Hat",
    bgColor: "yellow",
  },
  {
    id: 1,
    name: "Cat",
    bgColor: "red",
  },
  {
    id: 10,
    name: "Bat",
    bgColor: "violet",
  },
  {
    id: 7,
    name: "Bed",
    bgColor: "cadetblue",
  },
  {
    id: 8,
    name: "Red",
    bgColor: "red",
  },
  {
    id: 3,
    name: "Sun",
    bgColor: "violet",
  },
  {
    id: 9,
    name: "Pen",
    bgColor: "blue",
  },
];
const easyUz = [
  {
    id: 1,
    name: "Mushuk",
    bgColor: "red",
  },
  {
    id: 2,
    name: "Kuchuk",
    bgColor: "red",
  },

  {
    id: 3,
    name: "Quyosh",
    bgColor: "red",
  },
  {
    id: 4,
    name: "Piyola",
    bgColor: "red",
  },
  {
    id: 5,
    name: "Shlyapa",
    bgColor: "red",
  },
  {
    id: 6,
    name: "Moshina",
    bgColor: "red",
  },
  {
    id: 7,
    name: "Yotoq",
    bgColor: "red",
  },
  {
    id: 8,
    name: "Qizil",
    bgColor: "red",
  },
  {
    id: 9,
    name: "Ruchka",
    bgColor: "red",
  },
  {
    id: 10,
    name: "Ko'rshapalak",
    bgColor: "red",
  },
];
const medium = [
  {
    id: 4,
    name: "Hospital",
    bgColor: "chartreuse",
  },
  {
    id: 2,
    name: "Elephant",
    bgColor: "blue",
  },
  {
    id: 6,
    name: "Xylophone",
    bgColor: "aqua",
  },
  {
    id: 5,
    name: "Kitchen",
    bgColor: "yellow",
  },
  {
    id: 1,
    name: "Library",
    bgColor: "red",
  },
  {
    id: 10,
    name: "Mountain",
    bgColor: "violet",
  },
  {
    id: 7,
    name: "Necklace",
    bgColor: "cadetblue",
  },
  {
    id: 8,
    name: "Painting",
    bgColor: "red",
  },
  {
    id: 3,
    name: "Navigator",
    bgColor: "violet",
  },
  {
    id: 9,
    name: "Umbrella",
    bgColor: "blue",
  },
];
const mediumUz = [
  {
    id: 4,
    name: "Kasalxona",
    bgColor: "chartreuse",
  },
  {
    id: 2,
    name: "Fil",
    bgColor: "blue",
  },
  {
    id: 6,
    name: "Ksilofon",
    bgColor: "aqua",
  },
  {
    id: 5,
    name: "Oshxona",
    bgColor: "yellow",
  },
  {
    id: 1,
    name: "Kutubxona",
    bgColor: "red",
  },
  {
    id: 10,
    name: "Tog'",
    bgColor: "violet",
  },
  {
    id: 7,
    name: "Marjon",
    bgColor: "cadetblue",
  },
  {
    id: 8,
    name: "Rasm",
    bgColor: "red",
  },
  {
    id: 3,
    name: "Navigator",
    bgColor: "violet",
  },
  {
    id: 9,
    name: "Soyabon",
    bgColor: "blue",
  },
];

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
    id: 6,
    name: "Conundrum",
    bgColor: "aqua",
  },
  {
    id: 5,
    name: "Hierarchy",
    bgColor: "yellow",
  },
  {
    id: 1,
    name: "Paradox",
    bgColor: "red",
  },
  {
    id: 10,
    name: "Impartial",
    bgColor: "violet",
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
    id: 4,
    name: "Shubhali",
    bgColor: "chartreuse",
  },
  {
    id: 2,
    name: "Byurokratiya",
    bgColor: "blue",
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
  render(easy, easyUz, medium, mediumUz, hard, hardUz);
};
let div = document.createElement("div");
div.className = "wrapper";
let div2 = document.createElement("div");
div2.className = "wrapper";

var id1 = 0;
var id2 = 0;
let score = 0;

function getId1(id) {
  id1 = id;
  if (id === id2) {
    result1.textContent = `Score: ${(score += 1)}`;
  }
}

function getId2(id) {
  id2 = id;
  if (id2 === id1) {
    result1.textContent = `Score: ${(score += 1)}`;
  } else {
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
boxes.addEventListener("click", (e) => {
  if (e.target.id === "easy") {
    easy.map((el) => {
      let btn1 = document.createElement("button");
      btn1.onclick = () => getId1(el.id);
      btn1.textContent = el.name;
      btn1.className = "enWords";
      btn1.style.backgroundColor = el.bgColor;
      div.append(btn1);
    });
    easyUz.map((el) => {
      let btn2 = document.createElement("button");
      btn2.onclick = () => getId2(el.id);
      btn2.textContent = el.name;
      btn2.className = "uzWords";
      div2.append(btn2);
    });
  } else if (e.target.id === "medium") {
    medium.map((el) => {
      let btn1 = document.createElement("button");
      btn1.onclick = () => getId1(el.id);
      btn1.textContent = el.name;
      btn1.className = "enWords";
      btn1.style.backgroundColor = el.bgColor;
      div.append(btn1);
    });
    mediumUz.map((el) => {
      let btn2 = document.createElement("button");
      btn2.onclick = () => getId2(el.id);
      btn2.textContent = el.name;
      btn2.className = "uzWords";
      div2.append(btn2);
    });
  } else if (e.target.id === "hard") {
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
});

function render(words, easyUz) {}
