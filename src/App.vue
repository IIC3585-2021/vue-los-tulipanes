<template>
  <Home />
</template>

<script>
import { computed } from '@vue/runtime-core';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
  async mounted() {
    await this.$store.dispatch('load');
    return {
      cats: computed(() => this.$store.state.all),
    };
  },
};
</script>

<style>
:root {
  --background-color: #fffce8;
  --text-color: #3e363f;
  --yes-color: #4f9d69;
  --no-color: #dd403a;
  --photo-color: #fbfffe;
}
body {
  background: var(--background-color);
  color: var(--text-color);
}
</style>
