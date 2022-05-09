$('.container').mouseenter(function(){
    $( this ).animate({left: '0px'}, 500);
});
$('.container').mouseleave(function(){
    $(this).animate({left: '-250px'}, 500);
})
$('h3').click((e) => {
    $(e.target).parent().siblings().children().next().css('display', 'none')
    $(e.target).siblings().css('display', 'block');
})