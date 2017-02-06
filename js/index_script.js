$(document).ready(function(){
    $('.vertically-center').delay(1400).addClass('on')
    $('.img').mouseover(function(){
        $('.interactive').addClass('theater');
        $('.quote').addClass('theater');
        var name = $(this).attr('class');
        $('.img').removeClass('active');
        $(this).addClass('active');
        name = name.replace('img ', '');
        var quote = $('.line.' + name);
        $('.line.active').removeClass('active');
        quote.addClass('active');
    })
});
