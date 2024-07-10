<script>

//import dello store
import { store } from '../store';

    export default {
        name: 'CardFound',
        data() {
            return {
                store,
            }
        },
        computed: {
            resultNumber() {
                return store.cardList.length;
            }
        }
        
    }
    
        
</script>

<template>
    <div class="found-container">
        Trovate {{resultNumber}} carte
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.found-container {
    color: white;
    width: 80%;
    height: 40px;
    margin: 0 auto;
    background-color: black;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding-left: 1%;
}
    
</style>