<template>
  <div class="card">
    <div class="card-content">
      <h2>{{ cat.name }}</h2>
      <p>{{ cat.origin }}</p>
    </div>
    <div class="buttons-container">
      <div class="buttons">
        <NoButton />
        <YesButton />
      </div>
    </div>
  </div>
</template>

<script>
import YesButton from './buttons/YesButton.vue';
import NoButton from './buttons/NoButton.vue';
export default {
  name: 'Card',
  props: { cat: Object },
  components: { YesButton, NoButton },
};
</script>

<style>
.card {
  margin: auto;
  width: 50%;
  background: var(--photo-color);
  height: 48rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  overflow: scroll;
}

.card-content h2 {
  font-size: 2em;
}

.buttons-container {
  width: 100%;
}

.buttons {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
}
</style>