// zippy scroll to each section
$.scrollify({
    section: ".scroll"
});

$(document).ready(function(){
    $("img.nicole").hover(function(){
        $("img.parker").css("opacity", "0.3");
        $("img.patrick").css("opacity", "0.3");
		$("img.lupita").css("opacity", "0.3");
		$("p.nicole").css("display", "block");
        }, function(){
        $("img.parker").css("opacity", "1");
        $("img.patrick").css("opacity", "1");
        $("img.lupita").css("opacity", "1");
        $("p.nicole").css("display", "none");
    });
    $("img.parker").hover(function(){
        $("img.nicole").css("opacity", "0.3");
        $("img.patrick").css("opacity", "0.3");
		$("img.lupita").css("opacity", "0.3");
		$("p.parker").css("display", "block");
        }, function(){
        $("img.nicole").css("opacity", "1");
        $("img.patrick").css("opacity", "1");
        $("img.lupita").css("opacity", "1");
        $("p.parker").css("display", "none");
    });
	$("img.patrick").hover(function(){
        $("img.nicole").css("opacity", "0.3");
        $("img.parker").css("opacity", "0.3");
		$("img.lupita").css("opacity", "0.3");
		$("p.patrick").css("display", "block");
        }, function(){
        $("img.nicole").css("opacity", "1");
        $("img.parker").css("opacity", "1");
        $("img.lupita").css("opacity", "1");
        $("p.patrick").css("display", "none");
    });
	$("img.lupita").hover(function(){
        $("img.parker").css("opacity", "0.3");
        $("img.patrick").css("opacity", "0.3");
		$("img.nicole").css("opacity", "0.3");
		$("p.lupita").css("display", "block");
        }, function(){
        $("img.parker").css("opacity", "1");
        $("img.patrick").css("opacity", "1");
        $("img.nicole").css("opacity", "1");
        $("p.lupita").css("display", "none");
    });
});
