$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/julia.ilkiv@gmail.com",
                method: "POST",
                data: {
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    email: $('#email').val(),
                    tel: $('#tel').val(),
                    city: $('#city').val(),
                    newpost: $('#newpost').val(),
                    paymentmethod: $('#radio').val(),
                    cardnumber: $('#card').val(),
                    expiry: $('#expiry').val(),
                    securitycode: $('#code').val()
                },
                dataType: "json"
            })
            .done(function() {
               alert('Thank you');/*html('<h1>Thank you!</h1>')*/
            })
            .fail(function() {
                $('form').html('<h1>Error</h1>')
            });
    });
});







































/*ADD to Cart
var cart = {};
cart.products = [];
localStorage.setItem('cart', JSON.stringify(cart));

$('figure').on('click',function(e){
    var figure = $(this).parent();
    
    var product = {};
    product.id = $(figure).attr('data-id');
    product.name = $(figure).attr('data-name');
    product.price = $(figure).attr('data-price');
    
    addToCart(product);
});

function addToCart(product){
    if(localStorage && localStorage.getItem('cart')){
        var cart = JSON.parse(localStorage.getItem('cart'));
        
        cart.products.push(product);
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}*/

