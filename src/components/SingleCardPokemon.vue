<script>
    export default {
        name: 'SingleCard',
        props:['info'],
        
    }
        
</script>

<template>
    <div class="card">
        <img :src="info.images.small" alt="">
        <div class="details">
            <h4>{{info.name}}</h4>
            <div>{{info.types ? info.types[0] : 'No type'}}</div>
        </div>

    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variable' as *;

.card {
    text-align: center;
    background-color: $bg-color;
}
img {
    width: 100%;
}
.details {
    height: 100px;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 15px;
    
}
h4 {
    margin: 2% 0;
    color: white;
}
</style>