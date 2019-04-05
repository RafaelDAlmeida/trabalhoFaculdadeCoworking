// Buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');
// Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

// Displays
var displayName = document.getElementById('displayName');


// Criar novo usuário
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Bem vindo ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });
});

// Autenticar com E-mail e Senha
authEmailPassButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            console.log(result);
            displayName.innerText = 'Bem vindo, ' + emailInput.value;
            alert('Autenticado ' + emailInput.value); 
            document.getElementById("formulario").style.display="none";
            document.getElementById("btcadastro").style.display="none";
            document.getElementById("logOutButton").style.display="flex";
            document.getElementById("index").style.display="block";
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
});

// Logout
logOutButton.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            displayName.innerText = 'Você não está autenticado';
            alert('Você se deslogou');
            document.getElementById("btcadastro").style.display="flex";
            document.getElementById("logOutButton").style.display="none";
        }, function (error) {
            console.error(error);
        });
});

function showForm() {
  document.getElementById("formulario").style.display="flex";
  
} 