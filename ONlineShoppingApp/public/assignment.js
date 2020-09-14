var userDetails = [];
var isEdit = false;
var currentIndex;
function registerDetails() {
	var obj = {
		name: $("#uname").val(),
		age: $("#uage").val(),
		loc: $("#uloc").val(),
		locationName: $( "#uloc option:selected" ).text()
	};
	console.log($("#uloc:selected").val());
	
	if (isEdit) {
		alert(currentIndex);
		userDetails[currentIndex] = obj;
		updateDataInTable(currentIndex);
		isEdit = false;
	} else {
		userDetails.push(obj);
		addDetials(obj, userDetails.length-1);
	}

	clearDetails();
	
}

var clearDetails = () => {
	$("#uname").val('')
	$("#uage").val('')
	$("#uloc").val('')
}

var addDetials = (data, index) => {

	var trTag = $("<tr id='row_" + (index) + "'></tr>");
	var td1 = $("<td ></td>").html (index+1);
	trTag.append(td1);
	var td2 = $("<td name='uname'></td>").html(data.name);
	trTag.append(td2);
	var td3 = $("<td name='uage'></td>").html(data.age);
	trTag.append(td3);
	var td4 = $("<td name='uloc'></td>").html(data.locationName);
	trTag.append(td4);

	var  td5 = $("<td></td>");
	var bt1 = $("<input class='btnDelete btn btn-primary' type='button' value='Delete' onclick='deleteRecord(" + index + ")'>")
	var bt2 = $("<input type='button' class='btn btn-success' value='Edit' onclick='editRecord(" + index + ")'>");
	td5.append(bt1);
	td5.append(bt2);
	trTag.append(td5);


	$("tbody").append(trTag);
}	

var deleteRecord = (index) => {
	//alert("delete " + index);
	userDetails.splice(index, 1);
	reloadData();
}

var editRecord = (index) => {
	var data = userDetails[index];
	$("#uname").val(data.name);
	$("#uage").val(data.age);
	$("#uloc").val(data.loc);
	isEdit = true;
	currentIndex = index;
}

var reloadData = () => {
	$("tbody").empty();
	for (var i = 0 ; i < userDetails.length; i++) {
		addDetials(userDetails[i], i);
	}
}

var updateDataInTable = (index) => {
	var selector = '#row_' + index;
	$(selector).find('[name="uname"]').html(userDetails[index].name)
	$(selector).find('[name="uage"]').html(userDetails[index].age)
	$(selector).find('[name="uloc"]').html(userDetails[index].loc)
}