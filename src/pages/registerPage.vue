<template>
    <div class="register-page page">
        <div class="background-default"></div>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/power-stones-logo.png" class="inicial-logo">
            </router-link>
        </div>
        <div class="register-container">
            <form>
                <h1>DESCUBRA ESSE UNIVERSO</h1>
                <div class="form-inputs">
                    <input type="email" name="email" id="email" placeholder="Email">
                    <input type="text" name="password" id="password" placeholder="Senha">
                    <input type="text" id="repeat-password" placeholder="Repita a senha">
                    <button class="btn primary">COMEÇAR</button>
                    <span>Já tem conta? <router-link to="/login">FAÇA LOGIN</router-link></span>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "registerPage"
}
</script>
<style scoped>
.register-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    margin: auto;
}

.form-inputs {
    margin-top: 10vh;
}

.register-container {
    text-align: center;
}
</style>