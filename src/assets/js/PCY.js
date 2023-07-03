/************************        Payments      **************************/
$(document).ready(function() {
    //Add Payment Method
    $('body').on('click', '#paymentTable .addNewRows', function() {
        var newRow = $(this).closest("table").find(".new-row");
        var newRowcontent = newRow.clone().removeClass("new-row");
        newRow.before(newRowcontent);
    });
    //Delete Payment Method
    $('body').on('click', '#paymentTable .deleteRows', function() {
        if($(this).closest("tr.payment").find("td.amount input").val() >= 1){

            if (confirm("Are you sure you want to delete a payment line?")) {
                $(this).closest("tr.payment").remove();
                var totalPaid = 0;
                $('.ex-value').each(function() {
                    totalPaid += Number($(this).text());
                });
                var totalOrder      = $("#total-order").text();

                $("#remaining").text(Number(totalOrder) - totalPaid);

                $("#totalPaid").text(totalPaid);

            }
            return false;
        }else {
            $(this).parent().parent("tr.payment").remove();

        }
    });

    //Hide un used TDs in Payment table after Select Change
    $('body').on('change','select.payment-type', function() {
        var value   = $(this).val();
        var row     = $(this).closest("tr");
        //hideOtherPaymentTypes(value, row)
        row.removeClass('cash plasticCard check');
        row.addClass(value);
    });

    //Hide un used TDs in Payment table in page load
    //arrangePaymentTypes();



// Detect Card Type Read More on https://en.wikipedia.org/wiki/Payment_card_number
    $("#paymentTable").on('change', 'input[name=\'cardNumber\']', function() {
        var CardNumber = $(this).val();
        var Cardtype = detectCardType(Number(CardNumber));
        $(this).siblings("input[name='cardType']").attr("value", Cardtype);
        console.log($(this).siblings("input[name='cardType']"));
    });


    /*function hideOtherPaymentTypes(value, row){
        $(row).find(".check-td, .card-td, .cash-td").hide();
        $(row).find("."+ value +"-td").show();
    }

    function arrangePaymentTypes(){
        $("#paymentTable .payment").each(function(index, value){
            var value   = $(this).val();
            var row     = $(this).closest("tr");
            hideOtherPaymentTypes(value, row)
        });
    }*/


    $('body').on('change','select.currency-select', function() {
        var currencyName    = $(this).val();
        var currencyRate    = Number($('option:selected', this).attr('data-ex-rate'));
        var amount          = Number($(this).parent().siblings("td.amount").children("input").val()) * currencyRate;
        var totalOrder      = Number($("#total-order").text());
        var remaining       = Number($("#remaining").text());
        var totalPaid      = Number($("#totalPaid").text());


        $(this).parent().siblings(".currency-td").children(".currency-name").text(currencyName);
        $(this).parent().siblings(".currency-td").children(".currency-rate").text(currencyRate);
        $(this).parent().siblings().last().children(".ex-value").text(amount);

        $('.ex-value').each(function() {
            totalPaid = Number($(this).text()) + totalPaid;
        });

        $("#remaining").text(totalOrder - totalPaid);
        $("#totalPaid").text(totalPaid);
    });

    $('body').on('change','td.amount input', function() {
        var currencyRate    = Number($(this).parent().siblings().children(" td .currency-rate").text());
        var amount          = Number($(this).val()) * currencyRate;
        var totalOrder      = Number($("#total-order").text());
        var remaining       = Number($("#remaining").text());
        var totalPaid       = 0;

        $(this).parent().siblings().last().children(".ex-value").text(amount);



        $('.ex-value').each(function() {
            totalPaid = Number($(this).text()) + totalPaid;
        });

        $("#remaining").text(totalOrder - totalPaid);
        $("#totalPaid").text(totalPaid);
    });

    /*$('body').on('change','', function() {

        $('.amount input').mask('#.##0,00', {reverse: true});
        $('.card-td input[name="cardNumber"]').mask('0000-0000-0000-0000');
        $('.card-td input[type="month"]').mask("00/00", {placeholder: "__/__"});
    });*/
});

function detectCardType(number) {
    var re = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/

    }
    for(var key in re) {
        if(re[key].test(number)) {
            return key
        }
    }
}

// Simple Payment
$(document).ready(function() {
    $(document).on('keyup', '#amount-tendered', function () {
        var paid        = parseFloat($(this).val());
        var due         = $('#balance-due').text();
        //var remaining   = $('#balance-remaining').text();

        if (paid == undefined) {
            paid = 0;
        }
        if (isNaN(due)) {
            due = 0;
        }

        if (!isNaN(due)) {
            $('#button-credit').click();
            var remaining = due - paid ;

            if (remaining > 0) {
                $('.info-box.remaining').removeClass("bg-light-green").addClass("bg-pink");
            }
            else{
                $('.info-box.remaining').addClass("bg-light-green").removeClass("bg-pink");
            }

            $('#balance-remaining').text(remaining);
        }
    });
});






$(document).ready(function() {
    $("#branch-selector").select2({
        width: "100%",
        allowClear: true,
        containerCssClass: "branch-selector-selection",
        dropdownCssClass: "branch-selector-dropdown",
        placeholder: function(){
            $(this).data('placeholder');
        },
    });

});
/************************        Cart Filler Page      **************************/
$(document).ready(function() {

});
