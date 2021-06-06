<template>
  <CardButton v-on:click="this.$store.commit('like', cat)" class="yes-button">
    <font-awesome-icon icon="check" size="4x" />
  </CardButton>
</template>

<script>
// TODO: cambiar cat de String a Object
import CardButton from './CardButton.vue';
export default {
  name: 'YesButton',
  props: { cat: String },
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