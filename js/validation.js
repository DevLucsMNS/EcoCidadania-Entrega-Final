export const inicializarValidacao = () => {
    
    const form = document.getElementById('form-de-cadastro');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        limparErros();

        let isValid = true;

        const nome = document.getElementById('nome');
        if (nome.value.trim().length < 3) {
            mostrarErro(nome, "O nome deve ter pelo menos 3 caracteres.");
            isValid = false;
        }

        const email = document.getElementById('email');
        if (!validarEmail(email.value)) {
            mostrarErro(email, "Por favor, insira um e-mail válido.");
            isValid = false;
        }

        if (isValid) {
            mostrarAlertaGeral(true, "Cadastro enviado com sucesso! Entraremos em contato.");
            form.reset(); // Limpa o formulário
        } else {
            mostrarAlertaGeral(false, "Por favor, corrija os erros no formulário.");
        }
    });
};

function mostrarErro(inputElement, mensagem) {
    const campo = inputElement.parentElement;
    const errorElement = campo.querySelector('.form-error');
    errorElement.textContent = mensagem;
    inputElement.classList.add('input-error');
}

function limparErros() {
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    document.getElementById('form-status-alert').innerHTML = '';
}

function mostrarAlertaGeral(sucesso, mensagem) {
    const alertBox = document.getElementById('form-status-alert');
    const tipoAlerta = sucesso ? 'alert-sucesso' : 'alert-erro';
    alertBox.innerHTML = `<div class="alert ${tipoAlerta}">${mensagem}</div>`;
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}