var map;
var inputName = document.getElementsByName('inputName');
var btnSubmit = document.querySelectorAll('btnSubmit');
const inputEmail = document.getElementsByName('inputEmail')
const inputSubject = document.getElementsByName('inputSubject')

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 21.028511,
      lng: 105.804817
    },
    zoom: 8
  });
  var Hanoi = {
    lat: 21.028511,
    lng: 105.804817
  };

  var marker = new google.maps.Marker({
    position: Hanoi,
    map: map
  });
};

function changeColorButton() {
  if (inputName[0].value !== "" && inputEmail[0].value !== "") {
    btnSubmit[0].style.backgroundColor = "orange";
  } else {
    btnSubmit[0].style.backgroundColor = "red";
  }
}

function changeColorInputName() {
  if (inputName[0].value !== "") {
    inputName[0].style.backgroundColor = "#f1f1f1";
  } else {
    inputName[0].style.backgroundColor = "#fff";
  }
};

function changeColorInputEmail() {
  if (inputEmail[0].value !== "") {
    inputEmail[0].style.backgroundColor = "#f1f1f1";
  } else {
    inputEmail[0].style.backgroundColor = "#fff";
  }
};

function changeColorInputSubject() {
  if (inputSubject[0].value !== "") {
    inputSubject[0].style.backgroundColor = "#f1f1f1";
  } else {
    inputSubject[0].style.backgroundColor = "#fff";
  }
};

// btnSubmit[0].addEventListener('click', function () {
//   btnSubmit[0].style.backgroundColor = "orange";
// });

