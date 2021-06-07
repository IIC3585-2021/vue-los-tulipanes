import { createStore } from 'vuex';
import { getCatData, getCatImageUrl } from './api';

const likeStatus = {
  disliked: 0,
  neutral: 1,
  liked: 2,
}

export const store = createStore({
  state() {
    return {
      cats: [],
      catImages: {},
      hasLoaded: false
    }
  },

  getters: {
    firstNeutralCat: (state) => {
      return state.cats.find((cat) => cat.liked === likeStatus.neutral);
    },
    catImage: (state) => (catId) => {
      return state.catImages[catId]
    },
    hasLoaded: (state) => {
      return state.hasLoaded;
    },
    likedCatNames: (state) => {
      return state.cats.filter((cat) => cat.liked === likeStatus.liked).map((cat) => cat.name)
    }
  },

  mutations: {
    like(state, catId) {
      const cat = state.cats.find((cat) => cat.id === catId)
      cat.liked = likeStatus.liked;
    },

    dislike(state, catId) {
      const cat = state.cats.find((cat) => cat.id === catId)
      cat.liked = likeStatus.disliked;
    },

    add(state, cat) {
      state.cats.push({ ...cat, liked: likeStatus.neutral });
      state.hasLoaded = true;
    },

    addImg(state, { catId, imageUrl }) {
      state.catImages[catId] = imageUrl;
    }
  },

  actions: {
    async loadImage({ commit }, catId) {
      const imageUrl = await getCatImageUrl(catId);
      commit('addImg', { catId, imageUrl })
    },

    async load({ commit, dispatch }) {
      const cats = await getCatData();
      await Promise.all(cats.map(async (cat) => {
        commit('add', cat)
        await dispatch('loadImage', cat.id)
      }))
    },
  }
})