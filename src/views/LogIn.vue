<template>
  <div class="frame position-absolute top-50 start-50 translate-middle">
    <form @submit.prevent='login'>
      <p class="fs-1">Welcome Back</p>
      <div class="content">
        <div class="mb-3">
          <input type="email" class="form-control rounded-pill" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="login_form.email" required>
        </div>
        <div class="mb-3">
          <input type="password" class="form-control rounded-pill" placeholder="Password" id="exampleInputPassword1" v-model="login_form.password" required>
        </div>
        <div class="mb-3k text-end">
          <router-link to="">Forgot password?</router-link>
        </div>
      </div>
      <div class="container-fluid">
        <button type="submit" class="btn1 btn rounded-pill">Log in</button>
      </div>
      <router-link to="/signup" type="button" class="btn2 btn rounded-pill">Sign up</router-link>
</form>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
/* eslint-disable */
export default {
  name: 'LogIn',
  data () {
    const login_form = ref({})
    const store = useStore()
    const login = () => {
      store.dispatch('login', login_form.value)
    }

    return {
      login_form,
      login
    }
  }
}
</script>

<style scoped>
form {
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
