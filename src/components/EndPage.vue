<template>
  <h2>Your liked cats:</h2>
  <div id="cat-list">
    <div v-for="cat in cats" v-bind:key="cat" class="cat">
      <p>{{ cat }}</p>
    </div>
  </div>
  <div id="end">
    <h2>Want to know when they're available for adoption?</h2>
    <div id="form">
      <input v-model="mail" placeholder="Your email here" />
      <button @click="reloadPage">
        <font-awesome-icon icon="check" size="2x" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EndPage',
  data() {
    return {
      mail: '',
    };
  },
  computed: {
    cats() {
      return this.$store.getters.likedCatNames;
    },
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
#cat-list {
  overflow: scroll;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 1.2rem;
}

#cat-list .cat p {
  margin: 0.2em 0em;
}

#end {
  text-align: center;
  margin-bottom: 1em;
}

#form {
  display: flex;
  align-content: flex-end;
  justify-content: center;
}
</style>