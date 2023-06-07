//Slider Principal
var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");

var positionUit = -100;

function slideImg(x) {
  var i;
  for(i = 0; i < 5; i++) {
    caroBtns[i].style.backgroundColor = "blue";
  }
  caroBtns[x].style.backgroundColor = "green";
  position = x * positionUit;
  imgList.style.left = position + "%";
}

//Slider Eventos
var imgListEvent = document.getElementById("img-list-event");
var caroBtnsEvent = document.getElementsByClassName("caro-btn-event");

var positionUit = -100;
var posiAtu = 0;

function slideImgEvent(x) {
  var i;
  posiAtu = x;
  posiAtu = working(posiAtu);
  for(i = 0; i < 5; i++) {
    caroBtnsEvent[i].style.backgroundColor = "blue";
  }
  caroBtnsEvent[x].style.backgroundColor = "green";
  position = x * positionUit;
  imgListEvent.style.left = position + "%";
}

function swipper(x) {
  var i;
  console.log(posiAtu);
  posiAtu += x;
  posiAtu = working(posiAtu);
  console.log(posiAtu);
  for(i = 0; i < 5; i++) {
    caroBtnsEvent[i].style.backgroundColor = "blue";
  }
  caroBtnsEvent[posiAtu].style.backgroundColor = "green";
  position = (posiAtu) * positionUit;
  imgListEvent.style.left = position + "%";
}

function working(posiAtu){
  if(posiAtu<0){
    posiAtu = 0;
  } else if (posiAtu>4){
    posiAtu = 4;
  } return posiAtu;
}