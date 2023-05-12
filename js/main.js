(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

})(jQuery);



function checkSearchform() {
    var IsValid = true;
    var cstname = $('#cstname').val();
    if (cstname == '') {
        $('#cstname').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#cstname').css("border", "1px solid #a1a1a1");
    }
    var cstphone = $('#cstphone').val();
    if (cstphone == '') {
        $('#cstphone').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#cstphone').css("border", "1px solid #a1a1a1");
    }
    var cstemail = $('#cstemail').val();
    if (cstemail == '') {
        $('#cstemail').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#cstemail').css("border", "1px solid #a1a1a1");
    }
    var pickupaddress = $('#pickupaddress').val();
    if (pickupaddress == '') {
        $('#pickupaddress').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#pickupaddress').css("border", "1px solid #a1a1a1");
    }
    var dropupaddress = $('#dropupaddress').val();
    if (dropupaddress == '') {
        $('#dropupaddress').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#dropupaddress').css("border", "1px solid #a1a1a1");
    }
    var passangers = $('#passangers').val();
    if (passangers == '') {
        $('#passangers').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#passangers').css("border", "1px solid #a1a1a1");
    }
    var luggage = $('#luggage').val();
    if (luggage == '') {
        $('#luggage').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#luggage').css("border", "1px solid #a1a1a1");
    }
    var pickupdate = $('#pickupdate').val();
    if (pickupdate == '') {
        $('#pickupdate').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#pickupdate').css("border", "1px solid #a1a1a1");
    }
    var occasion = $('#occasion').val();
    if (occasion == '') {
        $('#occasion').css("border", "2px solid #FF0000");
        IsValid = false;
    }
    else {
        $('#occasion').css("border", "1px solid #a1a1a1");
    }
    if (IsValid == true) {
        //$('#loadingsearch').html('<center><img class="Iconsimg" src="/ajax-loading.gif" alt="Ajax Loading"></center>');
    }
    return IsValid;
}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode == 45 || charCode == 43) {
        return true;
    }
    if (charCode > 31 && charCode < 48 || charCode > 57)
        if (event.keyCode != 46)
            if (event.keyCode != 110)
                return false;
    return true;
} 