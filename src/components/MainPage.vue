<script>
import CardContainer from './CardContainer.vue'

//import dello store
import { store } from '../store';

    export default {
        name: 'MainPage',
        components: {
            CardContainer,
        },
        data() {
            return {
                store,
            }
        }     
    }
        
</script>

<template>
    <div class="component-container">
        <CardContainer  />
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.component-container {
    width: 100%;
    height: 95vh;
    padding: 5% 0 1%;
    background-color: $bg-color;
}
    
</style>