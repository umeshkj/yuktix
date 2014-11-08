$(".submenu-content a").click(function() {
	$(".submenu-content a").removeClass("active");
	$(".submenu-content a").find("p").removeClass("submenu-selected");
	$(this).addClass("active");
	$(this).find("p").addClass("submenu-selected");
});

$(".main-menu li,.template-header li").click(function(){
	$(".main-menu li,.template-header li").removeClass("selected");
	$(this).addClass("selected");
});
$(".dropdown").click(function(){
	$(this).children(".menu-dropdown").toggle();
});