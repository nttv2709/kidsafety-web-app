<template>
  <div class="content container-fluid">
    <p class="pt-5 fs-1">The way to protect your kids</p>
    <p class="fs-5">Subtitle</p>
    <router-link to="/signup" type="button" class="btn btn-light border border-5 rounded-pill text-uppercase">Sign up</router-link>
    <div class="container-fluid pt-4 ">
      <img src="../assets/baby.png" class="" alt="...">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
  .title {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 68px;
    line-height: 120%;
    /* or 82px */

    text-align: center;
  }
  .content {
    position: relative;
  }
</style>
