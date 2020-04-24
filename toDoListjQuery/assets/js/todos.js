

$("ul").on("click","li", function(){
    $(this).toggleClass("completed");

});


$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(800,function(){
        $(this).remove();
    });

    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        let toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" +toDoText+"</li>");
    }
});

$('.fa-plus').click(function(){
    $("input").fadeToggle(800);
})