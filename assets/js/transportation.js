$('#add-new-company-button').click(function(event) {
    event.preventDefault();
    $('#add-new-company').toggle();
    $('#company-list').toggle();
    $('#drivers_list').toggle();
});

$('#cancel-edit').click(function(event) {
    event.preventDefault();
    $('#add-new-company').toggle();
    $('#company-list').toggle();
    $('#drivers_list').toggle();
});

$('#view_company_routes').click(function(event) {
    event.preventDefault();
    $('#company-list').toggle();
    $('#drivers_list').toggle();
    $('#company_routes_list').toggle();
});

$('#add_new_comapny_route').click(function(event) {
    event.preventDefault();
    $('#company-list').toggle();
    $('#drivers_list').toggle();
    $('#add-new-route').toggle();
});

$('#cancel-add').click(function(event) {
    event.preventDefault();
    $('#company-list').toggle();
    $('#drivers_list').toggle();
    $('#add-new-route').toggle();
});


$('#close_route').click(function(event) {
    event.preventDefault();
    $('#company-list').toggle();
    $('#drivers_list').toggle();
    $('#company_routes_list').toggle();
});
