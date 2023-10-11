function toggleLoginButton() {
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    // Verifica se a senha foi inserida
    if (passwordInput.value.trim().length >= 6) {
        loginButton.classList.remove('hidden'); // Exibe o botão de login
        loginButton.classList.add('active'); // Ativa o cursor pointer
        loginButton.removeAttribute('disabled'); // Torna o botão clicável
    } else {
        loginButton.classList.add('hidden'); // Oculta o botão de login
        loginButton.classList.remove('active'); // Remove o cursor pointer
        loginButton.setAttribute('disabled', true); // Desativa o clique no botão
    }
}

function login() {
    const loginButton = document.getElementById('loginButton');

    // Verifica se o botão não está oculto
    if (!loginButton.classList.contains('hidden')) {
        // Implemente aqui a lógica para processar o login
        alert('Login realizado com sucesso!');
    }
}