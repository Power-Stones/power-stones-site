<template>
    <div class="create-chapter">
        <div class="chapter-image">
            <img :src="urlChapterId == null ? chapter.level_background : require('@/assets/img/upload-photo.png')" class="img-fluid">
            <button type="button" class="btn primary" v-on:click="changeChapterBackground()">Alterar background</button>
            <input type="file" id="background-file" style="display: none;">
        </div>
        <div class="chapter-informations">
            <form id="chapter-form">
                <input type="text" id="chapter-title" name="chapter_title" placeholder="Título" :value="urlChapterId != null ? chapter.title : ''">
                <input type="text" id="chapter-number" name="chapter_number" placeholder="Numero capítulo. Ex: Capítulo 1" :value="urlChapterId != null ? chapter.subtitle : ''">
                <div class="is-final-chapter">
                    <p>É o capítulo final?</p>
                    <ul>
                        <li>
                            <input type="radio" name="is_final" id="final-yes" value="true" :checked="urlChapterId != null && chapter.is_final_level == 1">
                            <label for="final-yes">Sim</label>
                        </li>
                        <li>
                            <input type="radio" name="is_final" id="final-no" value="false" :checked="urlChapterId != null && chapter.is_final_level == 0">
                            <label for="final-no">Não</label>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
        <div class="footer-buttons">
            <button type="button" class="btn" v-on:click="cancel()">Cancelar</button>
            <button type="button" class="btn primary" v-on:click="create()">Criar</button>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "createChapter",
    data() {
        return {
            chapter: {
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
            urlChapterId: null
        }
    },
    methods: {
        cancel: function () {
            this.$router.push("/admin");
        },
        create: function () {
            let data = $("#chapter-form").serializeArray().reduce(function (obj, item) { // Pega todos os dados do formulário e coloca em um objeto.
                obj[item.name] = item.value;
                return obj;
            }, {});
            console.log(data)
        },
        returnChapterIdFromUrl: function () {
            let URL = new URLSearchParams(window.location.search);
            let id = URL.get("id");
            this.urlChapterId = id;
        },
        changeChapterBackground: function () {
            let fileInput = $("#background-file");
            fileInput.click();
        }
    },
    mounted: function () {
        this.returnChapterIdFromUrl();
    }
}
</script>
<style scoped>
.chapter-image {
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

    .chapter-image img {
        margin-bottom: 1em;
    }

.create-chapter {
    display: flex;
    align-items: center;
    position: relative;
}

    .create-chapter > div {
        margin: 1em;
    }

.is-final-chapter {
    margin-top: 1em;
}

    .is-final-chapter p {
        margin: 0;
    }

    .is-final-chapter ul {
        list-style: none;
        margin: 0;
    }

        .is-final-chapter ul li {
            display: flex;
            align-items: center;
            width: fit-content;
            cursor: pointer;
        }

            .is-final-chapter ul li label {
                margin: 0;
                cursor: pointer;
            }

            .is-final-chapter ul li input {
                margin-right: .3em;
                cursor: pointer;
            }

.footer-buttons {
    position: absolute;
    bottom: -5rem;
    right: 0;
    display: flex;
    align-items: center;
}

@media (max-width: 720px) {
    .create-chapter {
        flex-direction: column;
    }
}
</style>