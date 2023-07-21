//Slider Principal
var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");

var positionUit = -100;

function slideImg(x) {
  for (i = 0; i < 5; i++) {
    caroBtns[i].classList.remove("active");
  }
  caroBtns[x].classList.add("active");
  position = x * positionUit;
  imgList.style.left = position + "%";
}

//Slider Eventos
var imgListEvent = document.getElementById("img-list-event");
var caroBtnsEvent = document.getElementsByClassName("caro-btn-event");

var positionUit = -100;
var posiNow = 0;

function slideImgEvent(x) {
  var i;
  posiNow = x;
  posiNow = working(posiNow);
  for (i = 0; i < 5; i++) {
    caroBtnsEvent[i].classList.remove("active");
  }
  caroBtnsEvent[x].classList.add("active");
  position = x * positionUit;
  imgListEvent.style.left = position + "%";
}

function swipper(x) {
  var i;
  posiNow += x;
  posiNow = working(posiNow);
  for (i = 0; i < 5; i++) {
    caroBtnsEvent[i].classList.remove("active");
  }
  caroBtnsEvent[posiNow].classList.add("active");
  position = posiNow * positionUit;
  imgListEvent.style.left = position + "%";
}

function working(posiNow) {
  if (posiNow < 0) {
    posiNow = 0;
  } else if (posiNow > 4) {
    posiNow = 4;
  }
  return posiNow;
}

//Slider Alimentação
var imgListOng = document.getElementById("img-list-ong");
var caroBtnsOng = document.getElementsByClassName("caro-btn-ong");

var positionUit = -100;
var posiNow = 0;

function slideImgOng(x) {
  var i;
  posiNow = x;
  posiNow = working(posiNow);
  for (i = 0; i < 4; i++) {
    caroBtnsOng[i].classList.remove("active");
  }
  caroBtnsOng[x].classList.add("active");
  position = x * positionUit;
  imgListOng.style.left = position + "%";
}

function swipperOng(x) {
  var i;
  posiNow += x;
  posiNow = workingOng(posiNow);
  for (i = 0; i < 4; i++) {
    caroBtnsOng[i].classList.remove("active");
  }
  caroBtnsOng[posiNow].classList.add("active");
  position = posiNow * positionUit;
  imgListOng.style.left = position + "%";
}

function workingOng(posiNow) {
  if (posiNow < 0) {
    posiNow = 0;
  } else if (posiNow > 3) {
    posiNow = 3;
  }
  return posiNow;
}

//Enviar Email
const form = document.getElementById("form");

async function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  await sendEmail(name, email, message);
}

async function sendEmail(name, email, message) {
  try {
    const connection1 = await fetch(
      "https://formsubmit.co/ajax/elinewelter@ifsp.edu.br",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      }
    );
    const connection2 = await fetch(
      "https://formsubmit.co/ajax/gabriela.moura@ifsp.edu.br",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      }
    )

    const convertedConnection1 = await connection1.json();
    const convertedConnection2 = await connection2.json();
    alert("Email enviado com sucesso");
  } catch (e) {
    alert("ERROR: Email não foi enviado");
  }
}

form.addEventListener("submit", (event) => submitForm(event));

//Limite de Sub Menus
var radio = document.getElementsByClassName("limited");
let checkBefore = 4;

function oneMenu(x) {
  if (checkBefore == x) {
    radio[x].checked = false;
    checkBefore = 4;
  } else {
    radio[x].checked = true;
    checkBefore = x;
  }
}
