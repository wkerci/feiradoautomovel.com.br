<!DOCTYPE html>
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit');
const confirmationMessage = document.querySelector('#confirmation');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Validação simples (opcional)
  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Envio do e-mail (exemplo usando o serviço SendGrid)
  const emailData = {
    from: 'Seu nome <seu_email@dominio.com>',
    to: 'wkerci@gmail.com',
    subject: `Contato do site - ${name}`,
    text: `Nome: ${name}
    Email: ${email}
    Mensagem: ${message}`,
  };

  // Envio do email usando a API do SendGrid (substitua as variáveis)
  // ...

  // Mensagem de confirmação
  confirmationMessage.textContent = 'Seu email foi enviado com sucesso!';
  confirmationMessage.classList.add('visible');

  // Limpar os campos do formulário
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
