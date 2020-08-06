var dataList = [];

function registerDetails() {
	var data = {
		name: document.querySelector("#sName").value,
		age: document.querySelector("#uage").value,
		gender: document.querySelector("input[name='gender']:checked").value,
		country: document.querySelector("#ucountry").value
	};
	dataList.push(data);
	renderData();
	document.querySelector("#sName").value = '';
	document.querySelector("#uage").value = '';
	document.querySelector("input[value='male']").checked = true;
	document.querySelector("#ucountry").value = '';
}

function renderData()  {
	document.querySelector("tbody").innerHTML = '';
	for (var i = 0 ; i < dataList.length; i++) {
		var trTag = getHTMLFOR(dataList[i], i);
		document.querySelector("tbody").append(trTag);
	}
}

function getHTMLFOR(curObj, i) {
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	td.innerHTML = i + 1;
	tr.append(td);
	for (var temp in curObj) {
		var td = document.createElement("td");
		td.innerHTML = curObj[temp];
		tr.append(td);
	}
	var btnTd = document.createElement("td");
	var btn1 = document.createElement("input");
	btn1.setAttribute("type", "button");
	btn1.setAttribute("value", "Delete");
	btn1.setAttribute("onclick", "deleteRecord(" + i + ")")
	btnTd.append(btn1);

	var btn2 = document.createElement("input");
	btn2.setAttribute("type", "button");
	btn2.setAttribute("value", "Edit");
	btnTd.append(btn2);
	tr.append(btnTd);

	return tr;
}

function  deleteRecord(index) {
	dataList.splice(index, 1);
	renderData();
}