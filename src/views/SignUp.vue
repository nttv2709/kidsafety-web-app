<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <form>
      <p class="fs-1">Create Account</p>
      <div class="content">
        <div class="mb-3">
          <input type="email" class="form-control rounded-pill" placeholder="Email" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control rounded-pill" placeholder="Username" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <input type="password" class="form-control rounded-pill" placeholder="Password" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Agree</label>
        </div>
      </div>
      <div class="container-fluid">
        <button type="submit" class="btn btn-primary">Sign up</button>
      </div>
      <router-link to="/login" type="button" class="btn btn-primary">Log in</router-link>
</form>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>
  form {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 25px;
    margin: 5rem;
    padding: 2rem;
  }
  .content {
    text-align: left;
  }
  button {
    margin-bottom: 25px;
  }
</style>
