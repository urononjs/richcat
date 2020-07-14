
$(document).ready(function() {

    let counterPeople = 60;

    for (let i = 0; i <= 60 ; i++) {
        setTimeout(function () {
            $('.time-count').text(counterPeople--);
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
            alert("show_form!!!");
        }, 2000);
    })

});

