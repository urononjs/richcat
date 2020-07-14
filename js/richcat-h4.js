
$(document).ready(function() {

    let counter = 60;
    for (let i = 0; i <= 60 ; i++) {
        setTimeout(function () {
            $('.time-count').text(counter--);
        },1000 * i);
    }

    $('.try_again').click(function(){
        setTimeout(function(){
            $( ".again-wrap" ).removeClass( "d-none" );
        }, 200);
    });

    $('.again_btn').click(function(){
        $(".again-wrap").addClass("d-none");
    });

    $('.show_form').click(function(){
        runConfetti();
        setTimeout(function(){
            $(".form-wrap").addClass("add-d-flex");
            $(".form-wrap").css("opacity", "1");
        }, 1000);

        setTimeout(function () {
            $(".form-main-box").addClass('modal-open');
        },1400);
    })

});

