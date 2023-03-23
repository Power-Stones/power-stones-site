<template>
    <div class="home-container" id="home-container">
        <div class="container">
            <div class="home-presentation-content">
                <img src="../assets/power-stones-teste-5.png" class="img-fluid site-logo" />
                <p class="subtitle pb-5">In the world</p>
                <p class="home-phrase">“Existem coisas no universo que não podem ser explicadas, apenas vividas”</p>
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
    height: 100vh;
    width: 100vw;
}

.site-logo {
    width: calc(50vw + 3rem);
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

.subtitle {
    font-size: 2.7rem;
}

.home-phrase {
    font-size: 1.5rem;
}

</style>