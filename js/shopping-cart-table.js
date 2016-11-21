var shoppingCartItems = [];
$(document).ready(function() {

    if (sessionStorage["shopping-cart-items"] != null) {
        shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
    }
    displayShoppingCartItems();
});

$(".add-to-cart").click(function() {
    var button = $(this);
    var id = button.attr("id");
    var name = button.attr("data-name");
    var price = button.attr("data-price");
    var quantity = 1; 
    var item = {
        id: id,
        name: name,
        price: price,
        quantity: quantity
    };
    var exists = false;
    if (shoppingCartItems.length > 0) {
        $.each(shoppingCartItems, function(index, value) {
            if (value.id == item.id) {
                value.quantity++;
                exists = true;
                return false;
            }
        }); 
    }  

    if (!exists) {
        shoppingCartItems.push(item);
    }

    sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
    sessionStorage
    displayShoppingCartItems();
});

$("#button-clear").click(function() {
    shoppingCartItems = [];
    sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
    $("#table-products > tbody").html("");
});


var array= [];


function displayShoppingCartItems() {
    if (sessionStorage["shopping-cart-items"] != null) {
        shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());

        $("#table-products > tbody").html("");
        $.each(shoppingCartItems, function(index, item) {
            
            var total = Math.round(item.price * item.quantity);
           /* array.push(total);*/
            var htmlString = "";
            htmlString += "<tr>";
            htmlString += "<td>" + item.id + "</td>";
            htmlString += "<td>" + item.name + "</td>";
            htmlString += "<td style='text-align: right'>" + item.price + "</td>";
            htmlString += "<td style='text-align: right'>" + item.quantity + "</td>";
            htmlString += "<td style='text-align: right'>" + total + "</td>";
            htmlString += "</tr>";
            
            $("#table-products > tbody:last").append(htmlString);
           
        });
        
         
    }  
    // document.getElementById('number').innerHTML=shoppingCartItems.length; 
}
/*
function subt(){ 
    var subtotal=0;
            for(var i=0;i<array.length;i++){
               
                subtotal+=array[i];
               
            } return subtotal;
}
 document.getElementById('sum').innerHTML=subt();
*/