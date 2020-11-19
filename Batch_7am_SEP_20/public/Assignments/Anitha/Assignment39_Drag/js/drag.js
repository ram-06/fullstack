
     	var elementID;
     	
     	function allowDrop(event) {
     		event.preventDefault();
     		console.log($('#clothType').val())
     		if (elementID === $('#clothType').val() )
     		{
     			elementID='#'+elementID;
     			$(".dropBlock").html("");
     			$(".dropBlock").append($(elementID));
     			$(elementID).css('width','500px');
     			$(elementID).css('height','400px');
     	    }
     	}

     	function dragStarted(event){
     		console.log(event);
     		elementID=event.target.id;   		
     	}
     	
     	function elementDragIsDone(event) {
                event.preventDefault();
        }

        function changeClothesType() {
        	$(".dropBlock").html("");
        } 
     	