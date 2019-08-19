<template>
  <div>
    <form class="custom-form" @submit="onSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" />
      </div>
      <div class="form-group mt-2">
        <button type="submit" class="float-right btn btn-secondary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as authService from "../../services/auth-service";

export default {
  name: "LoginPage",
  methods: {
    onSubmit: function(event) {
      event.preventDefault();
      authService.login();
      this.$router.push({ name: "home" });
    }
  }
};
</script>