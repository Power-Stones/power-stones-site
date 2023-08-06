<template>
    <div class="visual-novel-component-container">
        <div class="visual-novel-frame">
            <div class="inicial-page">
                <img src="https://1.bp.blogspot.com/-qn14_M4IDhE/XYWKuIxbzCI/AAAAAAAAb1s/duPwzP0HSJMh3UHsEO_EvUXDFTgxyvKiACLcBGAsYHQ/s2560/anime-sunset-scene-b8-2560x1440.jpg" class="inicial-page-background" />
                <div class="informations-div">
                    <div class="logo">
                        <img src="../assets/power-stones-logo.png" class="inicial-logo">
                    </div>
                    <div class="actions-menu">
                        <div class="actions-menu-container">
                            <i class="fas fa-arrow-left" id="return-button" v-on:click="resetMenuNavigation()"></i>
                            <ul class="main-menu animate__animated animate__faster">
                                <li>Novo jogo</li>
                                <li>Continuar</li>
                                <li v-on:click="goToOptions()">Opções</li>
                                <li>Sobre</li>
                            </ul>
                            <ul class="options-menu animate__animated animate__faster">
                                <li v-on:click="toggleFullscreen()" id="toggle-fullscreen">Tela cheia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="hero-div">
                    <img src="https://i.pinimg.com/originals/62/69/0b/62690b2cbbd8124f7cdfec4c63edf91f.jpg">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "visualNovelComponent",
    methods: {
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

.inicial-page {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    font-size: 30px;
}

.inicial-page-background {
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