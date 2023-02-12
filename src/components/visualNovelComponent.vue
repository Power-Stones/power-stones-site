<template>
    <div class="visual-novel-component-container">
        <div class="visual-novel-frame">

        </div>
    </div>
</template>
<script>
export default {
    name: "visualNovelComponent"
}
</script>
<style scoped>
.visual-novel-frame {
    width: 95vw;
    max-width: 2000px;
    max-height: 1000px;
    height: calc(100vh - 100px);
    margin: auto;
    border-radius: 20px;
    overflow: hidden;
    background: black;
}
</style>