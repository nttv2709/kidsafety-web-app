<template>
<section>
<HeaderBar></HeaderBar>
<router-view></router-view>
</section>
<FooterBar></FooterBar>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
  name: 'App',
  components: { HeaderBar, FooterBar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
section {
    position: relative;
    width: 100%;
    height:80vh;
    justify-content: center;
    align-items: center;
  }
  section:before {
    content: '';
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(to left, #e1e0ff 0%, #d2ecff 100%);
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    transform: scaleX(1.5);
  }
</style>
