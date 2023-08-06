<template>
    <div class="visual-novel-component-container">
        <div class="visual-novel-frame">
            <div class="inicial-page animate__animated">
                <img src="https://1.bp.blogspot.com/-qn14_M4IDhE/XYWKuIxbzCI/AAAAAAAAb1s/duPwzP0HSJMh3UHsEO_EvUXDFTgxyvKiACLcBGAsYHQ/s2560/anime-sunset-scene-b8-2560x1440.jpg" class="inicial-page-background" />
                <div class="informations-div animate__animated">
                    <div class="logo">
                        <img src="../assets/power-stones-logo.png" class="inicial-logo">
                    </div>
                    <div class="actions-menu">
                        <div class="actions-menu-container">
                            <i class="fas fa-arrow-left" id="return-button" v-on:click="resetMenuNavigation()"></i>
                            <ul class="main-menu animate__animated animate__faster">
                                <li v-on:click="goToHistory(0)">Novo jogo</li>
                                <li v-if="userNovelStatus.last_level_completed > 0" v-on:click="goToHistory(userNovelStatus.last_level_completed)">Continuar</li>
                                <li v-on:click="goToOptions()">Opções</li>
                                <li>Sobre</li>
                            </ul>
                            <ul class="options-menu animate__animated animate__faster">
                                <li v-on:click="toggleFullscreen()" id="toggle-fullscreen">Tela cheia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="hero-div animate__animated">
                    <img src="https://uploaddeimagens.com.br/images/004/568/160/full/anime-waifu-test.png?1691349682">
                </div>
            </div>
            <div class="begin-chapter animate__animated">
                <img :src="currentLevel.level_background" class="begin-chapter-background" />
                <div class="begin-chapter-container">
                    <i class="fas fa-arrow-left" id="return-menu-button" v-on:click="returnToMenu()"></i>
                    <div class="logo animate__animated">
                        <img src="../assets/power-stones-logo.png" class="inicial-logo">
                    </div>
                    <div class="level-informations animate__animated">
                        <p><i>{{ currentLevel.subtitle }}</i></p>
                        <h1>{{ currentLevel.title }}</h1>
                        <div class="play-button-container" v-on:click="beginChapter()">
                            <i class="fas fa-play-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chapter animate__animated">
                <img :src="currentLevel.scenes[currentScene].background" class="chapter-background" />
                <div class="chapter-container">
                    <div class="chapter-name">
                        <img src="../assets/power-stones-logo.png">
                        <p>{{ currentLevel.chapter_id }} - {{ currentLevel.title }}</p>
                    </div>
                    <div class="interactive-scene-container" v-if="!reloadInterativeScene">
                        <div class="characters">
                            <img v-for="(character, index) in currentLevel.scenes[currentScene].characters" 
                                :key="index" 
                                :src="character.src"
                                :class="{
                                    'character-active': character.active == 1,
                                    'from-right': character.direction == 'right',
                                    'from-left': character.direction == 'left'
                                }"
                            />
                        </div>
                        <div class="interaction-container">
                            <h6>{{ currentLevel.scenes[currentScene].title }}</h6>
                            <p class="scene-text" id="scene-text"></p>
                            <i class="fas fa-caret-right next-scene" v-on:click="nextScene()"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="end-chapter animate__animated">
                <img :src="currentLevel.level_background" class="end-chapter-background" />
                <div class="end-chapter-container">
                    <i class="fas fa-home" id="return-menu-button" v-on:click="returnToMenu()"></i>
                    <div class="logo animate__animated">
                        <img src="../assets/power-stones-logo.png" class="inicial-logo">
                    </div>
                    <div class="end-level-informations animate__animated">
                        <h1>Fim do capítulo</h1>
                        <div class="actions-container">
                            <div class="action-item">
                                <i class="fas fa-redo-alt" v-on:click="restartChapter()"></i>
                                <p>Reiniciar capítulo</p>
                            </div>
                            <div class="action-item">
                                <i class="fas fa-forward"></i>
                                <p>Próximo Capítulo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "visualNovelComponent",
    data() {
        return {
            isPlayingLevel: false,
            allowToNextScene: false,
            currentScene: 0,
            reloadInterativeScene: false,
            userNovelStatus: {
                user_id: 1,
                last_level_completed: 0,
                first_phase_choice: 0,
                second_phase_choice: 0,
                third_phase_choice: 0
            },
            currentLevel: {
                chapter_id: 1,
                subtitle: "Capítulo 1",
                title: "Jack! Mike! Tony!",
                is_final_level: 1,
                level_background: "https://images5.alphacoders.com/132/1322530.png",
                scenes: [
                    {
                        background: "https://i.pinimg.com/originals/3c/7a/fc/3c7afc1b68c0f8cc367dd9d0f1f383de.jpg",
                        characters: [
                            {
                                src: "https://uploaddeimagens.com.br/images/004/568/129/full/taiga-teste.png?1691342202",
                                active: 1,
                                direction: "right"
                            },
                            {
                                src: "https://uploaddeimagens.com.br/images/004/568/129/full/taiga-teste.png?1691342202",
                                active: 0,
                                direction: "left"
                            }
                        ],
                        title: "Ana",
                        text: "Como você pode fazer isso, Jack? Eu ... Eu confiei em você! Eu vivia com desespero e desgosto desse doutor Carlos, e agora você faz isso? A gente não pode confiar em ninguém mais!",
                        is_final_scene: 0
                    },
                    {
                        background: "https://img.freepik.com/fotos-premium/tarde-por-do-sol-ceu-nuvens-paisagem-anime-background-generative-ai_117038-3743.jpg?w=2000",
                        characters: [
                            {
                                src: "https://uploaddeimagens.com.br/images/004/568/129/full/taiga-teste.png?1691342202",
                                active: 1,
                                direction: "left"
                            }
                        ],
                        title: "Jack",
                        text: "Você entendeu errado Ana! A pedra está te controlando! Por favor ... Volte para si!",
                        is_final_scene: 1
                    }
                ]
            }
        }
    },
    methods: {
        restartChapter: function () {
            this.resetAllContainers();
            let endChapter = $(".end-chapter");
            endChapter.addClass("animate__fadeOut");
            setTimeout(() => {
                endChapter.hide();
                this.beginChapter(true);
            }, 300)
        },
        beginChapter: function (fromFinal = false) {
            this.resetAllContainers();

            let beginChapter = $(".begin-chapter");
            let chapter = $(".chapter");
            if (!fromFinal) {
                beginChapter.addClass("animate__fadeOut");
                setTimeout(() => {
                    beginChapter.hide();
                }, 300);
            }
            
            setTimeout(() => {
                chapter.show().css("opacity", 0);
                setTimeout(() => {
                    chapter.addClass("animate__fadeIn").css("opacity", 1);
                    setTimeout(() => {
                        this.animateTextWithLineBreaks(this.currentLevel.scenes[this.currentScene].text);
                    }, 300)
                }, 1)
            }, 300)
        },
        animateTextWithLineBreaks: function (text) {
            const textArray = text.split(' ');
            let lineText = '';
            let currentLine = this.createSpanWithAnimation('');
            const container = document.getElementById('scene-text');
            let nextSceneButton = $(".next-scene");
            nextSceneButton.hide();

            function addWordToLine(wordIndex) {
                if (wordIndex < textArray.length) {
                    const word = textArray[wordIndex];
                    const newText = lineText === '' ? word : lineText + ' ' + word;
                    currentLine.textContent = newText;

                    if (currentLine.offsetWidth > container.offsetWidth) {
                        container.appendChild(currentLine);
                        lineText = word;
                        currentLine = this.createSpanWithAnimation(lineText);
                    } else {
                        lineText = newText;
                    }

                    container.appendChild(currentLine);
                    setTimeout(() => addWordToLine(wordIndex + 1), 100); // 100ms de atraso entre as palavras

                    if (wordIndex == textArray.length - 1) {
                        nextSceneButton.show();
                    }
                }
            }

            addWordToLine(0);
        },
        createSpanWithAnimation: function (text) {
            const span = document.createElement('span');
            span.classList.add('text');
            span.textContent = text;
            return span;
        },
        nextScene: function () {
            let characters = $(".characters img");
            characters.addClass("exit-character");
            if (this.currentLevel.scenes[this.currentScene].is_final_scene == 1) {
                console.log("entrou")
                this.endChapter();
                return;
            } else {
                setTimeout(() => {
                    this.reloadInterativeScene = true;
                    setTimeout(() => {
                        this.reloadInterativeScene = false;
                        setTimeout(() => {
                            this.animateTextWithLineBreaks(this.currentLevel.scenes[this.currentScene].text);
                        }, 1)
                        this.currentScene++;
                    }, 1)
                }, 300)
            }
        },  
        resetAllContainers: function (from_menu = false) {
            let inicialPage = $(".inicial-page");
            let informationsDiv = $(".informations-div");
            let heroDiv = $(".hero-div");
            let beginChapter = $(".begin-chapter");
            let beginChapterLogo = $(".begin-chapter-container .logo");
            let endChapter = $(".end-chapter");
            let endChapterLogo = $(".end-chapter-container .logo");
            let endLevelInformations = $(".end-level-informations");
            let chapter = $(".chapter");

            if (!from_menu) {
                inicialPage.removeClass("animate__fadeOut").removeClass("animate__fadeIn");
                informationsDiv.removeClass("animate__fadeOutLeft").removeClass("animate__fadeInRight");
                heroDiv.removeClass("animate__fadeOutRight").removeClass("animate__fadeInLeft");
            }

            beginChapter.removeClass("animate__fadeIn").removeClass("animate__fadeOut");
            beginChapterLogo.removeClass("animate__fadeInDown").removeClass("animate__fadeOutUp");
            endChapter.removeClass("animate__fadeIn").removeClass("animate__fadeOut");
            endChapterLogo.removeClass("animate__fadeInDown");
            endLevelInformations.removeClass("animate__fadeIn");
            chapter.removeClass("animate__fadeIn").removeClass("animate__fadeOut");

            this.currentScene = 0;
            this.reloadInterativeScene = true;
            setTimeout(() => {
                this.reloadInterativeScene = false;
            }, 1)
        },
        goToHistory: function (history_id) {
            console.log(history_id)
            this.resetAllContainers(true);
            let inicialPage = $(".inicial-page");
            let informationsDiv = $(".informations-div");
            let heroDiv = $(".hero-div");
            let beginChapter = $(".begin-chapter");
            let beginChapterLogo = $(".begin-chapter-container .logo");
            let levelInformations = $(".level-informations");

            informationsDiv.addClass("animate__fadeOutLeft");
            heroDiv.addClass("animate__fadeOutRight");
            setTimeout(() => {
                inicialPage.addClass("animate__fadeOut");
                setTimeout(() => {
                    inicialPage.hide();
                    beginChapter.show();
                    setTimeout(() => {
                        beginChapter.addClass("animate__fadeIn");
                        setTimeout(() => {
                            beginChapterLogo.addClass("animate__fadeInDown").css("opacity", 1);
                            setTimeout(() => {
                                levelInformations.css("opacity", 1);
                            }, 500)
                        }, 300);
                    }, 1)
                }, 500);
            }, 300);
        },
        endChapter: function () {
            // Códigos para fechar o frame do capítulo
            //this.resetAllContainers();
            let chapter = $(".chapter");
            let endChapter = $(".end-chapter");
            let endChapterLogo = $(".end-chapter-container .logo");
            let endLevelInformations = $(".end-level-informations");
            chapter.addClass("animate__fadeOut");
            setTimeout(() => {
                chapter.hide();
                endChapter.show();
                setTimeout(() => {
                    endChapter.addClass("animate__fadeIn");
                    setTimeout(() => {
                        endChapterLogo.addClass("animate__fadeInDown");
                        setTimeout(() => {
                            endLevelInformations.addClass("animate__fadeIn");
                        }, 200)
                    }, 200)
                }, 1)
            }, 300)
        },
        returnToMenu: function () {
            this.resetAllContainers();
            
            let inicialPage = $(".inicial-page");
            let informationsDiv = $(".informations-div");
            let heroDiv = $(".hero-div");
            let beginChapter = $(".begin-chapter");
            let beginChapterLogo = $(".begin-chapter-container .logo");
            let levelInformations = $(".level-informations");
            let endChapter = $(".end-chapter");

            levelInformations.css("opacity", 0);
            informationsDiv.css("opacity", 0);
            heroDiv.css("opacity", 0);
            setTimeout(() => {
                beginChapterLogo.addClass("animate__fadeOutUp").css("opacity", 0);
                setTimeout(() => {
                    beginChapter.addClass("animate__fadeOut");
                    endChapter.addClass("animate__fadeOut");
                    setTimeout(() => {
                        beginChapter.hide();
                        endChapter.hide();
                        inicialPage.show().css("opacity", 0);
                        setTimeout(() => {
                            inicialPage.addClass("animate__fadeIn");
                            setTimeout(() => {
                                informationsDiv.addClass("animate__fadeInLeft").css("opacity", 1);
                                heroDiv.addClass("animate__fadeInRight").css("opacity", 1);
                            }, 400);
                        }, 1)
                    }, 400)
                }, 400);
            }, 100);
        },
        goToOptions: function () {
            let mainMenu = $(".main-menu");
            let optionsMenu = $(".options-menu");
            let returnButton = $("#return-button");
            
            this.resetMenuClass();

            mainMenu.addClass("animate__fadeOutLeft");
            setTimeout(() => {
                mainMenu.hide();
                optionsMenu.show();
                setTimeout(() => {
                    optionsMenu.addClass("animate__fadeInRight").css("opacity", 1);
                    returnButton.show();
                }, 1)
            }, 200);
        },
        resetMenuClass: function () {
            let mainMenu = $(".main-menu");
            let optionsMenu = $(".options-menu");

            mainMenu.removeClass("animate__fadeInLeft").removeClass("animate__fadeOutLeft");
            optionsMenu.removeClass("animate__fadeInRight").removeClass("animate__fadeOutRight");
        },
        resetMenuNavigation: function () {
            let mainMenu = $(".main-menu");
            let optionsMenu = $(".options-menu");
            let returnButton = $("#return-button");

            this.resetMenuClass();

            optionsMenu.addClass("animate__fadeOutRight");
            setTimeout(() => {
                mainMenu.show();
                returnButton.hide();
                optionsMenu.hide();
                setTimeout(() => {
                    mainMenu.addClass("animate__fadeInLeft");
                }, 1)
            }, 200);
        },
        toggleFullscreen: function () {
            let toggleFullscreen = $("#toggle-fullscreen");
            toggleFullscreen.toggleClass("active");

            if (toggleFullscreen.hasClass("active")) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari e Opera */
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
                    document.documentElement.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari e Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    document.msExitFullscreen();
                }
            }
        }
    },
    mounted: function () {
        $(document).on("keyup", (e) => {
            if (this.isPlayingLevel && this.allowToNextScene) {
                e.preventDefault();
                this.nextScene();
            }
        })
    }
}
</script>
<style scoped>

