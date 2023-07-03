

/************************        menu toggle      **************************/
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.left-col,.right-content').toggleClass('active');
        if ($('.left-col').hasClass('active')) {
            $('.left-col .left-nav .left-block a span:nth-child(2)').fadeOut(300);
            $('.left-col .left-nav .left-block a span:nth-child(3)').fadeOut(300);
            $('.left-main-link.active').siblings('.sub-menu').slideUp();
        } else {
            $('.left-col .left-nav .left-block a span:nth-child(2)').fadeIn(300);
            $('.left-col .left-nav .left-block a span:nth-child(3)').fadeIn(300);
            $('.left-main-link.active').siblings('.sub-menu').slideDown();
        }
    });
});

/************************        Select2      **************************/
$(document).ready(function() {
    $(".single-select").select2({
        width: "100%",
        allowClear: true,
        placeholder: function(){
            $(this).data('placeholder');
        }
    });
    $(".multi-select").select2({
        width: "100%",
        allowClear: true,
        placeholder: function(){
            $(this).data('placeholder');
        },
        multiple: true,
        dropdownAutoWidth: true,
        closeOnSelect: false,
        tags: false
    });
    $('.multi-select.itemCount').on('select2:close', function (evt) {
        var uldiv       = $(this).siblings('span.select2').find('ul');
        var oldCount    = parseInt(uldiv.find('.count').text()) || 0;
        var count       = uldiv.find('li').length - 1 + oldCount;
        var max         = $(this).data('maximum');
        var sentence    = $(this).data('sentence');
        if(count >max){
            uldiv.html("<li class='select2-selection__summary'><span class='count'>"+count+"</span> "+sentence+"</li>");
        }
    });
});


/************************        DataTable      **************************/
$(document).ready(function() {


    $('.autoDataTablized').each(function() {
        var autoTabalized = dataTablizer($(this));
        FilterDatatable(autoTabalized);
    });

    var workListMainTable = dataTablizer($('#workListMain table'));
    FilterDatatable(workListMainTable);

    var cartFillerMainTable = dataTablizer($('#cartFillerMainTable table'));
    FilterDatatable(cartFillerMainTable);

    var drugReturn = dataTablizer($('#drugReturn table'));
    FilterDatatable(drugReturn);

    var DrugCard = dataTablizer($('#DrugCard table'));
    FilterDatatable(DrugCard);

    $('#medicationProfile table').each(function() {
        var MedicationProfile = dataTablizer($(this));
        FilterDatatable(MedicationProfile);
    });


    $('#workListMain tbody').on('click', 'td.details-control', function() {
        var tr              = $(this).closest('tr');
        var dataTableRow    = workListMainTable.row(tr);

        $(this).find('.show-child i').toggleClass('fa-plus fa-minus');
        //Hide Other Rows Children
        tr.siblings('tr.shown').each(function( index ) {
            $(this).next().addClass('dnone');
            $(this).removeClass('shown');
        });

        //Check if Content is Loaded Before Load Content First Time Only
        if(dataTableRow.child() === undefined ){
            //dataTableRow.child(formatTableDetailsAjax(dataTableRow.data())).show();
            dataTableRow.child(formatTableDetails(dataTableRow.data())).show();
            tr.addClass('shown');
            tr.removeClass('selected'); //

        }else{
            //If the Content is Loaded Before Hide it and show it only
            if (tr.next().hasClass('dnone')) {
                tr.next().removeClass('dnone');
                tr.addClass('shown');
                tr.removeClass('selected');
            } else {
                tr.next().addClass('dnone');
                tr.removeClass('shown');
            }
        }

    });

    function formatTableDetailsAjax(rowData) {
        rowData = rowData.find('a').remove();

        var div = $('<div/>')
            .addClass('loading')
            .text('Loading...');

        div.load("details-" + rowData[1] + ".html", function() {
            $(".loading").removeClass('loading');
            var orderDetailsTable = div.find("table").each(function() {
                dataTablizer($(this))
            });
            //FilterDatatable(orderDetailsTable);


        });
        //console.log("details-" + rowData[1] + ".html");
        return div;
    };

    function formatTableDetails(rowData) {
        //rowData[1] = $(rowData[1]).find('a').remove().text();
        rowData[1] = rowData[1].replace(" <a href=\"#\" target=\"_blank\" title=\"Open MRM\" class=\"\"><i class=\"fab fa-medium\"></i></a>", "");
        rowData[1] = rowData[1].replace(" <a href=\"#\" target=\"_blank\" title=\"Open MRM\" class=\"\"><i class=\"fas fa-file-medical-alt\"></i></a>", "");

        var div         = $('<div/>');
        var newChild    = $("#details-" + rowData[1] + "");
        div.append(newChild);
        var orderDetailsTable = dataTablizer(div.find("table"));
        FilterDatatable(orderDetailsTable);
        return div;
    };

});


