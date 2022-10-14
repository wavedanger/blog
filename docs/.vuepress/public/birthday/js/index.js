$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(/.*丹.*/.test(userName)){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="font.html";},2000);
		}
	else{
		alert("密码错误，输入【丹丹】可免密码");
	}
});
