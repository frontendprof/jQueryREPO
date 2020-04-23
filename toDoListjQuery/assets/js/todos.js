

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");

});


$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(1500,function(){
        $(this.remove());
    });

    e.stopPropagation();
});

$("input").keypress(function(e){
    if(e.which===13){
        let toDo=$(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> "+toDo+"</li>");
    }
})