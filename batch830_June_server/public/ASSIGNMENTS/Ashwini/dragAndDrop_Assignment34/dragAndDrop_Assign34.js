var productId = '';
var dragClass = '';
var dropClass = '';
function elementDragStarted(event){
	console.log("drag started");
	productId = event.target.getAttribute("id");
	dragClass = event.target.getAttribute("class");//from drag
}
function productOnDrop(event){
	productId = '#' + productId;
	var imgElement = document.querySelector(productId);
	dropClass = event.target.getAttribute("class");
	if(dragClass === dropClass){
		var newImgTag = document.createElement("img");
		newImgTag.setAttribute("src", imgElement.getAttribute("src"));
		event.target.append(newImgTag); 
	}
}
function dragFinished(event){
	event.preventDefault();
}
