<template>
  <CardButton class="yes-button">
    <font-awesome-icon icon="check" size="4x" />
  </CardButton>
</template>

<script>
import CardButton from './CardButton.vue';
export default {
  name: 'YesButton',
  components: {
    CardButton,
  },
};
</script>

<style>
.yes-button {
  background: var(--yes-color);
}
</style>