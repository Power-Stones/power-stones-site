<template>
    <div class="header-container">
        <div class="visual-novel-header-container p-3">
            <div class="user-container" v-on:click="showHeaderActions()">
                <img src="https://img.quizur.com/f/img5ea5e54098b6d2.06215882.jpeg?lastEdited=1587930471" alt="">
                <i class="fas fa-caret-down"></i>
                <div class="header-actions">
                    <ul>
                        <li v-on:click="toggleFullscreen()">
                            <p>Tela cheia</p>
                        </li>
                        <li>
                            <p>Meu perfil</p>
                        </li>
                        <li>
                            <p>Sair</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="responsive-menu-button" v-on:click="toggleResponsiveMenu()">
            <i class="fas fa-bars"></i>
            <div class="header-actions">
                <ul>
                    <li v-on:click="toggleFullscreen()">
                        <p>Tela cheia</p>
                    </li>
                    <li>
                        <p>Meu perfil</p>
                    </li>
                    <li>
                        <p>Sair</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "visualNovelHeader",
    methods: {
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
        },
        toggleResponsiveMenu: function () {
            if ($(".responsive-menu-button .header-actions").is(":visible")) {
                this.hideHeaderActions();
            } else {
                this.showHeaderActions();
            }
        },
        showHeaderActions: function (responsive = false) {
            let component = $(".header-actions");
            if (responsive) {
                component = $(".responsive-menu-button .header-actions");
            }
            component.show();
        },
        hideHeaderActions: function (responsive = false) {
            let component = $(".header-actions");
            if (responsive) {
                component = $(".responsive-menu-button .header-actions");
            }
            component.hide();
        },
        hideHeader: function () {
            let container = $(".user-container");
            container.css("transform", "translateY(-10vh)");
            setTimeout(() => {
                container.hide();
            }, 400);
        },
        showHeader: function () {
            let container = $(".user-container");
            container.show();
            setTimeout(() => {
                container.css("transform", "translateY(0)");
            }, 1)
        },
    },
    mounted: function () {
        $(".visual-novel-header-container").on("mouseenter", () => {
            this.showHeader();
        })
        $(".visual-novel-header-container").on("mouseleave", () => {
            this.hideHeaderActions();
            this.hideHeader();
        })
    }
}
</script>
<style scoped>

.visual-novel-header-container {
    display: flex;
    width: 100vw;
    margin: auto;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 82px;
    z-index: 999;
    background: transparent;
}

.user-container {
    cursor: pointer;
    width: fit-content;
    transition: transform 0.4s;
    transform: translateY(-10vh);
    display: none;
    position: relative;
}
    .user-container img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: .7rem;
    }

    .user-container i {
        font-size: 1.4rem;
        color: var(--white);
    }

.header-actions {
    position: absolute;
    right: 0;
    top: 110%;
    display: none;
    background: var(--white);
    border: 1px solid var(--purple);
    padding: .5rem;
    text-align: center;
    border-radius: 7px;
    white-space: nowrap;
    height: fit-content;
    opacity: 1;
}

    .header-actions ul {
        list-style-type: none;
        margin: 0;
    }

        .header-actions ul li {
            padding: .5rem;
        }

            .header-actions ul li:hover {
                background: var(--gray);
            }

            .header-actions ul li p {
                margin: 0;
            }

.responsive-menu-button {
    display: none;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 999;
    border-radius: 50%;
    cursor: pointer;
}

@media (max-width: 1200px) {
    .visual-novel-header-container {
        display: none;
    }

    .responsive-menu-button {
        display: flex;
    }
}
</style>