<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <router-link to="/" class="navbar-brand">
        <img src="../../assets/logo.png" alt="logo" />
        Task Manager
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li v-for="(link, index) in links" :key="index" class="nav-item">
            <router-link :to="link.url" class="nav-link" exact>{{ link.text }}</router-link>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
            >{{this.$store.state.user.name? this.$store.state.user.name : 'User'}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          text: "Home",
          url: "/"
        },
        {
          text: "Tasks",
          url: "/tasks"
        },
        {
          text: "Register",
          url: "/register"
        },
        {
          text: "Login",
          url: "/login"
        },
        {
          text: "Logout",
          url: "/"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>