const BASE_URL = 'http://localhost:3000';

export default function registarUsuario(payload) {
  fetch(`${BASE_URL}/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((data) => {
      alert('Cadastro realizado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao cadastrar:', error);
    });
};
