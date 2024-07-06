<template>
  <div class="form">
    <div>
      Etapa <samp>2</samp> de 4
    </div>
    <h2 class="form__title">{{ type === 'PF' ? 'Pessoa Física' : 'Pessoa Jurídica' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div v-if="type === 'PF'">
        <label class="form__label" for="name">Nome:</label>
        <input class="form__input" id="name" v-model="name" type="text" required />
        <label class="form__label" for="cpf">CPF:</label>
        <input class="form__input" id="cpf" v-model="cpf" type="text" required />
        <label class="form__label" for="birthDate">Data de nascimento:</label>
        <input class="form__input" id="birthDate" v-model="birthDate" type="date" required />
        <label class="form__label" for="phone">Telefone:</label>
        <input class="form__input" id="phone" v-model="phone" type="tel" required />
      </div>
      <div v-else>
        <label class="form__label" for="companyName">Razão social:</label>
        <input class="form__input" id="companyName" v-model="companyName" type="text" required />
        <label class="form__label" for="cnpj">CNPJ:</label>
        <input class="form__input" id="cnpj" v-model="cnpj" type="text" required />
        <label class="form__label" for="openingDate">Data de abertura:</label>
        <input class="form__input" id="openingDate" v-model="openingDate" type="date" required />
        <label class="form__label" for="companyPhone">Telefone:</label>
        <input class="form__input" id="companyPhone" v-model="companyPhone" type="tel" required />
      </div>
      <button class="form__button form__button--secondary" type="button" @click="$emit('prev-step')">Voltar</button>
      <button class="form__button" type="submit">Continuar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['date'])
const emit = defineEmits(['next-step']);

const type = ref(props.date.type);

const name = ref('');
const cpf = ref('');
const birthDate = ref('');
const phone = ref('');

const companyName = ref('');
const cnpj = ref('');
const openingDate = ref('');
const companyPhone = ref('');

function handleSubmit() {
  if (type.value === 'PF' && name.value && cpf.value && birthDate.value && phone.value) {
    emit('next-step', { name: name.value, cpf: cpf.value, birthDate: birthDate.value, phone: phone.value });
  } else if (type.value === 'PJ' && companyName.value && cnpj.value && openingDate.value && companyPhone.value) {
    emit('next-step', { companyName: companyName.value, cnpj: cnpj.value, openingDate: openingDate.value, companyPhone: companyPhone.value });
  }
}
</script>
