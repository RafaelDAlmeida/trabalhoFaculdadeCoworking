function validar(){
	var nome = formulario.nome.value;
	var cartao = formulario.cartao.value;
	var expirar = formulario.expirar.value;
	var cvv = formulario.cvv.value;

	if (nome == "") {
		alert("Preencha o campo nome");
		formulario.nome.focus();
		return false;
	}
	if (cartao == "") {
		alert("Preencha o campo cartao");
		formulario.cartao.focus();
		return false;
	}
	if (expirar == "") {
		alert("Preencha o campo expirar");
		formulario.expirar.focus();
		return false;
	}
	if (cvv == "") {
		alert("Preencha o campo cvv");
		formulario.cvv.focus();
		return false;

	}
	else{
		alert("Compra Efetuada com sucesso!");
		
	}
}