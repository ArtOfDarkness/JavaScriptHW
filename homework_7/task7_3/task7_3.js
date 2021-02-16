hideText.onclick = function () {
	let visibility = text.style.visibility;
	
	if (visibility == "hidden") {
		text.style.visibility = "";
		this.textContent = "Сховати текст";
	} else {
		text.style.visibility = "hidden"
		this.textContent = "Показати текст";
	}
}

hideButton.onclick = function () {
	this.style.display = "none";	
}