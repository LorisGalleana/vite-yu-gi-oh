<script>
import axios from 'axios'

import UpperBar from './components/UpperBar.vue'
import MainPage from './components/MainPage.vue'

//import dello store
import { store } from './store';

export default {
  name: "App",
  components: {
    UpperBar,
    MainPage,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios.
        get(store.apiURL)
        .then(res => {
          console.log(res.data.data);
          store.cardList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        })
    },
    getArchetype() {
      axios.
        get(store.archetypeURL)
        .then(res => {
          console.log(res.data);
          store.archetypeList = res.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
      this.getCards();
      this.getArchetype();
    }
}

</script>

<template>
  <UpperBar  />
  <MainPage  />
</template>

<style lang="scss">
@use './style/general.scss';

</style>
