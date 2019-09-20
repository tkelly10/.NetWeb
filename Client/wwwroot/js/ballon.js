$(function () {

    // variables
    let ani = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello", "heartBeat"];
    let min = 0;
    let max = 9;
    let rand = Math.floor(Math.random() * (+max - +min)) + +min;

    //format for pick a date
    $('#birthday').pickadate({ format: 'mmmm, d' });


    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });


    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated zoomInUp') :
            $('#' + this.id + 'Img').addClass('animated zoomOutDown');
    });
   
    //check all checkboxes and animate the balloons 
    $('#checkAll').change(function (e) {
       

        if (e.target.checked) {
            //loop through all checkboxes
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
                $('#' + this.id + 'Img').css('visibility', 'visible')

                //animate balloon in
                $(this).is(':checked') ?
                   
                    $('#' + this.id + 'Img').removeClass().addClass('animated zoomInUp') :
                    $('#' + this.id + 'Img').addClass('animated zoomOutDown')
            });
        } else {
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
                $('#' + this.id + 'Img').css('visibility', 'visible')

              //animate balloon out
                $(this).is(':checked') ?
                   
                    $('#' + this.id + 'Img').removeClass().addClass('animated zoomInUp') :
                    $('#' + this.id + 'Img').addClass('animated zoomOutDown')
            });
        }
    });

    //when submit button is clicked 
    $('#submit').on('click', function (e) {
        e.preventDefault();
        //tally all the checked checkboxes 
        let checked = document.querySelectorAll('.form-check-input:checked').length;
        //if the total is zero when the submit button is fired show the toast
        if (checked === 0) {

            $('#toast').toast({ autohide: false }).toast('show');
        }

    });

    // when the mouse enteres the lable for each balloon change the color of the h1 to the correct color
    $('.form-check-label').mouseenter(function () {


        $('#title').css('color', this.id);

    });

    // when the mose leaves the lable change the color back to original 
    $('.form-check-label').mouseleave(function () {


        $('#title').css('color', '');

    });

    // have the toast closeable by pressing escape
    $(document).on('keyup', function (e) {

        if (e.key === "Escape") {
            $("#toast").toast('hide');
        }
    });

    // when the page loads animate the h1 with a random animation 
    $(document).ready(function () {
        $('#title').removeClass().addClass('animated '+ ani[rand]);
        
    });


});