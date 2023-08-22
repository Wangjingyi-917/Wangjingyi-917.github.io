$(function () {
    $('#navfold').mouseover(function () {
        $(this).children('ul').show();
    });
    $('#navfold').mouseout(function () {
        $(this).children('ul').hide();
    });


    //监听滚动条事件
 
	$(window).scroll(function () {
		var topp = $(document).scrollTop();
		if (topp >= 100) {
			$(".fixed").css("top", "-132px").css("transition", ".8s");
		} else {
			$(".fixed").css("top", "0").css("transition", ".8s");
		}
 
	});

})





