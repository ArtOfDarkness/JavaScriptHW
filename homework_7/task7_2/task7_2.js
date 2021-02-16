function markExternalLinks() {
	let elements = document.querySelectorAll("li>a");

	for (let i = 0; i < elements.length; i++) {
		if ((elements[i].innerHTML.includes("http://") || elements[i].innerHTML.includes("ftp://"))
				&& !elements[i].innerHTML.includes("http://internal.com")) {
			elements[i].classList.add("external-red");
		}
	}

	let externalLinks = document.getElementsByClassName("external-red");

	for (let i = 0; i < externalLinks.length; i++) {
		externalLinks[i].style.backgroundColor = "red";
	}
	
	console.log("Зовнішні посилання були виділені червоним!");
}