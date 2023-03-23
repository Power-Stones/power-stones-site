<template>
    <footer class="mt-5 p-5">
        <div class="container">
            <div class="footer-container">
                <div class="footer-logo">
                    <img src="../assets/power-stones-teste-5.png">
                    <p>In the World</p>
                </div>
                <div class="footer-group">
                    <p>Redes sociais</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">TikTok</a></li>
                    </ul>
                </div>
                <div class="footer-group">
                    <p>Contato</p>
                    <ul>
                        <li>
                            <a href="mailto:powerstonesofc@gmail.com">powerstonesofc@gmail.com</a>
                        </li>
                    </ul>
                    <p>Contato profissional</p>
                    <ul>
                        <li>
                            <a href="mailto:comercial.powerstones@gmail.com">comercial.powerstones@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-signature">
                <p>© 2023 - Power Stones</p>
                <p>by Rabsystems</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "footerSite"
}
</script>
<style scoped>

footer {
    color: white;
    background: black;
}
.footer-logo img {
    width: 200px;
}

ul {
    list-style: none;
}

.footer-group p {
    font-size: 1.4rem;
    font-weight: 600;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-signature p {
    margin: 0;
}
</style>