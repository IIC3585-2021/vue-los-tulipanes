<template>
  <Header />
  <Card :cat="cat" v-if="cat" />
  <div v-else>No quedan gatos</div>
</template>

<script>
import Header from './Header.vue';
import Card from './Card.vue';

export default {
  name: 'Home',
  components: { Header, Card },
  computed: {
    cat() {
      return this.$store.getters.firstNeutralCat;
    },
  },
  async mounted() {
    await this.$store.dispatch('load');
  },
};
</script>

<style>
</style>