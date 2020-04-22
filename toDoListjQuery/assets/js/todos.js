

$('li').click(function(){


    if($(this).css('color') === "rgb(0, 0, 0)"){
        $(this).css({
            color:"white",
            textDecoration:"none"
        });
    }else{
        $(this).css({
            color:"black",
            textDecoration:"line-through"
        });
    }
    


});