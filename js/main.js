$(window).on('resize', function() {
    if($(window).width() < 765) {
        $('.partnerLabel').each(function(){
        	$(this).removeClass("leftie");
        	$(this).addClass("text-center");
        });
    }else{
        $(".partnerLabel").each(function(){
        	$(this).removeClass("text-center");
        })
        $("#gabrieleDiv").addClass("leftie")
    }
    console.log($(window).width());
})
$(window).on('load', function() {
    if($(window).width() < 765) {
        $('.partnerLabel').each(function(){
        	$(this).removeClass("leftie");
        	$(this).addClass("text-center");
        });
    }else{
        $(".partnerLabel").each(function(){
        	$(this).removeClass("text-center");
        })
        $("#gabrieleDiv").addClass("leftie")
    }
    console.log($(window).width());
})