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
                    <img src="https://i.pinimg.com/originals/62/69/0b/62690b2cbbd8124f7cdfec4c63edf91f.jpg">
                </div>
            </div>
            <div class="begin-chapter animate__animated">
                <img src="https://images5.alphacoders.com/132/1322530.png" class="begin-chapter-background" />
                <div class="begin-chapter-container">
                    <i class="fas fa-arrow-left" id="return-menu-button" v-on:click="returnToMenu()"></i>
                    <div class="logo animate__animated">
                        <img src="../assets/power-stones-logo.png" class="inicial-logo">
                    </div>
                    <div class="level-informations animate__animated">
                        <p><i>{{ currentLevel.subtitle }}</i></p>
                        <h1>{{ currentLevel.title }}</h1>
                        <div class="play-button-container">
                            <i class="fas fa-play-circle"></i>
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
            userNovelStatus: {
                user_id: 1,
                last_level_completed: 0,
                first_phase_choice: 0,
                second_phase_choice: 0,
                third_phase_choice: 0
            },
            currentLevel: {
                subtitle: "Capítulo 1",
                title: "Jack! Mike! Tony!"
            }
        }
    },
    methods: {
        resetAllContainers: function (from_menu = false) {
            let inicialPage = $(".inicial-page");
            let informationsDiv = $(".informations-div");
            let heroDiv = $(".hero-div");
            let beginChapter = $(".begin-chapter");
            let beginChapterLogo = $(".begin-chapter-container .logo");

            if (!from_menu) {
                inicialPage.removeClass("animate__fadeOut").removeClass("animate__fadeIn");
                informationsDiv.removeClass("animate__fadeOutLeft").removeClass("animate__fadeInRight");
                heroDiv.removeClass("animate__fadeOutRight").removeClass("animate__fadeInLeft");
            }

            beginChapter.removeClass("animate__fadeIn").removeClass("animate__fadeOut");
            beginChapterLogo.removeClass("animate__fadeInDown").removeClass("animate__fadeOutUp");
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
        returnToMenu: function () {
            this.resetAllContainers();
            
            let inicialPage = $(".inicial-page");
            let informationsDiv = $(".informations-div");
            let heroDiv = $(".hero-div");
            let beginChapter = $(".begin-chapter");
            let beginChapterLogo = $(".begin-chapter-container .logo");
            let levelInformations = $(".level-informations");

            levelInformations.css("opacity", 0);
            informationsDiv.css("opacity", 0);
            heroDiv.css("opacity", 0);
            setTimeout(() => {
                beginChapterLogo.addClass("animate__fadeOutUp").css("opacity", 0);
                setTimeout(() => {
                    beginChapter.addClass("animate__fadeOut");
                    setTimeout(() => {
                        beginChapter.hide();
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

.inicial-page, .begin-chapter {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    font-size: 30px;
}

.begin-chapter {
    display: none;
}

.inicial-page-background, .begin-chapter-background {
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

.begin-chapter-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    padding: 2rem;
    height: 100%;
}

    .begin-chapter-container .logo {
        opacity: 0;
    }

.level-informations {
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

.play-button-container {
    width: 5.5em;
    height: 5.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}

    .play-button-container > i {
        color: var(--white);
        font-size: 5em;
        transition: all 0.4s;
        cursor: pointer;
        margin-top: 10vh;
    }

        .play-button-container > i:hover {
            font-size: 5.5em;
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