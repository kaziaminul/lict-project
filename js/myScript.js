$(document).ready(function(){
	$("#right .text").animate({
		right: 0
	},1000);
	$("#docright .doctext").animate({
		right: 0
	},1000);
	$(".logbutton").click(function(){
		$("#form form").css("display", "block");
			$("#form form").animate({
			right: 0
		},1000);
			$(".login").css("display", "none");
			return false;
	});

	$(".signin").click(function(){
		window.location.href="doctors.html";
		return false;
	});

	$("#record").click(function(){
		$(".modal").css("display","block");
		return false;
	});

// When the user clicks anywhere outside of the modal, close it
$(window).click(function(e) {
  if (e.target.className == "modal") {
    $(".modal").css("display","none");
  }
});
});