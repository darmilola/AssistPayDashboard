$('#add_new_product').click(function(event) {
    event.preventDefault();
    $('#add-new-product').toggle();
    $('#product-list').toggle();
});


$('#filter_products').click(function(event) {
    event.preventDefault();
    $('#filter-container').toggle();

});

