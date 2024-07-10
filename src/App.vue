<script>
import axios from 'axios'

import UpperBar from './components/UpperBar.vue'
import MainPage from './components/MainPage.vue'
import SelectArchetype from './components/SelectArchetype.vue'

//import dello store
import { store } from './store';

export default {
  name: "App",
  components: {
    UpperBar,
    MainPage,
    SelectArchetype
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      let endPoint = store.apiURL;

      if(store.searchCard !== '') {
        endPoint += `&${store.apiArchetypeParam}=${store.searchCard}`
      }

      axios.
        get(endPoint)
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
          /* console.log(res.data); */
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
  <SelectArchetype @search="getCards" />
  <MainPage  />
</template>

<style lang="scss">
@use './style/general.scss';

</style>
