startGame();
var userName = "";
var userPassword = "";
function startGame() {
	lblLogin.innerText="Username:";
	tbLogin.value="";
	userName = "";
	userPassword="";
	tbLogin.focus();
}

function logIn() {
	if (lblLogin.innerText=="Username:" && tbLogin.value == "")
		alert("Please input a Username");
	if (lblLogin.innerText=="Password:" && tbLogin.value == "")
		alert("Please input a Password");
	else if (lblLogin.innerText=="Username:" && tbLogin.value!="")
	{
		userName=tbLogin.value;
		tbLogin.value="";
		tbLogin.type = "password";
		lblLogin.innerText = "Password:";
	}
	else if (lblLogin.innerText=="Password:" && tbLogin.value!="")
	{
		userPassword=tbLogin.value;
		tbLogin.value="";
		tbLogin.type = "text";
		lblLogin.innerText = "Username:";
		alert("(test) Your password is " + userPassword);
	}

	tbLogin.focus();
}
