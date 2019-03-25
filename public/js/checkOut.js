var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var phone = document.getElementById("phoneNumber");
var address= document.getElementById("address");
var orderNote = document.getElementById("orderNote");
var errMSG = document.getElementsByClassName("firstName--msg")
var submit = document.getElementsByClassName("checkOut__button")

// $(".firstName--msg").hide();
// $(".lastName--msg").hide();

$('#checkOutForm').focusout(function () {
    check_firstname();
    check_lastname();
    check_phoneNumber();
    $(".firstName--msg").animate({
        opacity: "1"
    }, 2000)
    $(".lastName--msg").animate({
        opacity: "1"
    }, 2000)
    $(".phone--msg").animate({
        opacity: "1"
    }, 2000)
    // checkNull();
});

function check_firstname() {
    if (firstName.value.length === 0) {
        $(".firstName--msg").html(" First Name is required");
        return false;
    } else if (firstName.value.length < 3 || firstName.value.length > 20) {
        $(".firstName--msg").html(" First Name should be between 5 - 20 characters");
        $(".firstName--msg").show();
        return false;
    } else {
        $(".firstName--msg").hide();
        return true;
    }
}

function check_lastname() {
    if (lastName.value.length === 0) {
        $(".lastName--msg").html(" Last Name is required");
        $(".lastName--msg").show();
        return false;
    } else if (lastName.value.length < 5 || lastName.value.length > 20) {
        $(".lastName--msg").html(" Last Name should be between 5 - 20 characters");
        $(".lastName--msg").show();
        return false;
    } else {
        $(".lastName--msg").hide();
        return true;
    }
}

function check_phoneNumber() {
    if (phone.value.length === 0) {
        $(".phone--msg").html(" Phone Number is required");
        $(".phone--msg").show();
        return false;
    } else {
        $(".phone--msg").hide();
        return true;
    }
}
function myScript() {
    var abc = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        address: address.value,
        orderNote: orderNote.value
    }
    if (check_firstname() && check_lastname() && check_phoneNumber()) {
        alert("Success");
        var formData = JSON.stringify(abc);
        localStorage.setItem("Orders", formData);
        var getFormData = JSON.parse(window.localStorage.getItem("Orders"));
        var getData = JSON.parse(localStorage.getItem('shoppingCart'));
        getData.push(abc);
        console.log(getData);
        localStorage.setItem("Orderrs", getData);
    } else {
        alert("FALSE");
    }
}
localStorage.removeItem("test")


// function checkNull() {
//     if (firstName == null) {
//         alert('sorry, WallSearch DOM cannot be found');
//         return false;
//     }
//     if (firstName.value.length == 0) {
//         alert("nothing");
//     }
// }


// function loadCart() {
//     cart = JSON.parse(localStorage.getItem('shoppingCart'));
//     console.log(cart)
// }

