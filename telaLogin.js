document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value 
    const senha = document.getElementById('senha').value

    const storedEmail = localStorage.getItem('userEmail')
    const storedPassword = localStorage.getItem('userPassword')

    if (email === '' || senha === '') {
        alert('Preencha os campos!')
        return
    }

    if (email === storedEmail && senha === storedPassword) {
        console.log('Login bem-sucedido, redirecionando...');
        window.location.href = 'home.html'
    } else {
        alert('Email ou senha incorretos!')
    }
})