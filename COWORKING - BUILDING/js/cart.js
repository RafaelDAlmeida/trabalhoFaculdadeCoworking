function openNav() {

  document.getElementById("myNav").style.width = "100%";
  var nomePlano = document.getElementById("nomePlano").innerHTML;
  var plano = document.getElementById("plano").innerHTML;
  document.getElementById("plano").innerHTML = nomePlano;

  var valor = document.getElementById("valor").innerHTML;
  var total = document.getElementById("total").innerHTML;
  document.getElementById("total").innerHTML = valor;

}

function closeNav(){ 
	document.getElementById("plano").innerHTML = "";
	nomePlano.remove();		
	document.getElementById("myNav").style.width = "0%";


}