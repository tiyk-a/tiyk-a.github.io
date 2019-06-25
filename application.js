// if(typeof jQuery != "undefined"){ //jQueryの読み込み確認
//     $(function(){
//         alert('jQuery is ready.')
//     });
// }

$(document).ready(function(){
	$('#first').hide().fadeIn(1000);
});

// $(document).ready(function() {
//   $('body').hide().fadeIn(2000);
// });

// CLICK AND JUMP
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// CLICK AND JUMP

$(document).on("mouseover", "#ngm", function(){
	$('#wyo-details, #lbot-details').css('display', 'none');
	$('#ngm-details').css("display", "block");
});

$(document).on("mouseover", "#wyo", function(){
	$('#ngm-details, #lbot-details').css('display', 'none');
	$('#wyo-details').css("display", "block");
});

$(document).on("mouseover", "#lbot", function(){
	$('#wyo-details, #ngm-details').css('display', 'none');
	$('#lbot-details').css("display", "block");
});
