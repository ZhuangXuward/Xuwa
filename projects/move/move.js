function addLoadEvent(func) {
	var oldLoad = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function () {
			oldLoad();
			func();
		}
	}
}


function moveElement(elementID, final_x, final_y, interval) {
	var ele = document.getElementById(elementID);
	if (ele.movement) {
		clearTimeout(ele.movement);
	}
	if (!ele.style.left) 
		ele.style.left = "0px";
	if (!ele.style.top)
		ele.style.top = "0px";
	var xpos = parseInt(ele.style.left); //将字符串“npx”->整数n
	var ypos = parseInt(ele.style.top);
	if (xpos == final_x && ypos == final_y) return true;
	if (xpos < final_x) xpos++;
	if (xpos > final_x) xpos--;
	if (ypos < final_y) ypos++;
	if (ypos > final_y) ypos--;
	ele.style.left = xpos + "px";
	ele.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"', "+final_x+", "+final_y+", "+interval+")"
	ele.movement = setTimeout(repeat, interval); //递归循环
}

function moveElement2(elementID, final_x, final_y) {
	var ele = document.getElementById(elementID);
	ele.classList.add("transition");
	ele.style.left = final_x + "px";
	ele.style.top = final_y + "px";
}


function positionChange() {
	moveElement("test", 500, 100, 10);
	moveElement2("test2", 500, 100);
}

addLoadEvent(positionChange);