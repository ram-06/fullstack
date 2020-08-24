function clearStates(){
	document.querySelector("#inputOfState").innerHTML = "<option>Select..</option>";
	document.querySelector("#inputOfCity").innerHTML = "<option>Select..</option>";
	console.log("hi");
}
function clearCities(){
	//document.querySelector("#inputOfState").innerHTML = "<option>Select..</option>";
	document.querySelector("#inputOfCity").innerHTML = "<option>Select..</option>";
	console.log("hi from cities");
}
var states = {
	India : {
		Andhra_Pradesh : {
			c_AP_01 : "East Godhavarri",
			c_AP_02 : "Guntur",
			c_AP_03 : "Karnool",
			c_AP_04 : "Vizag",
			c_AP_05 : "Vijaywada"
		},
		Kerala : {
			C_K_01 : "Kochi",
			C_K_02 : "Kollam",
			C_K_03 : "Thiruvanathapuram"
		},
		Tamil_Nadu : {
			C_TN_01 : "Chennai",
			C_TN_02 : "Kanchipuram"
		},
		Telangana :{
			C_TS_01 : "Adilabad",
			C_TS_02 : "Hyderabad",
			C_TS_03 : "Karimnagar",
			C_TS_04 : "Medhak",
			C_TS_05 : "Sangareddy",
			C_TS_05 : "Warangal"
		}
	},
	Canada : {
		BritishColumbia : {
			c_BC_01 : "Burnaby",
			c_BC_02 : "Kelowna",
			c_BC_03 : "Richmond",
			c_BC_04 : "Vancover",
			c_BC_05 : "Victoria"
		},
		Ontario : {
			c_O_01 : "Hamilton",
			c_O_02 : "Ottawa",
			c_O_03 : "Toronto"
		},
		Saskaswan : {
			c_S_01 : "Estevan",
			c_S_02 : "Regina",
			c_S_03 : "Saskatoon"
		},
		Novascotia : {
			c_N_01 : "Baddeck",
			c_N_02 : "Digby",
			c_N_03 : "Truro",
			c_N_04 : "Yarmouth"
		}			
	},
	USA : {
		Washington : {
			c_W_01 : "Bellevue",
			c_W_02 : "Ollampia",
			c_W_03 : "Spokane"
		},
		New_York : {
			c_NY_01 : "Albany",
			c_NY_02 : "Buffalo",
		},
		Texas : {
			c_T_01 : "Austin",
			c_T_02 : "Dallas",
			c_T_03 : "Houston"
		},
		Florida : {
			c_F_01 : "Cape Coral",
			c_F_02 : "Hialeah",
			c_F_03 : "Orlando",
			c_F_04 : "Tampa"
		}
	}
}
function selectState(){
	clearStates();
	var country = document.querySelector("#inputOfCountry").value;
	if(country == "India"){
		for(var temp in states){
			if(temp == "India"){
				for(temp1 in states.India){
					if(typeof(states.India[temp1]) == 'object'){
						let a = temp1;
						var opt = document.createElement("option");
						document.querySelector("#inputOfState").append(opt);
						opt.innerText = temp1;	
						console.log(a);
					}
				}
			}
		}
	}
	if(country == "Canada"){
		for(var temp in states){
			if(temp == "Canada"){
				for(temp1 in states.Canada){
					if(typeof(states.Canada[temp1]) == 'object'){
						var opt = document.createElement("option");
						document.querySelector("#inputOfState").append(opt);
						opt.innerText = temp1;	
					}
				}
			}
		}
	}
	if(country == "USA"){
		for(var temp in states){
			if(temp == "USA"){
				for(temp1 in states.USA){
					if(typeof(states.USA[temp1]) == 'object'){
						var opt = document.createElement("option");
						document.querySelector("#inputOfState").append(opt);
						opt.innerText = temp1;	
					}
				}
			}
		}
	}
}
function selectCity(){
	clearCities();
	var state = document.querySelector("#inputOfState").value;
	console.log("state : " + state);
	if(state == "Andhra_Pradesh"){
		console.log("Hi from AP");
		for(var temp in states.India.Andhra_Pradesh){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			console.log("cities : " + states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.India.Andhra_Pradesh[temp];	
		}
	}
	if(state == "Telangana"){
		for(var temp in states.India.Telangana){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.India.Telangana[temp];	
		}
	}
	if(state == "Tamil_Nadu"){
		for(var temp in states.India.Tamil_Nadu){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.India.Tamil_Nadu[temp];	
		}
	}
	if(state == "Kerala"){
		for(var temp in states.India.Kerala){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.India.Kerala[temp];	
		}
	}
	if(state == "BritishColumbia"){
		for(var temp in states.Canada.BritishColumbia){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.Canada.BritishColumbia[temp];	
		}
	}
	if(state == "Ontario"){
		for(var temp in states.Canada.Ontario){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.Canada.Ontario[temp];	
		}
	}
	if(state == "Saskaswan"){
		for(var temp in states.Canada.Saskaswan){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.Canada.Saskaswan[temp];	
		}
	}
	if(state == "Novascotia"){
		for(var temp in states.Canada.Novascotia){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.Canada.Novascotia[temp];	
		}
	}
	if(state == "Washington"){
		for(var temp in states.USA.Washington){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.USA.Washington[temp];	
		}
	}
	if(state == "New_York"){
		for(var temp in states.USA.New_York){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.USA.New_York[temp];	
		}
	}
	if(state == "Texas"){
		for(var temp in states.USA.Texas){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.USA.Texas[temp];	
		}
	}
	if(state == "Florida"){
		for(var temp in states.USA.Florida){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			//console.log(states.India.Andhra_Pradesh[temp]);
			opt.innerText = states.USA.Florida[temp];	
		}
	}
}