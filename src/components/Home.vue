<template>
  <Header />
  <Card>
    <CardContent :cat="cat" v-if="cat" :url="url" />
    <div v-else-if="!hasLoaded" id="loading">Loading...</div>
    <EndPage v-else />
  </Card>
</template>

<script>
import Header from './Header.vue';
import Card from './Card.vue';
import EndPage from './EndPage.vue';
import CardContent from './CardContent.vue';

export default {
  name: 'Home',
  components: { Header, Card, EndPage, CardContent },
  computed: {
    cat() {
      return this.$store.getters.firstNeutralCat;
    },
    url() {
      return this.$store.getters.catImage(this.cat.id);
    },
    hasLoaded() {
      return this.$store.getters.hasLoaded;
    },
  },
  async mounted() {
    await this.$store.dispatch('load');
  },
};
</script>

<style>
#loading {
  text-align: center;
}
</style>