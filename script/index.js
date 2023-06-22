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
    const connction = await fetch(
      "https://formsubmit.co/ajax/seuEmailHer",
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

    const convertedConnection = await connction.json();
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
