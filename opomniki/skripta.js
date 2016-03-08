window.addEventListener('load', function() {
	//stran nalozena
	var izvediPrijava = function(event){
		var ime = document.querySelector('#uporabnisko_ime').value;
    	document.querySelector('#uporabnik').innerHTML = ime;
    	document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	
	var dodajOpomnik = function(event){
		var naziv = document.querySelector('#naziv_opomnika').value;
		var cas = document.querySelector('#cas_opomnika').value;
    	document.querySelector('#naziv_opomnika').innerHTML = '';
    	document.querySelector('#cas_opomnika').innerHTML = '';
		document.querySelector('#opomniki').innerHTML += "<div class='opomnik senca rob'><div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";
	}
	
	document.querySelector("#prijavniGumb").addEventListener("click", izvediPrijava);
	document.querySelector("#dodajGumb").addEventListener("click", dodajOpomnik);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			
			console.log(cas);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			if(cas <= 0){
				opomnik.innerHTML = "Opomnik!\n\nZadolžitev "+opomnik.querySelector(".naziv_opomnika").innerHTML+" je potekla!<span></span>";
			}else if(cas > 0){
				cas -= 1;
				casovnik.innerHTML = cas;
			}
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});
