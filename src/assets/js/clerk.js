

// Forms and Labels
$(document).ready(function () {

    $('select').each(
        function () {
            if ($(this).val() === '') {
                $(this).removeClass('active');
                $(this).siblings('label').removeClass('active');
            } else {
                $(this).addClass('active');
                $(this).siblings('label').addClass('active');
            }
        }
    );

    $('select').change(
        function () {
            if ($(this).val() === '') {
                $(this).removeClass('active');
                $(this).siblings('label').removeClass('active');
            } else {
                $(this).addClass('active');
                $(this).siblings('label').addClass('active');
            }
        }
    );

    $('.form-control').focus(function () {
        $(this).addClass('active');
        $(this).siblings('label').addClass('active');
    });

    $('.form-control').blur(function () {
        var val = $(this).val().trim();
        if (val.length) {
            $(this).addClass('active');
            $(this).siblings('label').addClass('active');
        } else {
            $(this).removeClass('active');
            $(this).siblings('label').removeClass('active');
        }
    });

    $('input.form-control').each(
        function () {
            var val = $(this).val().trim();
            if (val.length) {
                $(this).addClass('active');
                $(this).siblings('label').addClass('active');
            }
        });

    $('input.form-control').change(
        function () {
            var val = $(this).val().trim();
            if (val.length) {
                $(this).addClass('active');
                $(this).siblings('label').addClass('active');
            } else {
                $(this).removeClass('active');
                $(this).siblings('label').removeClass('active');
            }
        });

    $('input:checkbox').each(
        function () {
            if ($(this).attr('checked')) {
                $(this).parent('label').addClass('active');
            }
        });

    $('input:checkbox').change(function () {
        if ($(this).is(':checked') == true) {
            $(this).parent('label').addClass('active');

        } else {
            $(this).parent('label').removeClass('active');

        }

    });
});


// Clinic Links
$(document).ready(function () {
    $('.clinic-link').click(function () {
        $(this).removeClass('inactive');
        $(this).siblings().addClass('inactive');
    });

    $('.clinic-link.clinic-link-all').click(function () {
        $(this).removeClass('inactive');
        $(this).siblings().removeClass('inactive');
        $('.booking-block').fadeIn(500);
    });



    $('.clinic-link.cardiology').click(function () {
        $('.booking-block.cardiology').fadeIn(500);
        $('.booking-block.cardiology').siblings().hide();
    });

    $('.clinic-link.dental').click(function () {
        $('.booking-block.dental').fadeIn(500);
        $('.booking-block.dental').siblings().hide();
    });

    $('.clinic-link.neurology').click(function () {
        $('.booking-block.neurology').fadeIn(500);
        $('.booking-block.neurology').siblings().hide();
    });

    $(".doctor-block .slot-data.full-slot").click(function () {
        $(this).addClass("active");
        $(this).parent(".slot").siblings().children(".slot-data.full-slot").removeClass("active");
        $(this).parents(".doctor-block").siblings().children(".doctor-slots").children(".slot").children(".slot-data.full-slot").removeClass("active");
    });

});