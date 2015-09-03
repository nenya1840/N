$(document).ready(function(){

    $('#quote-given-yes').click(function () {
        $("#quoteGivenEnter").fadeIn();
    });

    $('#quote-given-no').parent().click(function () {
        $("#quoteGivenEnter").fadeOut();
        $("#quoteGivenEnter").val('');
    });

    $('.submit').click(function(){
        validateForm(); 
        $('input[aria-required="true"]').on( "change", function() {
            validateForm();
        });
        $('select').on( "change", function() {
            validateForm();
        });
        return false;
    });

    function validateForm() {
        console.log('validate');
        $('form').addClass('is-validated');
        var inputs = $('input[aria-required="true"]');
        inputs.each(function( index ) {
            if($(this).val()===""){
                $(this).addClass('is-error');
                $(this).parent().find('.form-message-wrapper').show();
            } else {
                $(this).removeClass('is-error');
                $(this).parent().find('.form-message-wrapper').hide();
            }
        });
        if ($('input[name="contactType"]:checked').length===0) {
            $('input[name="contactType"]').closest('.form-fieldset').addClass('is-error').find('.form-message-wrapper').show();
        } else {
            $('input[name="contactType"]').closest('.form-fieldset').removeClass('is-error').find('.form-message-wrapper').hide();
        }
        if ($('select').val()===null) {
            $('select').addClass('is-error').parent().find('.form-message-wrapper').show();
        } else {
            $('select').addClass('is-error').parent().find('.form-message-wrapper').hide();
        }
    }
});
