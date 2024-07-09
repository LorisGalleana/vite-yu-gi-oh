<script>
import CardFound from './CardFound.vue'
import SingleCard from './SingleCard.vue'

//import dello store
import { store } from '../store';

    export default {
        name: 'CardContainer',
        components: {
            CardFound,
            SingleCard,
        },
        data() {
            return {
                store,
            }
        }
    }
        
</script>

<template>
    <div class="card-container">
        <CardFound  />
        <div class="row">
            <div v-for="card in store.cardList" :key="card.id" class="cards">
                <SingleCard :info="card"  />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.card-container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding: 2% 0;
    background-color: white;
    overflow: auto;
    
}
.row {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.cards {
    width: calc(100% / 5 - 20px);
}
    
</style>