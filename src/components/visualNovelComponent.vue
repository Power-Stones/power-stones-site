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
                        <ul>
                            <li>Novo jogo</li>
                            <li>Continuar</li>
                            <li>Opções</li>
                            <li>Sobre</li>
                        </ul>
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
export default {
    name: "visualNovelComponent"
}
</script>
<style scoped>
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

@media (max-width: 450px) {
    .hero-div {
        display: none;
    }
}

@media (max-width: 970px) {
    .visual-novel-frame {
        transform: rotate(90deg);
        width: calc(100vh - 20px);
        height: calc(100vw - 20px);
    }
}

.inicial-logo {
    width: calc(15vw + 7rem);
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

        .actions-menu ul li:hover {
            background: rgba(255, 255, 255, 0.2);
            padding-left: 1rem;
        }
</style>