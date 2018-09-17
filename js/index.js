// index leftmenu 切换

$(function(){
	$('#headnav li').click(function(){
		var _id = $(this).index();

		$(this).addClass('current').siblings().removeClass('current');

		$('#leftmenu').find('div').eq(_id).css('display','block').siblings().css('display','none');
	});

	$('#link_2').click(function(){
		if($('#leftmenu').is(':visible') == false ){
			$('#leftmenu').css('display','block');
			$(this).children('a').text('隐藏菜单').css('backgroundPosition','0 -150px');
			$('body').addClass('showleftmenu').removeClass('hideleftmenu');
		}
		else {
			$('#leftmenu').css('display','none');
			$(this).children('a').text('显示菜单').css('backgroundPosition','0 -220px');
			$('body').addClass('hideleftmenu').removeClass('showleftmenu')
		}
		
	});

	var moment = true;

	$('#leftmenu dl dt').click(function(){
		$(this).siblings('dd').slideToggle(300);
		if(moment == true) {
			$(this).css('background-position','right -40px');
			moment = false;
		}
		else {
			$(this).css('backgroundPosition','right 12px');
			moment = true;
		}
	});

	//左侧菜单切换
	$('#leftmenu dl dd ul li a').click(function(){
	    var _link = $(this).attr('_link');

	    //alert(_link);
	    $('#main').attr('src', _link);
	    $(this).addClass('current-menuleft').parent().siblings().children().removeClass('current-menuleft');
	    $(this).parents('dl').siblings().find('dd ul li a').removeClass('current-menuleft');
	});
});


































