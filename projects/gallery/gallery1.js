window.onload = function() {
	prepareGallery();
}

function prepareGallery() {
	var gallery = document.getElementById("gallery");
	var links = gallery.getElementsByTagName("a");
	for (let j = 0; j < links.length; ++ j) {
		links[j].onclick = function() {
			showPic(this);
			return false;
		}
	}
}

function showPic(whichpic) {
	var placeholder = document.getElementById("placeholder");
	// placeholder.src = whichpic.href;
	placeholder.setAttribute("src", whichpic.href);
	var description = document.getElementById("description");
	description.firstChild.nodeValue = whichpic.title;
}
