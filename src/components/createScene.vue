<template>
    <div class="create-scene">
        <div class="image-group-container">
            <div class="scene-image">
                <img :src="urlSceneId == null ? scene.src : require('@/assets/img/upload-photo.png')" class="img-fluid">
                <button type="button" class="btn primary" v-on:click="changeSceneBackground()">Alterar background</button>
                <input type="file" id="background-file" style="display: none;">
            </div>
            <div class="scene-informations">
                <form id="scene-form">
                    <input type="text" id="scene-title" name="scene_title" placeholder="Título" :value="urlSceneId != null ? scene.title : ''">
                    <textarea type="text" id="scene-text" name="scene_text" placeholder="Texto da cena" :value="urlSceneId != null ? scene.text : ''"></textarea>
                    <div class="is-final-scene">
                        <p>É a cena final?</p>
                        <ul>
                            <li>
                                <input type="radio" name="is_final" value="true" :checked="urlSceneId != null && scene.is_final_scene == 1">
                                <label for="final-yes">Sim</label>
                            </li>
                            <li>
                                <input type="radio" name="is_final" value="false" :checked="urlSceneId != null && scene.is_final_scene == 0">
                                <label for="final-no">Não</label>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
        <div class="other-scene-informations">
            <div class="other-informations-container" v-if="chapterScenes.length > 1">
                <form id="next-scene">
                    <h2>Próxima cena</h2>
                    <div class="scenes-container">
                        <div class="scenes-inner" v-for="sceneItem in chapterScenes" :key="sceneItem.id_scene">
                            <sceneComponent :scene="sceneItem" parentElementId="next-scene" @select_scene="selectNextScene($event)" v-if="sceneItem.id_scene != scene.id_scene" />
                        </div>
                    </div>
                    <p>A próxima cena é uma continuação dessa?</p>
                    <ul>
                        <li>
                            <input type="radio" name="next_is_continuation" value="true" :checked="urlSceneId != null && scene.have_next_scene == 1">
                            <label for="final-yes">Sim</label>
                        </li>
                        <li>
                            <input type="radio" name="next_is_continuation" value="false" :checked="urlSceneId != null && scene.have_next_scene == 0">
                            <label for="final-no">Não</label>
                        </li>
                    </ul>
                </form>
            </div>
            <div class="other-informations-container">
                <form id="scene-choices">
                    <h2>A cena terá escolhas?</h2>
                    <ul>
                        <li>
                            <input type="radio" name="have_choices" value="true" v-on:click="setHaveChoices(true)" :checked="urlSceneId != null && scene.text_choice_1 != ''">
                            <label for="final-yes">Sim</label>
                        </li>
                        <li>
                            <input type="radio" name="have_choices" value="false" v-on:click="setHaveChoices(false)" :checked="urlSceneId != null && scene.text_choice_1 == ''">
                            <label for="final-no">Não</label>
                        </li>
                    </ul>
                    <div class="choices-container" v-if="haveChoices">
                        <input type="text" name="choice_1" :value="scene.text_choice_1" placeholder="Escolha 1">
                        <p>Próxima cena baseada na escolha</p>
                        <div class="scenes-container" id="choice-1-scenes">
                            <div class="scenes-inner" v-for="sceneItem in chapterScenes" :key="sceneItem.id_scene">
                                <sceneComponent :scene="sceneItem" parentElementId="choice-1-scenes" @select_scene="selectNextSceneChoice1($event)" v-if="sceneItem.id_scene != scene.id_scene" />
                            </div>
                        </div>
                        <input type="text" name="choice_2" :value="scene.text_choice_2" placeholder="Escolha 2">
                        <p>Próxima cena baseada na escolha</p>
                        <div class="scenes-container" id="choice-2-scenes">
                            <div class="scenes-inner" v-for="sceneItem in chapterScenes" :key="sceneItem.id_scene">
                                <sceneComponent :scene="sceneItem" parentElementId="choice-2-scenes" @select_scene="selectNextSceneChoice2($event)" v-if="sceneItem.id_scene != scene.id_scene" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="other-informations-container">
                <h2>Personagens</h2>
                <div class="characters">
                    <input type="file" id="characters-file-input" style="display: none;">
                    <div class="character" v-for="(character, index) in scene.characters" :key="index" :id="'character-' + index">
                        <div class="character-img">
                            <p>Personagem #{{ index + 1 }}</p>
                            <img :src="character.src != '' ? character.src : require('@/assets/img/upload-photo.png')" >
                            <button class="btn primary" v-on:click="changeCharacterImage(index)">Alterar</button>
                        </div>
                        <div class="character-configuration">
                            <div class="main-configuration">
                                <div class="active">
                                    <input type="checkbox" :checked="character.active == 1">
                                    <label>Ativo</label>
                                </div>
                                <div class="exists">
                                    <input type="checkbox" :checked="character.src != ''"> <!-- Se não tiver marcado, ignora as configurações do personagem e salva como default vazio -->
                                    <label>Existe</label>
                                </div>
                            </div>
                            <div class="other-configurations">
                                <ul>
                                    <li>
                                        <p>Direção</p>
                                    </li>
                                    <li>
                                        <input type="radio" name="direction" value="true" :checked="chooseDirection(character.direction, 1)">
                                        <label>Esquerda</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="direction" value="true" :checked="chooseDirection(character.direction, 2)">
                                        <label>Meio esquerda</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="direction" value="true" :checked="chooseDirection(character.direction, 3)">
                                        <label>Meio direita</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="direction" value="true" :checked="chooseDirection(character.direction, 4)">
                                        <label>Direita</label>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p>Animação</p>
                                    </li>
                                    <li>
                                        <input type="radio" name="animation" value="true" :checked="character.entrance_animation == 1">
                                        <label>Animação de entrada</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="direction" value="true" :checked="character.exit_animation == 1">
                                        <label>Animação de saida</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="direction" value="true" :checked="character.withoutAnimation == 1">
                                        <label>Sem animação</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-buttons">
            <button type="button" class="btn" v-on:click="cancel()">Cancelar</button>
            <button type="button" class="btn primary" v-on:click="create()">Criar</button>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import sceneComponent from "./sceneComponent.vue";

