//Subscribing a contact via AJAX call
$(document).ready(function() {
    var frm = $('#email-form');
    frm.submit(function () {
        $('div#loading-image').show();
        $('p.form-subtext').hide();
        $('div.popup-window').animate({height:'450px'}, 500);
        $.ajax({
            type: frm.attr('method'),
            url: "subscribe/",
            data: frm.serialize(),
            success: function (response) {
                $('.w-form-done').css('display','block');
                $('#email-form').css('display','none');
                $('div#loading-image').hide();
            },
            error: function(response) {
                $('.form-error-message').css('display','block');
                $('.form-error-message').text(response['responseJSON']['error_message']);
                $('div#loading-image').hide();
            }
        });
        return false;
    });
})
