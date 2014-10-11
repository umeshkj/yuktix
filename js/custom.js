$(".submenu-content a").click(function() {
	$(".submenu-content a").removeClass("active");
	$(".submenu-content a").find("p").removeClass("submenu-selected");
	$(this).addClass("active");
	$(this).find("p").addClass("submenu-selected");
});

