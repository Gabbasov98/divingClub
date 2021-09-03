function gallerySlider() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 9,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            390: {
                slidesPerView: 4,
                spaceBetween: 5
            },
            480: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 15
            },
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7                    ' });
    $("select").niceSelect()
    gallerySlider()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".nav").slideToggle()
    })

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();

})