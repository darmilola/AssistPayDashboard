$('#add-new-accommodation-button').click(function(event) {
    event.preventDefault();
    $('#add-new-accomodation').toggle();
    $('#accomdation-list').toggle();
});

$('#cancel-add').click(function(event) {
    event.preventDefault();
    $('#add-new-accomodation').toggle();
    $('#accomdation-list').toggle();
});


$('#view_accommodation').click(function(){
    window.location.href = "AccomodationDetails.html";
});

