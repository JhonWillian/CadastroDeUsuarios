<template>
  <div class="form">
    <div>
      Etapa <samp>3</samp> de 4
    </div>
    <h2 class="form__title">Senha de acesso</h2>
    <form @submit.prevent="handleSubmit">
      <label class="form__label" for="password">Sua senha:</label>
      <input class="form__input" id="password" v-model="password" type="password" required />
      <button class="form__button form__button--secondary" type="button" @click="$emit('prev-step')">Voltar</button>
      <button class="form__button" type="submit">Continuar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['next-step']);

const password = ref('');

function handleSubmit() {
  if (password.value) {
    emit('next-step', { password: password.value });
  }
}
</script>
