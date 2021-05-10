$('#add_new_product').click(function(event) {
    event.preventDefault();
    $('#add-new-product').toggle();
    $('#product-list').toggle();
});

$('#cancel-edit').click(function(event) {
    event.preventDefault();
    $('#add-new-product').toggle();
    $('#product-list').toggle();
});


$('#filter_products').click(function(event) {
    event.preventDefault();
    $('#filter-container').toggle();

});

$('.product_item').click(function(){
    window.location.href = "ProductDetail.html";
});
