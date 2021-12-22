<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test1">About</router-link>
  </div>
  <router-view/> -->
  <on-index/>
</template>

<script>
import OnIndex from './components/OnIndex.vue'

export default ({
  components: {
    OnIndex
  },
  setup() {
    
  },
})
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
