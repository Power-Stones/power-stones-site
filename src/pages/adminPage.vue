<template>
    <div class="admin-page page">
        <div class="background-default"></div>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/power-stones-logo.png" class="inicial-logo">
            </router-link>
        </div>
        <div class="admin-container">
            <div class="admin-item">
                <h2>Capítulos</h2>
                <div class="chapters-container">
                    <chapterComponent :chapter="chapter" v-for="chapter in chapters" :key="chapter.chapter_id" @select_chapter="selectChapter($event)" @deselect_chapter="deselectChapter($event)" />
                    <i class="fas fa-plus" v-on:click="createChapter()"></i>
                </div>
            </div>
            <div class="admin-item">
                <h2>Cenas</h2>
                <div class="scenes-container">
                    <sceneComponent :scene="scene" v-for="scene in scenes" :key="scene.id_scene" @select_scene="selectScene($event)" @deselect_scene="deselectScene($event)" />
                </div>
            </div>
            <div class="footer-buttons">
                <button type="button" class="btn primary" v-on:click="editScene()" v-if="selectedScene != null">Editar cena</button>
                <button type="button" class="btn primary" v-on:click="editChapter()" v-if="selectedChapter != null">Editar capítulo</button>
            </div>
        </div>
    </div>
</template>
<script>
import chapterComponent from "../components/chapterComponent.vue";
import sceneComponent from "../components/sceneComponent.vue";

export default {
    name: "adminPage",
    data() {
        return {
            selectedChapter: null,
            selectedScene: null,
            scenes: null,
            chapters: [
                {
                    chapter_id: 1,
                    level_background: "https://img.freepik.com/fotos-premium/uma-garota-com-um-vestido-vermelho-e-um-laco-na-cabeca_713888-4745.jpg?w=2000",
                    title: "Jack! Mike! Tony!",
                    scenes: [
                        {
                            id_scene: 1,
                            src: "https://4kwallpapers.com/images/wallpapers/anime-girl-girly-2048x1536-9793.jpg"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        editChapter: function () {
            console.log("Editar capítulo " + this.selectedChapter.chapter_id);
        },
        editScene: function () {
            console.log("Editar cena " + this.selectedScene.id_scene);
        },
        createChapter: function () {
            console.log("Criar capítulo")
        },
        selectChapter: function (event) {
            this.selectedChapter = this.chapters.filter((chapter) => chapter.chapter_id == event);
            this.scenes = this.selectedChapter[0].scenes;
            console.log(event)
        },
        deselectChapter: function (event) {
            this.selectedChapter = null;
            this.scenes = null;
            console.log(event);
        },
        selectScene: function (event) {
            this.selectedScene = this.scenes.filter((scene) => scene.id_scene == event);
            console.log(event)
        },
        deselectScene: function (event) {
            this.selectedScene = null;
            console.log(event);
        }
    },
    components: {
        chapterComponent,
        sceneComponent
    }
}
</script>