<script>


//import dello store
import { store } from '../store';

    export default {
        name: 'SelectArchetype',
        data() {
            return {
                store,
            }
        }
    }
        
</script>

<template>
    <div class="card-archetype">
        <select name="archetype" class="archetype" @change="$emit('search')" v-model="store.searchCard">
            <option value="" >---</option>
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypeList" :key="archetype.archetype_name">{{ archetype.archetype_name }} </option>
        </select>
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

    .card-archetype {
        width: 80%;
        margin: 1% auto;
        padding-left: 10px;
        position: absolute;
        left: 10%;
        top: 8%;

    }
    .archetype {
        padding: 4px;
        outline: none;
    }
</style>