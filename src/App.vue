<template>
  <div class="app">
    <component :is="currentStep" :date="date" @next-step="nextStep" @prev-step="prevStep" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import StepOne from './components/StepOne.vue';
import StepTwo from './components/StepTwo.vue';
import StepThree from './components/StepThree.vue';
import StepFour from './components/StepFour.vue';

const steps = [StepOne, StepTwo, StepThree, StepFour];
const currentStepIndex = ref(0);
const currentStep = computed(() => steps[currentStepIndex.value]);
const date = ref({});

function nextStep(newDate) {
  date.value = {
    ...date.value,
    ...newDate,
  };

  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++;
  }
}

function prevStep() {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
  }
}
</script>

<style></style>
