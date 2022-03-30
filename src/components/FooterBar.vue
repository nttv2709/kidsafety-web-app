<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-center">
      <li class="nav-item"><router-link to="/" class="nav-link px-2 text-muted">Home</router-link></li>
      <li class="nav-item"><router-link to="/camera" class="nav-link px-2 text-muted">Camera</router-link></li>
      <li class="nav-item"><router-link to="/history" class="nav-link px-2 text-muted">History</router-link></li>
      <li class="nav-item"><router-link to="/contact" class="nav-link px-2 text-muted">Contact us</router-link></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>
