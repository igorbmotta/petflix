document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value 
    const senha = document.getElementById('senha').value

    const storedEmail = localStorage.getItem('userEmail')
    const storedPassword = localStorage.getItem('userPassword')

    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);

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