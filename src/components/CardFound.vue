<script>
    export default {
        name: 'CardFound',
        
    }
        
</script>

<template>
    <div class="found-container">
        Found 39 cards
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