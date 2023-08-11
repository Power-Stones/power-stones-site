<template>
    <div class="container">
        <headerSite />
        <homePresentation />
        <charactersComponent />
        <div class="teste-fontes">
            <h1>Power stones</h1>
            <h2>Power stones</h2>
            <h3>Power stones</h3>
            <h4>Power stones</h4>
            <h5>Power stones</h5>
            <h6>Power stones</h6>
            <p>Entre nesse universo</p>
            <span>Entre nesse universo</span>
        </div>
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