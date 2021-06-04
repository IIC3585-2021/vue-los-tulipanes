import { createStore } from 'vuex';
import { getCatData } from './api';

export const store = createStore({
  state() {
    return {
      liked: new Set(),
      disliked: new Set(),
      all: new Set(),
      remaining: new Set()
    }
  },
  mutations: {
    like(state, cat) {
      state.liked.add(cat);
      state.disliked.remove(cat);
      state.remaining.remove(cat);
    },

    dislike(state, cat) {
      state.disliked.add(cat);
      state.liked.remove(cat);
      state.remaining.remove(cat);
    },

    add(state, cat) {
      state.all.add(cat);
      state.remaining.add(cat);
    }
  },
  actions: {
    async load() {
      const cats = await getCatData();
      cats.forEach((cat) => {
        this.commit('add', cat)
      })
    },
  }
})