<template>
    <div class="header">
        <nav class="header-nav">
            <a href="https://github.com/FJancsi">GitHub</a> |
            <a href="https://www.npmjs.com/~fjancsi">NPM</a> |
            <a href="https://twitter.com/pufilekvar">Twitter</a> |
            <a href="https://www.linkedin.com/in/jános-fekete-639278114">LinkedIn</a>
        </nav>
        <router-link to="/">
                <img alt="page logo" class="home-page_logo" src="../assets/logo.png" />
        </router-link>
        <div id="nav">
            <router-link to="/gps">GPS</router-link>
        </div>
    </div>
</template>

<style>
.header .header-nav {
    text-align: right;
    margin: 5px;
}
.header .header-nav a {
    text-decoration: none;
    margin: 5px;
}
.header .home-page_logo {
  width: 200px;
  height: 200px;
}
</style>