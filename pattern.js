for (var i = 0; i < 10; i++) {
	for (var j = i; j < 9; j++) {
		document.write("&nbsp;");
	}
	for (var j = 0; j <= i; j++) {
		document.write("&nbsp;");
		document.write("*");
	}
	document.write("<br>");
}

for (var k = 9; k >0; k--) {
	for (var m = k; m <= 9; m++) {
		document.write("&nbsp;");
	}
	for (var m = 0; m < k; m++) {
		document.write("&nbsp;");
		document.write("*");
	}
	document.write("<br><tr>");
}