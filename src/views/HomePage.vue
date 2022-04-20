<template>
  <div class="content container-fluid">
    <p class="title pt-5">The way to protect your kids</p>
    <p class="subtitle fs-5">Subtitle</p>
  <div class="notice">
</div>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
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
.title {
  font-family: 'DM Sans', sans-serif;
  font-weight: medium;
  font-size: 3.5rem;
}
.subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 2.5rem;
}
.btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  padding: 1rem 2rem;
}
.notice {
  color: #57B3FE;
  font-weight: medium;
}
p {
  margin-bottom: 1.5rem;
}
</style>
