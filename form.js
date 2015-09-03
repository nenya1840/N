$(document).ready(function() {

    $('#quote-given-yes').click(function() {
        $("#quoteGivenEnter").fadeIn();
    });

    $('#quote-given-no').parent().click(function() {
        $("#quoteGivenEnter").fadeOut();
        $("#quoteGivenEnter").val('');
    });

    $('.submit').click(function() {
        validateForm();
        $('input[required=""]').on("input", function() {
            validateForm();
        });
        $('.form-choice-selector[required=""]').on('click', function() {
            validateForm();
        });
        $('select').on("change", function() {
            validateForm();
        });
        return false;
    });

    function validateForm() {
        console.log('validate');
        $('form').addClass('is-validated');
        var inputs = $('input[required=""]');
        inputs.each(function(index) {
            if ($(this).val() === "") {
                $(this).addClass('is-error');
                $(this).parent().find('.form-message-wrapper').first().show();
            } else {
                if ($(this).attr('type') === 'email') {
                    $(this).removeClass('is-error');
                    $(this).parent().find('.form-message-wrapper').first().hide();
                    if ($("input[name='email']:valid").length === 0) {
                        $("input[name='email']").addClass('is-error-pattern');
                        $("#businessTeamForm-email-error-invalid").parent().show();
                    } else {
                        $("input[name='email']").removeClass('is-error-pattern');
                        $("#businessTeamForm-email-error-invalid").parent().hide();
                    }
                } else {
                    $(this).removeClass('is-error');
                    $(this).parent().find('.form-message-wrapper').first().hide();
                }
            }
        });

        if ($('input[name="contactType"]:checked').length === 0) {
            $('input[name="contactType"]').closest('.form-fieldset').addClass('is-error').find('.form-message-wrapper').show();
        } else {
            $('input[name="contactType"]').closest('.form-fieldset').removeClass('is-error').find('.form-message-wrapper').hide();
        }
        if ($('select').val() === null) {
            $('select').addClass('is-error').parent().find('.form-message-wrapper').show();
        } else {
            $('select').removeClass('is-error').parent().find('.form-message-wrapper').hide();
        }
    }
});
