$('#dropbtn').click(function() {
    $('#box').toggleClass('open');
    var box = $('.box')
    if ($('.box').height() != 0) {
        $('.box').height(0)
    } else {
        $('.box').height(1000)
    }
});