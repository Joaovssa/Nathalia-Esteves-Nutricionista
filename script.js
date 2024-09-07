// Script para navegação suave entre seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Script para formulário de contato (apenas um exemplo básico)
document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegando os valores dos inputs
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Validando os campos (validação básica)
    if (name === "" || email === "" || message === "") {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Exemplo de processamento do formulário
    alert('Obrigado pelo seu contato, ' + name + '! Retornaremos em breve.');

    // Resetando o formulário após o envio
    document.querySelector('#contact-form').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    // Simulação de verificação de login
    const isLoggedIn = checkLoginStatus();

    if (isLoggedIn) {
        document.getElementById('login-check').style.display = 'block';
        document.getElementById('login-prompt').style.display = 'none';
    } else {
        document.getElementById('login-check').style.display = 'none';
        document.getElementById('login-prompt').style.display = 'block';
    }

    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário via AJAX
        const formData = new FormData(this);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Foto e relato enviados com sucesso!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Houve um erro ao enviar a foto e o relato.');
        });
    });

    function checkLoginStatus() {
        // Função de simulação para verificar o status de login
        // Substitua isso com a verificação real, como verificar um token de autenticação
        return !!localStorage.getItem('userLoggedIn');
    }
});
