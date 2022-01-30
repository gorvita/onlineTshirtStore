$("#submit").click(function(){
	var name =$ ("#name").val();
	var email =$ ("#email").val();
	var phone =$ ("#phone").val();
	var textarea =$ ("#textarea").val();

	if( name== "" || email=="" || phone=="" || textarea==""){
		swal({
					title: "Fields Empty!",
					text: "Please check the missing fields!",
					icon: "warning",
					button: "Ok",
				});
	}else{
		swal({
					title: "Successfully submitted!",

					icon: "success",
					button: "Ok",
				});
	}
});