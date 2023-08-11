<template>
    <div class="home-container" id="home-container">
        <div class="container">
            <div class="home-presentation-content">
                <img src="../assets/power-stones-logo.png" class="img-fluid site-logo" />
                <h3 class="home-phrase">“Existem coisas no universo que não podem ser explicadas, apenas vividas”</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "homePresentation"
}
</script>
<style scoped>
.home-container {
    background-image: url("https://images6.alphacoders.com/639/639813.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 60vh;
    width: 100vw;
}

.site-logo {
    width: 30em;
}

.container {
    height: 100%;
}

.home-presentation-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.subtitle, .home-phrase {
    color: white;
}

</style>