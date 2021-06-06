<template>
  <CardButton v-on:click="this.$store.commit('dislike', id)" class="no-button">
    <font-awesome-icon icon="times" size="4x" />
  </CardButton>
</template>

<script>
import CardButton from './CardButton.vue';
export default {
  name: 'NoButton',
  props: { id: String },
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