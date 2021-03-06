var shoppingCart = (function () {

    cart = [];

    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return Math.abs(totalCount);
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        // return Number(totalCart.toFixed(2));
        return Math.abs(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Math.abs(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();



function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    output +=
        "<tr class='col'>" +
        "<td class = 'checkOut__Table--title' scope='col'>" + "Products" + "</td>" +
        "<td class = 'checkOut__Table--title' scope='col'>" + "Price" + "</td>" +
        "<td class = 'checkOut__Table--title' scope='col'>" + "Amount" + "</td>" +
        "<td class = 'checkOut__Table--title' scope='col'>" + "Clear" + "</td>" +
        "<td class = 'checkOut__Table--title' scope='col'>" + "Sub Total" + "</td>" +
        "</tr>";
    for (var i in cartArray) {
        output +=
            "<tr>" +
            "<td scope='col'>" + cartArray[i].name + "</td>" +
            "<td scope='col'>" + cartArray[i].price + "$" + "</td>" +
            "<td scope='col'><div class='input-group inputCheckOut'><button class='minus-item input-group-addon plusCheckOutMinus' data-name='" + cartArray[i].name + "'>-</button>" +
            "<input type='text' id='checkMina'  class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" +
            "<button class='plus-item plusCheckOutPlus input-group-addon' data-name='" + cartArray[i].name + "'>+</button></div></td>" +
            "<td scope='col'><button class='delete-item btn btn-danger' data-name='" + cartArray[i].name + "'>X</button></td>" +
            " = " +
            "<td scope='col'>" + cartArray[i].total + "</td>" +
            "</tr>";
    }
    $('.show-cart').html(output);
    // var checkMin = document.getElementById('checkMina')
    // console.log('asdasd', checkMin)
    // if (checkMin < 0) {
    //     return Math.abs(checkMin);
    //     // console.log('bad news here');
    // } else {
    //     // console.log('good news here');
    // };
    var txtBox = $('#checkMina');
    var blackList = ['-'];

    function checkBlackList(str) {
        $.each(blackList, function (i, n) {
            if (new RegExp(n, "i").test(str)) {
                txtBox.val(txtBox.val().replace(new RegExp(n, "gi"), ""))
            }
        })
    }

    txtBox.on('keyup', function (e) {
        checkBlackList(this.value);
    })
    
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}


// Add ro Cart

$('.add-to-cart').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});



// $('.item-count').on("change", function () {
//     var minimum = 1;
//     if (price < minimum) {
//         price = minimum;
//     }
// })
displayCart();