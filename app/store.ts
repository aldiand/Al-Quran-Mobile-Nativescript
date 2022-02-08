import Vue from 'vue'
import Vuex from 'vuex'
import * as datasurah from './assets/json/surah.json'
import { quranDetail } from './utils/api'
import { STORAGE_KEY_SURAH } from './constants/storage'
import { getState, saveState } from './utils/storage'
import { Http } from "@nativescript/core";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surah: getState(STORAGE_KEY_SURAH) || datasurah.data,
    currentSurahId: 0 
  },
  mutations: {
    read (state, id) {
      state.currentSurahId = id
    },
    updateAyat (state, data) {
      state.surah = state.surah.map(item => {
        if (item.id == state.currentSurahId) {
          return Object.assign({}, item, data)
        }
        return item
      })
    }
  },
  getters: {
    readSurah: state => {
      return state.surah.find(surah => surah.id == state.currentSurahId)
    }
  },
  actions: {
    getAyat ({commit, getters, state}) {
      const surah = getters.readSurah
      Http.getJSON(quranDetail(surah.id, surah.count_ayat)).then((r: any) => {
        commit('updateAyat', r)
        saveState(STORAGE_KEY_SURAH, state.surah)
      }, (e) => {
          console.log(e)
      })
    }
  }
});
