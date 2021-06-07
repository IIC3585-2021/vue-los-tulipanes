<template>
  <div class="card-content">
    <h2>{{ cat.name }}</h2>
    <h4>{{ cat.origin }}</h4>
    <div class="image">
      <img v-if="url" :src="url" />
    </div>
    <div class="info">
      <p>{{ cat.description }}</p>
      <p>Temperament: {{ cat.temperament }}</p>
    </div>
  </div>
  <div class="buttons-container">
    <div class="buttons">
      <NoButton :id="cat.id" />
      <YesButton :id="cat.id" />
    </div>
  </div>
</template>

<script>
import YesButton from './buttons/YesButton.vue';
import NoButton from './buttons/NoButton.vue';
export default {
  props: { cat: Object, url: String },
  components: { YesButton, NoButton },
};
</script>

<style>
.card-content {
  overflow: scroll;
}

.card-content h2 {
  font-size: 2em;
  margin-bottom: -0.5em;
}

.card-content h4 {
  font-weight: 500;
  font-size: 1.2rem;
}

.info {
  font-size: 1.1rem;
  width: 80%;
  margin: auto;
  text-align: justify;
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

.image {
  height: auto;
  margin: auto;
  margin-bottom: 2rem;
  text-align: center;
}

.image img {
  width: auto;
  height: 20rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>