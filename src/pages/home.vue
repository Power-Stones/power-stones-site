<template>
    <div class="container">
        <headerSite />
        <homePresentation />
        <charactersComponent />
        <visualNovelHomeComponent />
        <aboutComponent />
        <footerSite />
    </div>
</template>
<script>
import headerSite from "../components/headerSite.vue";
import homePresentation from "../components/homePresentation.vue";
import charactersComponent from "../components/charactersComponent.vue";
import footerSite from "../components/footerSite.vue";
import visualNovelHomeComponent from "../components/visualNovelHomeComponent.vue";
import aboutComponent from "../components/aboutComponent.vue";

export default {
    name: "homeSite",
    components: {
        headerSite,
        homePresentation,
        charactersComponent,
        visualNovelHomeComponent,
        aboutComponent,
        footerSite
    }
}
</script>
<style scoped>

</style>