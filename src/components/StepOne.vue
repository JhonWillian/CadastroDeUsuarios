<template>
  <div class="form">
    <div>
      Etapa <samp>1</samp> de 4
    </div>
    <h2 class="form__title">Seja bem vindo(a)</h2>
    <form @submit.prevent="handleSubmit">
      <label class="form__label" for="email">Endereço de e-mail:</label>
      <input class="form__input" id="email" v-model="email" type="email" required />
      <label class="form__label" for="type">Tipo de cadastro:</label>
      <div class="form__container">
        <input id="pf" v-model="type" type="radio" value="PF" required />
        <label for="pf">Pessoa Física</label>
        <input id="pj" v-model="type" type="radio" value="PJ" required />
        <label for="pj">Pessoa Jurídica</label>
      </div>
      <button class="form__button" type="submit">Continuar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['next-step']);

const email = ref('');
const type = ref('');

function handleSubmit() {
  if (email.value && type.value) {
    emit('next-step', { email: email.value, type: type.value });
  }
}
</script>
