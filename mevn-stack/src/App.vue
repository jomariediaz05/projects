<template>
  <div id="app">
    <NavBar />
    <div id="app-container">
      <router-view />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "./components/navigation/NavBar.vue";
import FooterBar from "./components/navigation/FooterBar.vue";

export default {
  components: { NavBar, FooterBar },
  beforeCreate: function() {
    this.$store.dispatch("authenticate");
  }
};
</script>

<style lang="scss">
* {
  color: white;
}

.custom-bg-dark {
  background-color: #373f46 !important;
}

.navbar-brand > img {
  max-height: 25px;
}

nav.nabar {
  height: 6rem;
}

a.navbar-brand {
  text-transform: uppercase;
  letter-spacing: 3px;
}

li.nav-item a {
  text-transform: uppercase;
}

div#app-container {
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 96px;
  width: 100%;
  padding: 2rem;
  background-color: #1d2733;
  overflow: auto;
}

footer#custom-footer {
  height: 6rem;
  background-color: #373f46;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary {
  background-color: #32aced !important;
}

.btn-success {
  background-color: #4fc08d !important;
}

.btn-success:hover {
  background-color: #3da978;
}

form.custom-form {
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
</style>
