import { createStore } from 'vuex';
import { getCatData } from './api';

export const store = createStore({
  state() {
    return {
      liked: new Set(),
      disliked: new Set(),
      all: new Set()
    }
  },
  mutations: {
    like(state, cat) {
      state.liked.add(cat);
      state.disliked.remove(cat);
    },
    dislike(state, cat) {
      state.disliked.add(cat);
      state.liked.remove(cat);
    },
    add(state, cat) {
      state.all.add(cat);
    }
  },
  actions: {
    async load() {
      this.commit('add', getCatData())
    },
  }
})