$(document).ready(function() {
    $('body').on('click', '.selectOneRow', function() {
        $(this).toggleClass('selected');
        $(this).siblings('tr').removeClass('selected');
        if ($(this).hasClass("selected")) {
            $(this).find(".selectOneRow input[type=radio]").attr('checked', 'checked');
            // console.log("true");
        } else {
            // console.log("false");
        }
    });


});




/************************        Open Regular Calculated Dropdowns [Order Actions List, Patient Info ]     **************************/
$(document).ready(function() {
    $('body').on('click', '.openpopup', function() {
        var btn         = $(this);
        var popup       = $(this).siblings('.dropdown-menu');
        var parent      = $(this).parent('.dropdown');

        $(".openpopup").not(this).parent('.dropdown').removeClass("open");

        if(parent.hasClass("open")){
            parent.removeClass("open");
            $(".right-content").removeClass("z-index-1050");
        }else{
            popupPosition(popup,btn);
            parent.addClass("open");
            $(".right-content").addClass("z-index-1050");
        }
    });


//Close Dropdowns on scroll or click outside
    $("body *").not('.scrollable-list').on('scroll', function(e) {
        $('.dropdown').removeClass("open");
        $(".right-content").removeClass("z-index-1050");
    });

    $(window).on('resize click', function(e) {
        if ($(e.target).closest('.openpopup').length === 0 /*&& $(e.target).closest('.actions-list.dropdown-menu').length === 0*/) {
            $('.dropdown').removeClass("open");
            $(".right-content").removeClass("z-index-1050");
        }
    });
});







/************************        Common      **************************/
// Row inline Add
$(document).ready(function () {
    $(".addNewRow").click(function () {
        var target          = $(this).data("target");
        var table           = $(target).find('table');
        var newRow          = table.find(".new-row");
        var newRowcontent   = newRow.clone().removeClass("new-row").addClass("notsaved");
        var dataTableCheck  = $.fn.DataTable.isDataTable(table);

        if(dataTableCheck){
            table.dataTable().fnDestroy();
        }

        newRow.closest("tbody").prepend(newRowcontent);
        reSelect2(newRowcontent.find("select[class*='chosen-']"));

        if(dataTableCheck){
            dataTablizer(table);
            FilterDatatable(table);
        }

    });


    $(".addNewRows").click(function () {
        var newRow = $(this).closest(".sub-title").siblings().find(".newrow");
        var newRowcontent = newRow.clone().removeClass("newrow").addClass("notsaved");
        newRow.closest("tbody").prepend(newRowcontent);
        reSelect2(newRowcontent.find("select[class*='chosen-']"));

    });
});
// Call & Recall Select2
function reSelect2(element) {
    //$(element).select2("destroy");

    //Manual Select2 Destroy as it's function didn't work
    $(element).removeClass("select2-hidden-accessible").removeAttr("data-select2-id tabindex aria-hidden").siblings(".select2-container").remove();

    if (element.prop("multiple")) {
        $(element).select2({
            width: "100%",
            multiple: true,
            dropdownAutoWidth: true,
            allowClear: true,
            closeOnSelect: false,
            tags: false
        });
    } else {
        $(element).select2({
            width: "100%"
        });
    }
}



