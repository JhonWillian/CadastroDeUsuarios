<template>
  <div class="form">
    <div>
      Etapa <samp>4</samp> de 4
    </div>
    <h2 class="form__title">Revise suas informações</h2>
    <div>
      <div v-for="(value, key) in date" :key="key">
        <p>{{ key }}: {{ value }}</p>
      </div>
      <button class="form__button form__button--secondary" type="button" @click="$emit('prev-step')">Voltar</button>
      <button class="form__button" type="button" @click="submitForm">Cadastrar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['date'])

async function submitForm() {
  try {
    const lala = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.date),
    });

    console.log(lala);
    if (lala.status === 200) {
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Erro ao cadastrar:', lala.statusText);
    }
  } catch (error) {
    alert('Erro ao cadastrar:', error);
  }
  // fetch('/registration', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(props.date),
  // })
  //   .then((response) => {
  //     alert('Cadastro realizado com sucesso!');
  //   })
  //   .catch((error) => {
  //     console.error('Erro ao cadastrar:', error);
  //   });
}
</script>
