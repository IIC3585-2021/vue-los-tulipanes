<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue';
export default {
  name: 'App',
  components: {
    Home,
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