export default {
    name: "createChapter",
    data() {
        return {
            haveChoices: false,
            scene: {
                id_scene: 1,
                src: "https://4kwallpapers.com/images/wallpapers/anime-girl-girly-2048x1536-9793.jpg",
                characters: [
                    {
                        src: "https://uploaddeimagens.com.br/images/004/568/129/full/taiga-teste.png?1691342202",
                        active: 1,
                        direction: "left",
                        entrance_animation: 1,
                        exit_animation: 0,
                        withoutAnimation: 0
                    },
                    {
                        src: "",
                        active: 0,
                        direction: "",
                        entrance_animation: 0,
                        exit_animation: 0,
                        withoutAnimation: 0
                    },
                    {
                        src: "",
                        active: 0,
                        direction: "",
                        entrance_animation: 0,
                        exit_animation: 0,
                        withoutAnimation: 0
                    },
                    {
                        src: "",
                        active: 0,
                        direction: "",
                        entrance_animation: 0,
                        exit_animation: 0,
                        withoutAnimation: 0
                    }
                ],
                title: "Ana",
                text: "Como você pode fazer isso, Jack? Eu ... Eu confiei em você! Eu vivia com desespero e desgosto desse doutor Carlos, e agora você faz isso? A gente não pode confiar em ninguém mais!",
                is_final_scene: 0,
                have_next_scene: 0,
                next_scene_id: 2,
                choice_1_next_scene_id: 0,
                choice_2_next_scene_id: 0,
                text_choice_1: "",
                text_choice_2: ""
            },
            chapterScenes: [
                {
                    id_scene: 2,
                    src: "https://4kwallpapers.com/images/wallpapers/anime-girl-girly-2048x1536-9793.jpg"
                },
                {
                    id_scene: 3,
                    src: "https://4kwallpapers.com/images/wallpapers/anime-girl-girly-2048x1536-9793.jpg"
                }
            ],
            nextSceneId: null,
            nextSceneChoice1Id: null,
            nextSceneChoice2Id: null,
            urlSceneId: null,
            urlChapterId: null
        }
    },
    methods: {
        chooseDirection: function (direction, inputNumber) {
            switch (direction) {
                case 'left':
                    if (inputNumber == 1) {
                        return true;
                    }
                    break;
                case 'left2':
                    if (inputNumber == 2) {
                        return true;
                    }
                    break;
                case 'right2':
                    if (inputNumber == 3) {
                        return true;
                    }
                    break;
                case 'right':
                    if (inputNumber == 4) {
                        return true;
                    }
                    break;
                default: 
                    return false;
            }
        },
        changeCharacterImage: function () {
            let fileInput = $("#characters-file-input");
            fileInput.click();
        },
        setHaveChoices: function (state) {
            this.haveChoices = state;
        },
        selectNextScene: function (event) {
            let selectedScene = this.selectScene(event);
            this.nextSceneId = selectedScene.id_scene;
        },
        selectNextSceneChoice1: function (event) {
            let selectedScene = this.selectScene(event);
            this.nextSceneChoice1Id = selectedScene.id_scene;
        },
        selectNextSceneChoice2: function (event) {
            let selectedScene = this.selectScene(event);
            this.nextSceneChoice2Id = selectedScene.id_scene;
        },
        selectScene: function (id) {
            return this.chapterScenes.filter((scene) => scene.id_scene == id)[0];
        },
        cancel: function () {
            this.$router.push("/admin");
        },
        create: function () {
            let data = $("#scene-form").serializeArray().reduce(function (obj, item) { // Pega todos os dados do formulário e coloca em um objeto.
                obj[item.name] = item.value;
                return obj;
            }, {});
            console.log(data)
        },
        returnSceneIdFromUrl: function () {
            let URL = new URLSearchParams(window.location.search);
            let id = URL.get("id");
            let chapterId = URL.get("chapterId");
            this.urlSceneId = id;
            this.urlChapterId = chapterId;
        },
        changeSceneBackground: function () {
            let fileInput = $("#background-file");
            fileInput.click();
        }
    },
    mounted: function () {
        this.returnSceneIdFromUrl();
        this.setHaveChoices(this.scene.text_choice_1 != '' ? true : false);
    },
    components: {
        sceneComponent
    }
}
</script>
<style scoped>
.scene-image {
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

    .scene-image img {
        margin-bottom: 1em;
    }

.image-group-container {
    display: flex;
    align-items: center;
    position: relative;
}

    .image-group-container > div {
        margin: 1em;
    }

.scenes-container {
    display: flex;
}

.other-informations-container {
    margin: 2em 0;
}

.is-final-scene {
    margin-top: 1em;
}

p {
    margin: 0;
}

ul {
    list-style: none;
    margin: 0;
}

    ul li {
        display: flex;
        align-items: center;
        width: fit-content;
        cursor: pointer;
        white-space: nowrap;
    }

        ul li label {
            margin: 0;
            cursor: pointer;
        }

        ul li input {
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

.character-img {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2em;
}

    .character-img img {
        width: 9rem;
        height: 15rem;
        object-fit: contain;
        border: 2px solid var(--gray);
        border-radius: 10px;
    }

.character {
    margin: 3em 0;
}

.character, .active, .exists, .other-configurations {
    display: flex;
}

.other-configurations {
    margin-top: 1em;
}

    .other-configurations ul {
        margin: 0 1em;
    }

.active, .exists {
    width: fit-content;
}

    .active input, .exists input {
        margin-right: 5px;
    }

.character-configuration {
    width: 30vw;
    max-width: 500px;
    min-width: 180px;
}

.other-scene-informations {
    margin: 1em;
}

@media (max-width: 720px) {
    .create-chapter {
        /*flex-direction: column;*/
    }
}
</style>