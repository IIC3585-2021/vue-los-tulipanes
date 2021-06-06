<template>
  <CardButton v-on:click="this.$store.commit('dislike', cat)" class="no-button">
    <font-awesome-icon icon="times" size="4x" />
  </CardButton>
</template>

<script>
// TODO: cambiar cat de String a Object
import CardButton from './CardButton.vue';
export default {
  name: 'NoButton',
  props: { cat: String },
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