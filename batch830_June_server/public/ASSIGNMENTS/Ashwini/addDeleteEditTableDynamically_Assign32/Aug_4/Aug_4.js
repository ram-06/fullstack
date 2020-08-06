var i = 1;
document.querySelector("#addData").addEventListener("click", function(event){
	
	var tr1 = document.createElement("tr");
	document.querySelector("#tableBody").append(tr1);
	tr1.setAttribute("id", "trow"+i);
	

	var td1 = document.createElement("td");
	tr1.append(td1);
	td1.innerText = document.querySelector("#uName").value;

	var td2 = document.createElement("td");
	tr1.append(td2);
	td2.innerText = document.querySelector("#uAge").value;

	var td3 = document.createElement("td");
	tr1.append(td3);
	td3.innerText = document.querySelector("input[name=Gender]:checked").value;

	var td4 = document.createElement("td");
	tr1.append(td4);
	td4.innerText = document.querySelector("#userCountryValue").value;

	var td5 = document.createElement("button");
	tr1.append(td5);
	td5.setAttribute("id", "uEdit"+i);
	td5.innerText = "Edit";
	td5.setAttribute("value", i);
	document.getElementById("uEdit" + td5.value).addEventListener("click", function(event){
		var details = {}
		details.uDName = td1.innerText;
		details.uDAge = td2.innerText;
		details.uDGender = td3.innerText;
		details.uDCountry = td4.innerText;
		console.log("User Name : "+ td1.innerText);
		console.log("Age : "+ td2.innerText);
		console.log("Gender : "+ td3.innerText);
		console.log("Country : "+ td4.innerText);
		document.querySelector("#uName").value = details.uDName;
		document.querySelector("#uAge").value = details.uDAge;
		document.getElementByClassName("Gender").value = details.uDGender;
		document.querySelector("#userCountryValue").value = details.uDCountry;
	});
	var td6 = document.createElement("button");
	tr1.append(td6);
	td6.setAttribute("id", "uDelete"+i);
	td6.innerText = "Delete";
	td6.setAttribute("value", i);
	document.getElementById("uDelete" + td6.value).addEventListener("click", function(event){
		var row = td6.value;
		row = parseInt(row);
		//console.log("row = " + row);
		document.getElementById("tableBody").deleteRow(row);
		//console.log(td6.value);
	});
	i = i + 1;
});