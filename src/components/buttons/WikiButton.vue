<template>
  <CardButton v-on:click="this.$store.commit('dislike', id)" class="wiki-button">
    <font-awesome-icon  size="4x" />
  </CardButton>
</template>

<script>
import CardButton from './CardButton.vue';
export default {
  name: 'WikiButton',
  props: { id: String },
  components: {
    CardButton,
  },
};
</script>

<style>
.wiki-button {
  background: var(orange);
  color: orange;
  border-radius: 5%;
}
</style>