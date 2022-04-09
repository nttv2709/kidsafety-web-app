<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <form>
      <p class="fs-1">Create Account</p>
      <div class="content">
        <div class="mb-3">
          <input type="email" class="form-control rounded-pill" placeholder="Email" id="exampleInputPassword1" v-model="email">
        </div>
        <div class="mb-3">
          <input type="password" class="form-control rounded-pill" placeholder="Password" id="exampleInputPassword1" v-model= "password">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Agree</label>
        </div>
      </div>
      <div class="container-fluid">
        <button type="submit" class="btn btn1 rounded-pill">Sign up</button>
      </div>
      <router-link to="/login" type="button" class="btn btn2 rounded-pill">Log in</router-link>
</form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  form {
    font-family: 'DM Sans', sans-serif;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 25px;
    margin: 5rem;
    padding: 2rem 4rem;
  }
    p {
    font-weight: bold;
    color: #557DCA;
  }
  .content {
    text-align: left;
  }
  .btn {
    margin-top: 25px;
padding: 0.75rem 1.25rem;
  }
  .btn1 {
    background-color: #557DCA;
    color: white;
  }
  .btn2 {
    background-color: #ffffff;
    border-color: #557DCA;
    color: black;
  }
</style>