$(document).ready(function() {
    $('body').on('click','.collapser', function() {
        $(this).next().collapse('toggle');
        $(this).find("i").toggleClass('fa-chevron-down fa-chevron-up');
    });

    $('body').on('click','.multi-valued .addValue', function() {
        var multiValued         = $(this).closest('.multi-valued');
        addMultiValuedValue(multiValued)
    });
    $('body').on('keypress','.multi-valued .newValue', function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13' /*|| keycode == '44' */){
            var multiValued         = $(this).closest('.multi-valued');
            addMultiValuedValue(multiValued)
        }
    });

    $('body').on('click','.multi-valued .item .delete', function() {
        var multiValued         = $(this).closest('.multi-valued')

        $(this).closest('.item').remove();
        multiValuedCounter(multiValued);
    });

});

function addMultiValuedValue(multiValued){
    var newValueInput       = multiValued.find('.newValue');
    var newValue            = $.trim(newValueInput.val());


    if(newValue === ''){

    }else{
        var newValueFormated    = "<li class=\"item\"><span class=\"content\">"+ newValue +"</span><span class=\"fa fa-trash fa-fw pointer delete\"></span></li>";
        multiValued.find('.items ul').append(newValueFormated);
        newValueInput.val('');
        multiValuedCounter(multiValued);
    }

}

function multiValuedCounter(multiValued){
    var components = [];

    multiValued.find('.items .item').each(function() {
        var content = $(this).find('.content').text();
        components.push(content);
    });

    console.log(components);

    var length = components.length;
    if(length){
        multiValued.find('.items-header').show();
        multiValued.find('.count').html(length);
    }else{
        multiValued.find('.items-body').collapse("hide");
        multiValued.find('.items-header').find("i").removeClass('fa-chevron-up').addClass('fa-chevron-down');
        multiValued.find('.items-header').hide();

    }


}










/****************************************************** User/Doctor Profile Image ************************************/

$(document).ready(function () {

    var doctorsInquiryTable = dataTablizer($('#doctors-inquiry table'));
    FilterDatatable(doctorsInquiryTable);
});

function readURL(input, imgControlName) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(imgControlName).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imag").change(function () {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview";
    readURL(this, imgControlName);
    $('.preview1').addClass('it');
    $('.btn-rmv1').addClass('rmv');
});
$("#imag2").change(function () {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview2";
    readURL(this, imgControlName);
    $('.preview2').addClass('it');
    $('.btn-rmv2').addClass('rmv');
});
$("#removeImage1").click(function (e) {
    e.preventDefault();
    $("#imag").val("");
    $("#ImgPreview").attr("src", "assets/images/default-user.png");
    $('.preview1').removeClass('it');
    $('.btn-rmv1').removeClass('rmv');
});
$("#removeImage2").click(function (e) {
    e.preventDefault();
    $("#imag2").val("");
    $("#ImgPreview2").attr("src", "");
    $('.preview2').removeClass('it');
    $('.btn-rmv2').removeClass('rmv');
});
(function ($) {

    // Open Lightbox
    $('.ZoomImg').on('click', function (e) {
        e.preventDefault();
        var image = $(this).siblings("#ImgPreview").attr('src');
        $('html').addClass('no-scroll');
        $('body').append('<div class="lightbox-opened"><img src="' + image + '"><span class="closeZoom">x</span></div>');
    });

    // Close Lightbox

    $("body").on('click', '.lightbox-opened', function () {
        $('html').removeClass('no-scroll');
        $('.lightbox-opened').remove();
    });

})(jQuery);








$(document).ready(function() {

});