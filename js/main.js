document.addEventListener("DOMContentLoaded", function() {

(function($) {
    "use strict";


    /*======== Doucument Ready Function =========*/
    jQuery(document).ready(function() {
        //CACHE JQUERY OBJECTS
        $("#status").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
        $("body").delay(200).css({
            "overflow": "visible"
        });


        /* Init Wow Js */
        new WOW().init();

    });

    //search categories
    $('a[href="#search1"]').on('click', function(event) {
        event.preventDefault();
        $('#search1').addClass('open');
        $('#search1 > form > input[type="search"]').focus();
    });
    $('#search1, #search1 button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    jQuery(document).ready(() => {
        jQuery('.js-video-button').modalVideo({
            channel: 'vimeo'
        });
    });

    // Range sliders activation
    $(".range-slider-ui").each(function() {
        var minRangeValue = $(this).attr('data-min');
        var maxRangeValue = $(this).attr('data-max');
        var minName = $(this).attr('data-min-name');
        var maxName = $(this).attr('data-max-name');
        var unit = $(this).attr('data-unit');
        $(this).slider({
            range: true,
            min: minRangeValue,
            max: maxRangeValue,
            values: [minRangeValue, maxRangeValue],
            slide: function(event, ui) {
                event = event;
                var currentMin = parseInt(ui.values[0]);
                var currentMax = parseInt(ui.values[1]);
                $(this).children(".min-value").text(currentMin + " " + unit);
                $(this).children(".max-value").text(currentMax + " " + unit);
                $(this).children(".current-min").val(currentMin);
                $(this).children(".current-max").val(currentMax);
            }
        });
    });


    /* ------------------------------------------------------------------------ */
    /* BACK TO TOP
    /* ------------------------------------------------------------------------ */
    $(document).on('click', '#back-to-top, .back-to-top', () => {
        $('html, body').animate({
            scrollTop: 0
        }, '500');
        return false;
    });
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 500) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });

    // Slick SLider
    $('.slider-store').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        direction: 'vertical',
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        asNavFor: '.slider-thumbs'
    });


    $('.slider-thumbs').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-store',
        dots: false,
        arrows: false,
        autoplay: true,
        direction: 'vertical',
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
            }
        }]

    });


    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        rows: 0,
        autoplay: true,
        speed: 2000,
        loop: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }]
    });

    $('.review-slider1').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        rows: 0,
        autoplay: true,
        speed: 5000,
        loop: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.about-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        rows: 0,
        speed: 4000,
        loop: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                arrows: false
            }
        }]
    });

    $('.testi-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        rows: 0,
        speed: 4000,
        loop: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }]
    });

    $('.side-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        rows: 0,
        dots: false,
        autoplay: true,
        speed: 4000,
        loop: true,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 811,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.attract-slider').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 2000,
        rows: 0,
        autoplay: true,
        draggable: false,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });


    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 1000,
        rows: 0,
        loop: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.item-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        loop: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }]
    });

    $('.item-slider1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        loop: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }]
    });

    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        cursor: false,
        loop: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }]
    });


    // Slick Testimonial Slider
    $('.sl-testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        Speed: 8000,
        rows: 0,
        infinite: true,
        arrows: false,
        dots: false,
        adaptiveHeight: true
    });

    $('.partner-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        loop: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }]
    });


    $("#contactform2").validate({
        submitHandler: function() {

            $.ajax({
                url: 'mail/contact.php',
                type: 'POST',
                data: {
                    fullname: $('input[name="full_name"]').val(),
                    company: $('input[name="company_name"]').val(),
                    email: $('input[name="email"]').val(),
                    phone: $('input[name="phone"]').val(),
                    comments: $('textarea[name="comments"]').val(),
                },
                success: function(result) {
                    $('#contactform-error-msg').html(result);
                    $("#contactform2")[0].reset();
                }
            });

        }
    });


    /*-----------------------------------------------------------------------------------*/
    /*  COUNTDOWN
    /*-----------------------------------------------------------------------------------*/

    $(document).ready(() => {
        loopcounter('coming-counter');
    });

    /*-----------------------------------------------------------------------------------*/
    /*  COUNTER UP
    /*-----------------------------------------------------------------------------------*/
    $('.value').counterUp({
        delay: 50,
        time: 1000
    });
    /*-----------------------------------------------------------------------------------*/
    /*  MASONRY
    /*-----------------------------------------------------------------------------------*/

    $('.blog-main').masonry({
        // options
        itemSelector: '.mansonry-item',
    });

    $('.trend-box1').masonry({
        // options
        itemSelector: '.mansonry-item1',
    });

    // Nice Select JS
    $('.niceSelect').niceSelect();

    $('a[href="#search1"]').on('click', function(event) {
        event.preventDefault();
        $('#search1').addClass('open');
        $('#search1 > form > input[type="search"]').focus();
    });
    $('#search1, #search1 button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    });

})(jQuery);


