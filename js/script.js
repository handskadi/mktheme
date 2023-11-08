const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "http://192.168.56.3/wp-content/themes/mktheme/screenshot.png") {
		myImage.setAttribute("src", "http://192.168.56.3/wp-content/themes/twentytwentytwo/screenshot.png");
	} else {
		myImage.setAttribute("src", "http://192.168.56.3/wp-content/themes/mktheme/screenshot.png");
	}
};

