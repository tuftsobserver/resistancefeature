// zippy scroll to each section
$.scrollify({
    section: ".scroll"
});

$(document).ready(function(){

    $('.img').mouseover(function(){
        var name = $(this).attr('class');
        $('.img').removeClass('active');
        $(this).addClass('active');
        name = name.replace('img ', '');
        var quote = $('.line.' + name);
        $('.line.active').removeClass('active');
        quote.addClass('active');
    })
});
