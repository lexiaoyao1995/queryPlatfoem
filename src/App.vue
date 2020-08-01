<template>
  <div id="app">
    <left-nav></left-nav>
    <router-view/>
  </div>
</template>

<script>
    import LeftNav from "./components/leftNav";

    export default {
        name: 'App',
        components: {LeftNav}
    }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
