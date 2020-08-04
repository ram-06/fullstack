function selectState(){
	var country = document.querySelector("#inputOfCountry").value;
	var stateInIndia = {
			sI_01 : "Andhra Pradesh",
			sI_02 : "Kerala",
			sI_03 : "Tamil Nadu",
			sI_04 : "Telangana"
		}
	var statesInUSA = {
		sU_01 : "Washington",
		sU_02 : "New York",
		sU_03 : "Texas",
		sU_04 : "Florida"
	}
	var statesInCanada = {
		sC_01 : "British Columbia",
		sC_02 : "Ontario",
		sC_03 : "Saskashwan",
		sC_04 : "Novas Scotia"
	}
	if(country == "India"){
		for(var temp in stateInIndia){
			var opt = document.createElement("option");
			document.querySelector("#inputOfState").append(opt);
			opt.innerText = stateInIndia[temp];	
		}
	}
	if(country == "Canada"){
		for(var temp in statesInCanada){
			var opt = document.createElement("option");
			document.querySelector("#inputOfState").append(opt);
			opt.innerText = statesInCanada[temp];	
		}
	}
	if(country == "USA"){
		for(var temp in statesInUSA){
			var opt = document.createElement("option");
			document.querySelector("#inputOfState").append(opt);
			opt.innerText = statesInUSA[temp];	
		}
	}
}
function selectCity(){
	var state = document.querySelector("#inputOfState").value;
	var citiesOfAP = {
			c_AP_01 : "East Godhavarri",
			c_AP_02 : "Guntur",
			c_AP_03 : "Karnool",
			c_AP_04 : "Vizag",
			c_AP_05 : "Vijaywada"
		}
	var citiesOfTelangana = {
		C_TS_01 : "Adilabad",
		C_TS_02 : "Hyderabad",
		C_TS_03 : "Karimnagar",
		C_TS_04 : "Medhak",
		C_TS_05 : "Sangareddy",
		C_TS_05 : "Warangal"
	}
	var citiesOfKerala = {
		C_K_01 : "Kochi",
		C_K_02 : "Kollam",
		C_K_03 : "Thiruvanathapuram",
	}
	var citiesOfTamilNadu = {
		C_TN_01 : "Chennai",
		C_TN_02 : "Kanchipuram"
	}
	if(state == "Andhra Pradesh"){
		for(var temp in citiesOfAP){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfAP[temp];	
		}
	}
	if(state == "Telangana"){
		for(var temp in citiesOfTelangana){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfTelangana[temp];	
		}
	}
	if(state == "Kerala"){
		for(var temp in citiesOfKerala){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfKerala[temp];	
		}
	}
	var citiesOfWashington = {
		c_W_01 : "Bellevue",
		c_W_02 : "Ollampia",
		c_W_03 : "Spokane"
	}
	var citiesOfNewYork = {
		c_NY_01 : "Albany",
		c_NY_02 : "Buffalo",
	}
	var citiesOfTexas = {
		c_T_01 : "Austin",
		c_T_02 : "Dallas",
		c_T_03 : "Houston"
	}
	var citiesOfFlorida = {
		c_F_01 : "Cape Coral",
		c_F_02 : "Hialeah",
		c_F_03 : "Orlando",
		c_F_04 : "Tampa"
	}
	if(state == "Washington"){
		for(var temp in citiesOfWashington){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfWashington[temp];	
		}	
	}
	if(state == "Florida"){
		for(var temp in citiesOfFlorida){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfFlorida[temp];	
		}	
	}
	if(state == "New York"){
		for(var temp in citiesOfNewYork){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfNewYork[temp];	
		}	
	}
	if(state == "Texas"){
		for(var temp in citiesOfTexas){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfTexas[temp];	
		}	
	}
	var citiesOfBritishColumbia = {
		c_BC_01 : "Burnaby",
		c_BC_02 : "Kelowna",
		c_BC_03 : "Richmond",
		c_BC_04 : "Vancover",
		c_BC_05 : "Victoria"
	}
	var citiesOfOntario = {
		c_O_01 : "Hamilton",
		c_O_02 : "Ottawa",
		c_O_03 : "Toronto"
	}
	var citiesOfSaskaswan = {
		c_S_01 : "Estevan",
		c_S_02 : "Regina",
		c_S_03 : "Saskatoon"
	}
	var citiesOfNovascotia = {
		c_N_01 : "Baddeck",
		c_N_02 : "Digby",
		c_N_03 : "Truro",
		c_N_04 : "Yarmouth"
	}
	if(state == "British Columbia"){
		for(var temp in citiesOfBritishColumbia){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfBritishColumbia[temp];	
		}	
	}
	if(state == "Ontario"){
		for(var temp in citiesOfOntario){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfOntario[temp];	
		}	
	}
	if(state == "Saskashwan"){
		for(var temp in citiesOfSaskaswan){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfSaskaswan[temp];	
		}	
	}
	if(state == "Novas Scotia"){
		for(var temp in citiesOfNovascotia){
			var opt = document.createElement("option");
			document.querySelector("#inputOfCity").append(opt);
			opt.innerText = citiesOfNovascotiass[temp];	
		}	
	}
}