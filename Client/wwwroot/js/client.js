$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();

        toast.pause();
        toast.currentTime = 0;
        // play audio
        toast.play();

        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));

        $('#toast').toast({ autohide: false }).toast('show');
    });

    $(document).on('keyup', function (e) {

        if (e.key === "Escape") {
            $("#toast").toast('hide');
        }
    });
});
