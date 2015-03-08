$(function(){
	$("form").validate({
		rules: {
			name :{
				required: true
			},
			mail :{
				required: true,
				email: true
			},
			url :{
				required: true
			}
		},
		messages: {
			name :{
				required: "name is empty"
			},
			age :{
				required: "age is empty",
				email: "invalid numeric value "
			}
		}
	});
})
