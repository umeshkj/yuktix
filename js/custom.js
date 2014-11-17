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
$(".contactsFolder .contactsGrp").click(function(){
	$(".contactsFolder .contactsGrp").removeClass("selected");
	$(this).addClass("selected");	
	selectedGroup();
});
function selectedGroup(){
	if(!$(".contactsGrp").hasClass("selected")){
		$(".contactsFolder .contactsGrp").find(".contactSubfolder").slideUp();
		$(this).find(".contactSubfolder").slidedown(slow);
	}
}
$(".newContactBtn").click(function(){
	$(".black_overlay").show();
	$(".createContact").show();
});

function selectGrpNewContact(){
	$(".menu-dropdown li").click(function(){
		var selectedText = $(this).text();
		var selectedDataGrp = $(this).data("group");
		$(".groupName").text(selectedText);
		$(".groupName").attr("data-group",selectedDataGrp);
	});
};
selectGrpNewContact();
$(".cancel").click(function(){
	$(this).parents(".popup").hide();
	$(".black_overlay").hide();
});
$(".contactsSubmit").click(function(){
	contactCreateEdit();
	$(this).parents(".popup").hide();
	$(".black_overlay").hide();
});
function contactCreateEdit(){
	var contactName = $("#createUser").find(".contact_name").val();
	var contactEmail = $("#createUser").find(".contact_email").val();
	var contactNumber = $("#createUser").find(".contact_number").val();
	var contactAddress = $("#createUser").find(".contact_address").val();
	var contactGroup = $("#createUser").find(".groupName").text();
	$('#contacts').append('<tr><td>'+ '<input type="checkbox">' +'</td> <td>' + contactName + '</td><td> '+ contactEmail +' </td> <td> '+ contactNumber +' </td> <td> '+ contactAddress +' </td> <td> '+ contactGroup +' </td> <td> '+ '<img class="deletContact" src="imgs/delet.png"><img class="editContact" src="imgs/edit.png">' +' </td></tr>');
};

$(".addGroup").click(function(){
	$(".groupInput").show();
});
$(".cancelGrp").click(function(){
	$(".groupInput").hide();
});
$(".createGroup").click(function(){
	var groupName = $(".newGrpName").val();
	if(!groupName == ""){
		$(".contactsFolder").append('<li class="contactsGrp">' + groupName + '</li>');
		$(".contactGroupDropdown").append('<li data-group="'+ groupName +'">' + groupName + '</li>');
		$(".groupInput").hide();
		selectGrpNewContact();
	}else{
		alert("Enter The group name");
	}
});
$(".deletContact").click(function(){
	$(this).parents("tr").remove();
});
$(".editContact").click(function(){
	$(".black_overlay").show();
	$(".createContact").show();
	$(".contact_name").val($(this).parents("tr").find("td:nth-child(2)").text());
	$(".contact_email").val($(this).parents("tr").find("td:nth-child(3)").text());
	$(".contact_number").val($(this).parents("tr").find("td:nth-child(4)").text());
	$(".contact_address").val($(this).parents("tr").find("td:nth-child(5)").text());
	$(".groupName").val($(this).parents("tr").find("td:nth-child(6)").text());
	contactCreateEdit();
})