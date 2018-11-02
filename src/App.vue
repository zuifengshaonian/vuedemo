<template>
  <div id="app">
    <right-bar></right-bar>
    <router-view/>
  </div>
</template>

<script>
import RightBar from './components/RightBar'
export default {
  name: 'App',
  components:{
        RightBar
    }
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
