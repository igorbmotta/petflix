document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(function() {
        loadingScreen.classList.add('fade-out');
        
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 2000);
    }, 3000);
});


document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value 
    const senha = document.getElementById('senha').value
    const confirmSenha = document.getElementById('confirm-password').value

    if (email === '' || senha === '' || confirmSenha === '') {
        alert('Preencha os campos!')
        return
    }

    if (senha !== confirmSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    localStorage.setItem('userEmail', email)
    localStorage.setItem('userPassword', senha)

    window.location.href = 'login.html'
})