startGame();
var userName = "";
var userPassword = "";
function startGame() {
	gameLayout.style.display = "none";
	loginWindow.style.display = "block";
	lblLogin.innerText = "Log In";
	tbLogin.value = "";
	userName = "";
	userPassword = "";
	tbLogin.focus();
}

let log = console.log;
document.addEventListener('DOMContentLoaded', init);

function init(){
	let textLogIn = document.getElementById('tbLogin');
	textLogIn.addEventListener('keypress', checkKeyPress);
}

function checkKeyPress(ev){
	let target = ev.currentTarget;
	let tag = target.tagName;
	let char = ev.char || ev. charCode || ev.which;
	let s = String.fromCharCode(char);
	//log(char, s, tag);
	switch (char) {
		case 13: //enter
			btnLogIn.click();
			break;
	}
}

function lettersOnly(input)
{
	var regex = /[^a-z, ^0-9]/gi;
	input.value = input.value.replace(regex, "");
}

function getUserInfo() {
	if (tbLogin.placeholder == "Username" && tbLogin.value == "")
		alert("Please enter a Username");
	if (tbLogin.placeholder == "Password" && tbLogin.value == "")
		alert("Please enter a Password");
	else if (tbLogin.placeholder == "Username" && tbLogin.value!="")
	{
		userName=tbLogin.value;
		tbLogin.value="";
		tbLogin.type = "password";
		lblLogin.innerText = userName;
		tbLogin.placeholder = "Password";
	}
	else if (tbLogin.placeholder == "Password" && tbLogin.value!="")
	{
		userPassword=tbLogin.value;
		lblLogin.innerText="Log In";
		tbLogin.value="";
		tbLogin.type = "text";
		tbLogin.placeholder = "Username";
		//log("Password: " + userPassword);
		//check database for user info. If user data is correct: logIn.
		logIn();
	}
	tbLogin.focus();
}

function logIn()
{
	log("log in.");
	welcome.innerText +=" "+userName;
	loginWindow.style.display = "none";
	gameLayout.style.display = "block";
}
