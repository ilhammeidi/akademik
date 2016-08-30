$(document).ready(function () {
    // Floating Form - mini/maxi mize
    $('.floating-form .header').click(function () {
        $(this).parents('.floating-form').children(".form, .btn-area").toggle();
        $(this).parents('.floating-form').toggleClass('collapsed');
        $(this).parents('.floating-form').removeClass("popup");
        $(this).find('i.minus.icon').toggleClass('square');
        $('.popup-dim').fadeOut('fast');
    });

    //Floating Form - Popup mode
    $('.floating-form .option a.expand').click(function () {
        event.stopPropagation();
        $(this).parents('.floating-form').toggleClass("popup");
        $('.popup-dim').fadeToggle('fast');
        $(this).parents('.floating-form').children(".form, .btn-area").show();
        $(this).find('i.expand.icon').toggleClass('angle').toggleClass('down');
    });

    //Floating Form - Popup close
    $('.floating-form .option a.remove').click(function () {
        event.stopPropagation();
        $(this).parents('.floating-form').hide();
        $('.popup-dim').hide();
        $(this).parents('.floating-form').removeClass("popup");
    });

    //Tooltip
    $('.tooltiped').popup();
    $('.tooltiped-input').popup({
        on: 'focus'
    });
    
    //Dropdown
    $('.ui.dropdown').dropdown();

    //Date Picker single
    $('.datepicker').pikaday({
        firstDay: 1
    });

    //Notify
    $('.noty').click(function () {
        var n = noty({
            text: $(this).data('message'),
            animation: {
                open: 'animated bounceInRight', // jQuery animate function property object
                close: 'animated bounceOutRight', // jQuery animate function property object
                easing: 'swing', // easing
                speed: 500, // opening & closing animation speed
            },
            timeout: 5000,
            theme: 'relax',
            layout: 'topRight',
            type: $(this).data('type')
        });
    });

    //message
    $('.message .close')
        .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade');
        });

    //Tab menu
    $('.tabed.menu .item').tab();
    $('.tabed-parent.menu .item').tab({
        context: 'parent'
    });
    $('.tabed-secondary .item').click(function(){
        //Set active item
        $(this).parent().siblings().children('a').removeClass('cur');
        $(this).addClass('cur');
        
        //Show hide tab
        var dataTab = $(this).data('tab');
        $(this).parents('.inner').children('.tab-secondary').removeClass('active');
        $('.tab-secondary[data-tab='+dataTab+']').addClass('active');
    });

    //radio checkbox
    $('.ui.radio.checkbox').checkbox();

    //Accordion
    $('.ui.accordion').accordion();

    //Menu carousel
    $("#owl").owlCarousel({
        navigation: true,
        pagination: false,
        items: 7,
        scrollPerPage: true,
        slideSpeed: 1300,
        rewindNav: false,
        navigationText: ['&lsaquo;', '&rsaquo;'],
        afterInit: function (elem) {
            var that = this
            that.owlControls.prependTo(elem)
        }
    });

    //Table Overflow
    var tbOverWidth = $('.table-overflow').parent().width();
    $('.table-overflow').css("width", tbOverWidth);
    $('.table-overflow table').css("width", "auto")
});


// Float Form
function floatForm(id) {
    $('#' + id).show();
}

function addRow(target) {
    var elm = $('#' + target).find('tbody tr:first-child').clone();

    elm.removeClass('hide');
    $('#' + target).find('tbody').prepend(elm);
}
