$(document).ready(function () {

    function start_counter() {
        let counter = 60;
        $('.time-count').text(counter--);
        let interval = setInterval(function () {
            $('.time-count').text(counter--);
            if (counter < 0) {
                $(".again-wrap").removeClass("d-none");
                clearInterval(interval);
            }
        }, 1000);
    }

    start_counter();
    $('.try_again').click(function () {
        setTimeout(function () {
            $(".again-wrap").removeClass("d-none");
        }, 200);
    });

    $('.again_btn').click(function () {
        $(".again-wrap").addClass("d-none");
        if (~~$('.time-count').text() == 0) {
            start_counter();
        }
    });

    $('.show_form').click(function () {
        runConfetti();
        $(".again-wrap").remove();

        setTimeout(function () {
            $(".form-wrap").addClass("add-d-flex");
            $(".form-wrap").css("opacity", "1");
        }, 1000);

        setTimeout(function () {
            $(".form-main-box").addClass('modal-open');
        }, 1400);
    })

});

