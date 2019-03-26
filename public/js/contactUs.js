var map;
var inputName = document.getElementsByName('inputName');
var btnSubmit = document.querySelectorAll('btnSubmit');
const inputEmail = document.getElementsByName('inputEmail');
const inputSubject = document.getElementsByName('inputSubject');
var yourName = document.getElementById('yourName');
var yourEmail = document.getElementById('yourEmail');


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

$('#contactForm').focusout(function () {
  check_yourname();
  check_email();
  $(".inputname").animate({
    opacity: "1"
  }, 2000)
  $(".emailmsg").animate({
    opacity: "1"
  }, 2000)
  // check_phoneNumber();
  // $(".firstName--msg").animate({
  //     opacity: "1"
  // }, 2000)
  // $(".lastName--msg").animate({
  //     opacity: "1"
  // }, 2000)
  // $(".phone--msg").animate({
  //     opacity: "1"
  // }, 2000)
  // checkNull();
});

function check_yourname() {
  if (yourName.value.length === 0) {
    $(".inputname").html(" Your Name is required");
    return false;
  } else if (yourName.value.length < 3 || yourName.value.length > 20) {
    $(".inputname").html(" Your Name should be between 4 - 20 characters");
    $(".inputname").show();
    return false;
  } else {
    $(".inputname").hide();
    return true;
  }
}

function check_email() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (yourEmail.value.length === 0) {
    $(".emailmsg").html(" Email is required");
    return false;
  } else if (yourEmail.value.match(mailformat)) {
    $(".emailmsg").hide();
    return true;
  } else {
    $(".emailmsg").html(" Wrong Format Email");
    $(".emailmsg").show();
    return false;
  }
}

function formCheck() {

  if (check_yourname() && check_email()) {
    alert("Success");

    var contactFormData = {
      Name: yourName.value,
      Email: yourEmail.value
    }

    var contactUsFormData = JSON.stringify(contactFormData);
    localStorage.setItem("Contact Us", contactUsFormData);
    var getcontactUsFormData = JSON.parse(window.localStorage.getItem("Contact Us"));
    // var getData = JSON.parse(localStorage.getItem('shoppingCart'));
    // getData.push(abc);
    console.log(getcontactUsFormData);
    // localStorage.setItem("Orderrs", getData);
  } else {
    alert("FALSE");
  }
}

// btnSubmit[0].addEventListener('click', function () {
//   btnSubmit[0].style.backgroundColor = "orange";
// });