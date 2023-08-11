<template>
    <div class="visual-novel-home-component mb-5" id="visual-novel-container">
        <div class="container">
            <div class="page-title mb-3">
                <h2>Experimente a visual novel</h2>
            </div>
            <div class="visual-novel-container" v-on:click="goToVisualNovel()">
                <img src="https://images6.alphacoders.com/639/639813.jpg" alt="">
                <i class="fas fa-play"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "visualNovelHomeComponent",
    methods: {
        goToVisualNovel: function () {
            this.$router.push("/visual-novel");
        }
    }
}
</script>
<style scoped>
.visual-novel-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: fit-content;
    margin: auto;
    cursor: pointer;
}

    .visual-novel-container::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .visual-novel-container img {
        width: 90vw;
        min-width: 200px;
        max-width: 1200px;
        border-radius: 10px;
    }

    .visual-novel-container i {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 3;
        color: white;
        width: fit-content;
        height: fit-content;
        font-size: 3rem;
        cursor: pointer;
        transition: all 0.4s;
    }

        .visual-novel-container:hover i {
            font-size: 4rem;
        }

</style>