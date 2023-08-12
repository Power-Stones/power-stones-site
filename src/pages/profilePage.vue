<template>
    <div class="register-page page">
        <div class="background-default"></div>
        <div class="container">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/power-stones-logo.png" class="inicial-logo">
                </router-link>
            </div>
            <div class="profile-container row">
                <div class="lateral-content col-md-3 col-12">
                    <div class="img-container">
                        <img src="https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-cute-anime-avatar-profile-picture-14.jpg" class="avatar-g">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <div class="profile-options">
                        <div class="account">
                            <h4>Conta</h4>
                            <ul>
                                <li class="active" v-on:click="selectMenuItem(1)" id="item-menu-1">
                                    <p>Meus dados</p>
                                </li>
                                <li v-on:click="selectMenuItem(2)" id="item-menu-2">
                                    <p>Redefinir senha</p>
                                </li>
                            </ul>
                        </div>
                        <div class="general">
                            <h4>Geral</h4>
                            <ul>
                                <li v-on:click="selectMenuItem(3)" id="item-menu-3">
                                    <p>Conquistas</p>
                                </li>
                                <li v-on:click="selectMenuItem(4)" id="item-menu-4">
                                    <p>Escolhas</p>
                                </li>
                                <li v-on:click="selectMenuItem(5)" id="item-menu-5">
                                    <p>Linha do tempo</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="principal col-md-9 col-12">
                    <h2 class="section-title">Meus dados</h2>
                    <hr>
                    <div class="profile-content" v-if="isData">
                        <input type="text" name="name" id="name" placeholder="Nome">
                        <input type="email" name="email" id="email" placeholder="Email">
                    </div>
                    <div class="profile-content" v-if="isResetPassword">
                        <input type="text" name="new_password" id="new-password" placeholder="Nova senha">
                        <input type="email" id="repeat-new-password" placeholder="Repita a senha">
                        <button type="button" class="btn primary" v-on:click="recoveryPassword()">Redefinir</button>
                    </div>
                    <div class="profile-content" v-if="isAchievements">
                        <div class="achievements" v-for="achievement in achievements" :key="achievement.id">
                            <div class="achievement-core">
                                <p class="achievement-title">{{ achievement.title }}</p>
                            </div>
                            <p class="achievement-description">{{ achievement.description }}</p>
                        </div>
                    </div>
                    <div class="profile-content" v-if="isChoices">
                        <div class="choices" v-for="choice in choices" :key="choice.id">
                            <div class="choice-core">
                                <p class="choice-title">{{ choice.title }}</p>
                            </div>
                            <p class="choice-description">{{ choice.description }}</p>
                        </div>
                    </div>
                    <div class="profile-content" v-if="isTimeline">
                        <div class="timeline-item" v-for="item in timeline" :key="item.id">
                            <div class="choice-core">
                                <p class="choice-title">{{ item.title }}</p>
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
    name: "profilePage",
    data() {
        return {
            isData: true,
            isResetPassword: false,
            isAchievements: false,
            isChoices: false,
            isTimeline: false,
            achievements: [
                {
                    id: 1,
                    title: "Entrou no mundo",
                    description: "Se registrou em Power Stones"
                }
            ],
            choices: [
                {
                    id: 1,
                    title: "Deixe a vida me levar",
                    description: "Chegue ao final canônico"
                }
            ],
            timeline: [
                {
                    id: 1,
                    title: "I Jack! Mike! Tony!"
                }
            ]
        }
    },
    methods: {
        resetAllMenuContainers: function () {
            this.isData = false;
            this.isResetPassword = false;
            this.isAchievements = false;
            this.isChoices = false;
            this.isTimeline = false;
            let menuItems = $("ul li");
            menuItems.removeClass("active");
        },
        selectMenuItem: function (menuItemId) {
            this.resetAllMenuContainers();
            let menuItem = $("#item-menu-" + menuItemId);
            menuItem.addClass("active");
            switch (menuItemId) {
                case 1:
                    this.isData = true;
                    break;
                case 2:
                    this.isResetPassword = true;
                    break;
                case 3:
                    this.isAchievements = true;
                    break;
                case 4:
                    this.isChoices = true;
                    break;
                case 5:
                    this.isTimeline = true;
                    break;
            }
        }
    }
}
</script>
<style scoped>

.btn {
    margin: 5px 0;
}

.profile-container {
    margin-top: .5em;
}

.inicial-logo {
    width: calc(10vw + 5rem);
}

.lateral-content, .principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.principal {
    text-align: center;
}

.profile-options {
    margin-top: 5vh;
}

    .profile-options ul {
        list-style: none;
    }

    .profile-options > div {
        margin: 2em 0;
    }

        .profile-options ul li {
            cursor: pointer;
        }

.active {
    color: var(--purple);
}

.principal hr {
    border: 1px solid var(--purple);
}

.profile-content {
    margin: 0 .5em;
}

.img-container {
    position: relative;
    width: fit-content;
}

    .img-container i {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 2.5em;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--purple);
        cursor: pointer;
    }

        .img-container i:hover {
            background: var(--purple-low);
        }

@media (max-width: 768px) {

    .profile-options {
        margin-top: 1em;
    }

    .profile-options, .profile-options ul {
        display: flex;
        flex-wrap: wrap;
    }

    .profile-options ul li {
        margin: 0 .5em;
    }

    .profile-options > div {
        margin: 0;
    }
}
</style>