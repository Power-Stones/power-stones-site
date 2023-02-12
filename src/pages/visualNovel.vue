<template>
    <div class="visual-novel-container">
        <visualNovelHeader />
        <visualNovelComponent />        
    </div>
</template>
<script>
import visualNovelHeader from "../components/visualNovelHeader.vue";
import visualNovelComponent from "../components/visualNovelComponent.vue";

export default {
    name: "visualNovel",
    components: {
        visualNovelHeader,
        visualNovelComponent
    }
}
</script>
<style scoped>
</style>