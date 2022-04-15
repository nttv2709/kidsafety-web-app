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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
#app {
  font-family: 'DM Sans',Helvetica, Arial, sans-serif;
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
.value {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
</style>
