<template>
  <CardButton class="no-button">
    <font-awesome-icon icon="times" size="4x" />
  </CardButton>
</template>

<script>
import CardButton from './CardButton.vue';
export default {
  name: 'NoButton',
  components: {
    CardButton,
  },
};
</script>

<style>
.no-button {
  background: var(--no-color);
}
</style>