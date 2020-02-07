startGame();
var userName = "";
var userPassword = "";
function startGame() {
	lblLogin.innerText="Log In";
	tbLogin.value="";
	userName = "";
	userPassword="";
	tbLogin.focus();
}

let log = console.log;
document.addEventListener('DOMContentLoaded', init);

function init(){
	let textLogIn = document.getElementById('tbLogin');
	textLogIn.addEventListener('keyPress', checkKeyPress);
}

function checkKeyPress(ev){
	let target = ev.currentTarget;
	let tag = target.tagName;
	let char = ev.char || ev. charCode || ev.which;
	let s = String.fromCharCode(char);
	log(char, s, tag);
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
		tbLogin.value="";
		tbLogin.type = "text";
		tbLogin.placeholder = "Username";
		alert("(test) Your password is " + userPassword);
		//check database for user info. If user data is correct: logIn.
		logIn();
	}
	tbLogin.focus();
}

function logIn()
{
	//loginWindow.mainContent.hide();
}
