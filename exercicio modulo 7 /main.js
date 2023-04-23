const form = document.getElementById('form');

function validaForm(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const campoNumeroA = document.getElementById('input-a');
    const campoNumeroB = document.getElementById('input-b');
    const mensagemDeSucesso = `Formulario válido! O segundo valor que voce digitou foi: ${campoNumeroB.value}, e ele é maior que o primeiro: ${campoNumeroA.value}`;
    const mensagemDeErro = `Formulario inválido! Voce digitou primeiro o número: ${campoNumeroA.value}, e ele não é menor que o numero ${campoNumeroB.value}`;
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemErro = document.querySelector('.error-message');

    containerMensagemSucesso.style.display = 'none';
    containerMensagemErro.style.display = 'none';

    formularioForValido = validaForm(campoNumeroA.valueAsNumber, campoNumeroB.valueAsNumber)

    if (formularioForValido) {
        containerMensagemSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemSucesso.style.display = 'block';
    }

    else {
        containerMensagemErro.innerHTML = mensagemDeErro;
        containerMensagemErro.style.display = 'block';
    }
})

