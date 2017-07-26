/* Dropdown Button Handler

	This toggles between hiding and showing dropdown content */

function pickScale() {
	document.getElementById('rootDropdown').classList.toggle("show");
}

// Closes the dropdown menu if user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}	


function goGetScale(value) {
	// After dropdown is clicked this function will retrieve
	// the appropriate scale and inject it into the right
	// divs?
	var s = value;
	//var s = ["Hey", "Hello", [1,3,5,7], [2,4,6,8]];
	

	for (var i = 0; i < document.getElementsByName("noteb").length; i++) {
	  document.getElementsByName("noteb")[i].innerHTML = s[8][(i - 15)];
	  	for (var k = 0; k < 15; k++) {
			document.getElementsByName("noteb")[k].innerHTML = s[7][(k - 7)]; 
	  	}
		    for (var j = 0; j < 7; j++) {
				document.getElementsByName("noteb")[j].innerHTML = s[j]; 
		  	}
	}
}


