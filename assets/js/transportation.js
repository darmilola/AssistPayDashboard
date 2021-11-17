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

$('#add-new-route-button').click(function(event) {
    event.preventDefault();
    $('#drivers_list').toggle();
    $('#add-new-route').toggle();
    
});

$('#dismiss_bookings').click(function(event) {
    event.preventDefault();
    $('#booking-list').toggle();
    $('#booking_list_root').toggle();
    $('#transport_list').toggle();
    $('#add-new-route-button').toggle();
    $('#drivers_list').toggle();
   
    
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
