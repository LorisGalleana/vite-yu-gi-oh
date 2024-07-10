<script>


//import dello store
import { store } from '../store';

    export default {
        name: 'SelectArchetype',
        components: {
            /* CardFound,
            SingleCard, */
        },
        data() {
            return {
                store,
            }
        }
    }
        
</script>

<template>
    <div class="card-archetype">
        <select name="archetype" class="archetype">
            <option value="neutral">---</option>
            <option value="store.archetypeList" v-for="archetype in store.archetypeList" :key="archetype.archetype_name">{{ archetype.archetype_name }} </option>
        </select>
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

    .card-archetype {
        width: 80%;
        margin: 1% auto;
        padding-left: 10px;

    }
    .archetype {
        padding: 4px;
        outline: none;
    }
</style>