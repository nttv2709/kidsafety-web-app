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
        v-if="$store.state.user"
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
        </ul>
      </div>
          <div class="top-0 end-0">
            <router-link to="/login"
              class="btn btn-light border rounded-pill text-uppercase notice"
              v-if="!$store.state.user"
            >
              Log in
            </router-link>
            <button v-else type="button" class="notice m-2 btn btn-light border rounded-pill text-uppercase" @click="$store.dispatch('logout')">Log out</button>
              <router-link to="/user" class="user-info btn btn-light rounded-circle p-0" v-if="$store.state.user">
                <img src="../assets/user.png">
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
  font-size: 2rem;
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
.nav-item:hover {
  background-color: rgb(169, 166, 166);
  border-radius: 25px;
  padding: 0.25rem;
}
.user-info {
  background-image: url('../assets/user.png');
}
</style>
