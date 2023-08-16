<template>
    <div class="list-entities">
        <div class="admin-item">
            <h2>Capítulos</h2>
            <div class="chapters-container">
                <chapterComponent :chapter="chapter" v-for="chapter in chapters" :key="chapter.chapter_id" @select_chapter="selectChapter($event)" />
                <i class="fas fa-plus" v-on:click="createChapter()"></i>
            </div>
        </div>
        <div class="admin-item">
            <h2>Cenas</h2>
            <div class="scenes-container" v-if="selectedChapter != null">
                <sceneComponent :scene="scene" v-for="scene in scenes" :key="scene.id_scene" @select_scene="selectScene($event)" />
                <i class="fas fa-plus" v-on:click="createScene()"></i>
            </div>
        </div>
        <div class="footer-buttons">
            <button type="button" class="btn primary" v-on:click="editScene()" v-if="selectedScene != null">Editar cena</button>
            <button type="button" class="btn primary" v-on:click="editChapter()" v-if="selectedChapter != null">Editar capítulo</button>
        </div>
    </div>
</template>
<script>
import chapterComponent from "./chapterComponent.vue";
import sceneComponent from "./sceneComponent.vue";

export default {
    name: "listChaptersAndScenes",
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
                    subtitle: "Capítulo 1",
                    is_final_level: 1,
                    scenes: [
                        {
                            id_scene: 1,
                            src: "https://4kwallpapers.com/images/wallpapers/anime-girl-girly-2048x1536-9793.jpg"
                        }
                    ]
                },
                {
                    chapter_id: 2,
                    level_background: "https://img.freepik.com/fotos-premium/uma-garota-com-um-vestido-vermelho-e-um-laco-na-cabeca_713888-4745.jpg?w=2000",
                    title: "Jack! Mike! Tony!",
                    subtitle: "Capítulo 1",
                    is_final_level: 1,
                    scenes: [
                        {
                            id_scene: 1,
                            src: "https://m.media-amazon.com/images/I/710u0rN2gkS._AC_UF1000,1000_QL80_.jpg"
                        },
                        {
                            id_scene: 2,
                            src: "https://m.media-amazon.com/images/I/710u0rN2gkS._AC_UF1000,1000_QL80_.jpg"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        editChapter: function () {
            this.$router.push("/admin/create-chapter?id=" + this.selectedChapter.chapter_id);
        },
        editScene: function () {
            console.log("Editar cena " + this.selectedScene.id_scene);
        },
        createChapter: function () {
            this.$router.push("/admin/create-chapter?id=");
        },
        selectChapter: function (event) {
            this.selectedChapter = this.chapters.filter((chapter) => chapter.chapter_id == event)[0];
            this.scenes = this.selectedChapter.scenes;
        },
        selectScene: function (event) {
            this.selectedScene = this.scenes.filter((scene) => scene.id_scene == event)[0]
            console.log(event)
        },
        createScene: function () {
            console.log("Criar cena no capítulo " + this.selectedChapter.chapter_id);
        }
    },
    components: {
        chapterComponent,
        sceneComponent
    }
}
</script>
<style scoped>
.scenes-container, .chapters-container {
    display: flex;
    align-items: center;
    overflow-x: auto;
}

.chapters-container i, .scenes-container i {
    cursor: pointer;
    font-size: 2em;
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-buttons {
    margin-top: 2em;
}

@media (min-width: 720px) {
    .footer-buttons {
        display: flex;
        width: 50vw;
        max-width: 500px;
        float: right;
    }
}
</style>