<script>
    export default {
        name: 'UpperBar',
        
    }
        
</script>

<template>
    <div class="component-container">
        <div class="container">
            <div class="logo">
                <img src="../assets/img/logo_yugioh.jpeg" alt="">
            </div>
            <h1>
                Yu-Gi-Oh Api
            </h1>
        </div>
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.component-container {
    height: 5vh;
    width: 100%;

    .container {
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: center;

        .logo {
            width: 2%;
            margin-right: 1%;

            img {
            width: 100%;
        }
        }
    }
}

    
</style>