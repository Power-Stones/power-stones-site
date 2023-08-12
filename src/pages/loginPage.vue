<template>
    <div class="login-page page">
        <div class="background-default"></div>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/power-stones-logo.png" class="inicial-logo">
            </router-link>
        </div>
        <div class="login-container">
            <form>
                <h1>ENTRAR</h1>
                <div class="form-inputs">
                    <input type="email" name="email" id="email" placeholder="Email">
                    <input type="text" name="password" id="password" placeholder="Senha">
                    <button class="btn primary">ENTRAR</button>
                    <span>Ainda não tem uma conta? <router-link to="/register">REGISTRE-SE</router-link></span>
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
.login-page {
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

.login-container {
    text-align: center;
}
</style>