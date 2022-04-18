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
      </router-link>
        <div class="brand">
        Company
        </div>
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
        v-if="$store.state.user"
      >
        <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/status" class="nav-link">Status</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact us</router-link>
            </li>
            <li class="nav-item">
              <button @click="$store.dispatch('logout')">Logout</button>
            </li>
        </ul>
      </div>
          <div class="top-0 end-0">
            <router-link to="/login"
              class="btn btn-light border rounded-pill text-uppercase"
            >
              <div class="notice">Log in</div>
            </router-link>
          </div>
    </div>
  </nav>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HeaderBar',
  setup () {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
    return {
      user: store.state.user
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
#bar {
  opacity: 100%;
}
.nav-item{
font-weight: medium;
}
.brand {
  font-size: 1.5rem;
  font-family: 'Pacifico', cursive;
}
.btn {
  font-size: 0.85rem;
  font-weight: bold;
  padding: 1rem 2rem;
}
.notice {
  color: #57B3FE;
  font-weight: medium;
}
</style>
