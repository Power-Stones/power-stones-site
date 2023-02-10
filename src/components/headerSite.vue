<template>
    <div class="header-container">
        <div class="container">
            <nav class="navbar navbar-expand-lg py-3">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-site" aria-controls="navbar-site" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbar-site">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#home-container">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#characters">Personagens</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#visual-novel-container">Visual Novel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Sobre</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "headerSite"
}
</script>
<style scoped>
.header-container {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.navbar-toggler i {
    color: white;
    font-size: 30px;
}

#navbar-site {
    justify-content: center;
}

@media (max-width: 992px) {
    #navbar-site {
        justify-content: flex-end;
        text-align: end;
        background: rgba(0, 0, 0, 0.7);
    }
}

#navbar-site ul li {
    margin: 0 10px;
}

#navbar-site ul li a {
    color: white;
    font-size: 25px;
}

    #navbar-site ul li a:hover {
        color: #d6d6d6;
    }
</style>