//Slider Principal
var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");

var positionUit = -100;

function slideImg(x) {
  var i;
  for(i = 0; i < 5; i++) {
    caroBtns[i].classList.remove('active');
  }
  caroBtns[x].classList.add('active');
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
  for(i = 0; i < 5; i++) {
    caroBtnsEvent[i].classList.remove('active');
  }
  caroBtnsEvent[x].classList.add('active');
  position = x * positionUit;
  imgListEvent.style.left = position + "%";
}

function swipper(x) {
  var i;
  posiNow += x;
  posiNow = working(posiNow);
  for(i = 0; i < 5; i++) {
    caroBtnsEvent[i].classList.remove('active');
  }
  caroBtnsEvent[posiNow].classList.add('active');
  position = (posiNow) * positionUit;
  imgListEvent.style.left = position + "%";
}

function working(posiNow){
  if(posiNow<0){
    posiNow = 0;
  } else if (posiNow>4){
    posiNow = 4;
  } return posiNow;
}