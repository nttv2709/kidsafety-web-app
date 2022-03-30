<template>
  <nav id="bar" class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">
        <img
          src=""
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Company
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/camera" class="nav-link">Camera</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">History</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">Contact us</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/login"
        class="btn btn-light border border-5 rounded-pill text-uppercase"
      >
        Log in
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>
#bar {
  opacity: 100%;
}
</style>