#return-menu-button {
    cursor: pointer;
    color: var(--white);
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
}

.options-menu {
    display: none;
    opacity: 0;
}
.visual-novel-frame {
    width: 95vw;
    max-width: 2000px;
    max-height: 1000px;
    height: calc(100vh - 100px);
    margin: auto;
    border-radius: 20px;
    overflow: hidden;
    background: white;
}

.inicial-page, .begin-chapter, .end-chapter, .chapter {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    font-size: 30px;
}

.begin-chapter, .end-chapter, .chapter {
    display: none;
}

.inicial-page-background, .begin-chapter-background, .end-chapter-background, .chapter-background {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.informations-div, .hero-div {
    min-width: 250px;
    width: 95vw;
    max-width: 50%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

.begin-chapter-container, .end-chapter-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    padding: 2rem;
    height: 100%;
}

    .begin-chapter-container .logo, .end-chapter-container .logo {
        opacity: 0;
    }

.chapter-container {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
}

.chapter-name {
    display: flex;
    align-items: center;
    color: var(--white);
    background: rgba(0, 0, 0, 0.5);
    width: fit-content;
    padding: 0.5rem .7rem;
    border-radius: 0 0 20px 0;
    z-index: 3;
    position: relative;
}

    .chapter-name img {
        width: 3em;
    }

    .chapter-name p {
        margin: 0;
        margin-left: 10px;
        font-size: .6em;
    }

.interaction-container {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 1rem;
    width: calc(8rem + 50vw);
    height: 14vh;
    max-height: 500px;
    min-height: 110px;
    background: rgba(255, 255, 255, 0.7);
    padding: 0.3em;
    border-radius: 20px;
    box-shadow: inset 0 0 0 0.1em var(--white);
    border: 0.1em solid transparent;
    outline: 0.1em solid var(--primary-color);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

    .interaction-container h6 {
        font-size: .7em;
        font-weight: bold;
        margin-bottom: 1vh;
    }

.scene-text {
    font-size: .6em;
    display: inline-block;
    margin: 0;
    line-height: 100%;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

.next-scene {
    position: absolute;
    right: 10px;
    bottom: 5px;
    cursor: pointer;
    color: #852b80;
}

.characters {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

    .characters img {
        position: absolute;
        width: 15vw;
        bottom: 0;
        filter: brightness(0.7);
        transition: transform 1s;
    }

.character-active {
    filter: brightness(1) !important;
}

.from-right.exit-character {
    transform: translateX(100vw);
}

.from-left.exit-character {
    transform: translateX(-100vw);
}

.from-right {
    right: 2vw;
}

.from-left {
    left: 2vw;
}

.level-informations, .end-level-informations {
    color: var(--white);
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    opacity: 0;
    transition: all 0.4s;
}

    .level-informations p {
        margin: 0;
    }

.actions-container {
    display: flex;
    margin-top: .5em;
}

.action-item {
    margin: 0 1em;
    width: 8em;
    height: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

    .action-item p {
        margin: 0;
        position: absolute;
        bottom: 0;
    }

    .action-item i {
        font-size: 2em;
        cursor: pointer;
        transition: all 0.4s;
        position: absolute;
        top: 0;
    }

        .action-item i:hover {
            font-size: 2.5em;
        }

.play-button-container {
    width: calc(3em + 5vw);
    height: calc(3em + 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}

    .play-button-container > i {
        color: var(--white);
        font-size: calc(3em + 5vw);
        transition: all 0.4s;
        cursor: pointer;
        margin-top: 1vh;
    }

        .play-button-container > i:hover {
            font-size: calc(3.5em + 5vw);
        }

.hero-div {
    align-items: center;
    justify-content: center;
}

    .hero-div img {
        width: 100%;
    }

@media (max-width: 970px) {
    .visual-novel-frame {
        width: 100vw;
        height: 100vh;
        margin: 0;
        border-radius: 0;
    }
}

@media (max-width: 450px) {
    .hero-div {
        display: none;
    }
}

.inicial-logo {
    width: calc(15vw + 7rem);
}

.actions-menu-container {
    position: relative;
}


#return-button {
    position: absolute;
    top: -50px;
    left: 10px;
    color: var(--white);
    cursor: pointer;
    display: none;
}


.actions-menu {
    color: var(--white);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

    .actions-menu ul {
        list-style: none;
        width: 100%;
    }

    .actions-menu ul li {
        padding: .5rem;
        cursor: pointer;
        max-width: 250px;
        transition: all 0.4s;
    }

        .actions-menu ul li:hover, .active {
            background: rgba(255, 255, 255, 0.2);
            padding-left: 1rem !important;
        }
</style>