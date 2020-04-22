

$('li').click(function(){
    $(this).toggleClass("completed");

});


$("span").click(function(e){
    $(this).parent().fadeOut(1500,function(){
        $(this.remove());
    });

    e.stopPropagation();
});