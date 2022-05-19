function calculateResult() {
	document.getElementById('caution').innerHTML  = "";
	document.getElementById('last_equation').innerHTML  = "";
	document.getElementById('last_roots').innerHTML  = "";
	document.getElementById('last_discriminant').innerHTML  = "";
	var a = document.getElementById('a').value.trim();	
	var b = document.getElementById('b').value.trim();
	var c = document.getElementById('c').value.trim();
	if(isNaN(a) || isNaN(b) || isNaN(c)) {
		document.getElementById('caution').innerHTML  = "Должны быть введены только числовые значения!";
		return;
	}
	if(a == 0) {
		document.getElementById('caution').innerHTML  = "Коэффициент а должен быть отличен от 0!";
		return;
	}
	if(b == '') b=0;
	if(c == '') c=0;
	findRoots(a, b, c);
}

function findRoots(a, b, c) {	
	var D = b * b - 4 * a * c;
	var x1, x2, roots, equation, discriminant;
		equation = a+"*x^2 + "+b+"*x + "+c+" = 0";
		discriminant = "D=" + D;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		roots = "x1=" + x1 + ", x2=" + x2;
	} else if (D == 0) {
		x1 = -b / (2 * a);
		roots = "x=" + x1;
	} else {
		roots = "Корней нет!";	
	}
	document.getElementById('last_equation').innerHTML  = equation;
	document.getElementById('last_roots').innerHTML  = roots;
	document.getElementById('last_discriminant').innerHTML  = discriminant;
	addRow(equation,roots,discriminant);

}

function addRow(equation,roots,discriminant){
    var tbody = document.getElementById('allresults').getElementsByTagName('tbody')[0];
    var row = tbody.insertRow();
    var cell1 = row.insertCell();
	var content = document.createTextNode(equation);
	cell1.appendChild(content);
	var cell2 = row.insertCell();
	content = document.createTextNode(roots);
	cell2.appendChild(content);
	var cell3 = row.insertCell();
	content = document.createTextNode(discriminant);
	cell3.appendChild(content);
}

allresults.addEventListener('click', function(evt){
	if(evt.target.closest('tr') !=  allresults.getElementsByTagName("tr")[0]){
		evt.target.closest('tr').remove();
	}
})
  
