$('#edit_product').click(function(event) {
    event.preventDefault();
    $('#product_detail').toggle();
    $('#add-new-product').toggle();
});

$('#cancel-edit').click(function(event) {
    event.preventDefault();
    $('#product_detail').toggle();
    $('#add-new-product').toggle();
});