jQuery(window).on('resize load', () => {
    resize_eb_slider();
}).resize();
/**
 * Resize slider
 */
function resize_eb_slider() {
    let bodyheight = jQuery(this).height();
    if (jQuery(window).width() > 1400) {
        bodyheight *= 0.90;
        jQuery('.slider').css('height', `${bodyheight}px`);
    }
}
window.onload = function() {
    var locationSelect = document.getElementById('locationSelect');
    locationSelect.onchange = function() {
        var selectedOption = locationSelect.value;
        if (selectedOption === '2') {
            window.location.href = 'Lumbini.html';
        } else if (selectedOption === '3') {
            window.location.href = 'Gandaki.html';
        }
    };
};
document.addEventListener("DOMContentLoaded", function() {
    var locationSelect = document.getElementById('locationSelect');
    var searchBtn = document.getElementById('searchBtn');

    var links = document.querySelectorAll('.job-btn');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!searchBtn.clicked) {
                event.preventDefault(); // Prevent the default behavior of the link if search button is not clicked
                alert('Please click the Search button first.');
            }
        });
    });

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the search button
        var selectedOption = locationSelect.value;
        if (selectedOption === '2') {
            window.location.href = 'lumbini.html';
        } else if (selectedOption === '3') {
            window.location.href = 'gandaki.html';
        } else {
            alert('Please select a location.');
        }
        searchBtn.clicked = true; // Mark the search button as clicked
    });
});

// Function to submit the form and clear old data
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch form values
    var fullName = document.getElementById("fullname_input").value;
    var phone = document.getElementById("phone_input").value;
    var businessName = document.getElementById("business_name_input").value;
    var jobPost = document.getElementById("job_post_input").value;
    var employeesRequired = document.getElementById("employees_required_input").value;
    var salaryRange = document.getElementById("salary_range_input").value;
    var timeDuration = document.getElementById("time_duration_input").value;
    var requirements = document.getElementById("requirements_input").value;

    // Set form values to hidden inputs
    document.getElementById("fullname").value = fullName;
    document.getElementById("phone").value = phone;
    document.getElementById("business_name").value = businessName;
    document.getElementById("job_post").value = jobPost;
    document.getElementById("employees_required").value = employeesRequired;
    document.getElementById("salary_range").value = salaryRange;
    document.getElementById("time_duration").value = timeDuration;
    document.getElementById("requirements").value = requirements;

    // Clear form fields after submission
    document.getElementById("fullname_input").value = "";
    document.getElementById("phone_input").value = "";
    document.getElementById("business_name_input").value = "";
    document.getElementById("job_post_input").value = "";
    document.getElementById("employees_required_input").value = "";
    document.getElementById("salary_range_input").value = "";
    document.getElementById("time_duration_input").value = "";
    document.getElementById("requirements_input").value = "";

    // Submit the form
    document.getElementById("contactform2").submit();
}
});