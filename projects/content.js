window.onload = function() {
	var slideClick = document.getElementsByClassName("slideClick");
	var slideUP = document.getElementsByClassName("slideUP");
	for (let i = 0; i < slideClick.length; ++ i) {
		let totalCount = slideUP[i].getElementsByTagName("a").length;
		slideClick[i].getElementsByTagName("a")[0].innerHTML += "(" + totalCount + ")";
		slideClick[i].onclick = function() {
			$("div#block" + (i + 1)).slideToggle();
			clickHideandTurn(i, slideUP.length);
		};
	}
}

function clickHideandTurn(index, total, turn) {
	var slideUP = document.getElementsByClassName("slideUP");
	for (let j = 0; j < total; ++ j) {
		if (j == index) continue;
		$("div#block" + (j + 1)).slideUp();
	}
}