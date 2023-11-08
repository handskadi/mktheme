const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "http://192.168.56.3/wp-content/themes/mktheme/screenshot.png") {
		myImage.setAttribute("src", "http://192.168.56.3/wp-content/themes/twentytwentytwo/screenshot.png");
	} else {
		myImage.setAttribute("src", "http://192.168.56.3/wp-content/themes/mktheme/screenshot.png");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	  const myName = prompt("Please enter your name.");
	  localStorage.setItem("name", myName);
	  myHeading.textContent = `MK Theme Welcomes you, ${myName}`;
}

if (!localStorage.getItem("name")) {
	  setUserName();
} else {
	  const storedName = localStorage.getItem("name");
	  myHeading.textContent = `Mk Theme Welcomes you, ${storedName}`;
}

myButton.onclick = () => {
	  setUserName();
};
