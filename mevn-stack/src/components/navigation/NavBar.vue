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
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <router-link to="/tasks" class="nav-link" exact>Tasks</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/register" class="nav-link" exact>Register</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/login" class="nav-link" exact>Login</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a href="#" @click.prevent="logOut" class="nav-link">Logout</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
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
import * as authService from "../../services/auth-service";

export default {
  name: "NavBar",
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
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
        }
      ]
    };
  },
  methods: {
    logOut: function() {
      authService.logOut();
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>