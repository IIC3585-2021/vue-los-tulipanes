import { createStore } from 'vuex';
import { getCatData } from './api';

const likeStatus = {
  disliked: 0,
  neutral: 1,
  liked: 2,
}

export const store = createStore({
  state() {
    return {
      cats: []
    }
  },

  getters: {
    firstNeutralCat: (state) => {
      return state.cats.find((cat) => cat.liked === likeStatus.neutral);
    }
  },

  mutations: {
    like(state, catId) {
      state.cats.find((cat) => cat.id === catId).liked = likeStatus.liked;
    },

    dislike(state, catId) {
      state.cats.find((cat) => cat.id === catId).liked = likeStatus.disliked;
    },

    add(state, cat) {
      state.cats.push({ ...cat, liked: likeStatus.neutral });
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