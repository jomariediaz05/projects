<template>
  <div>
    <form class="custom-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group mt-2">
        <button type="submit" class="float-right btn btn-secondary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as authService from "../../services/auth-service";

export default {
  name: "LoginPage",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.username,
        password: this.password
      };

      await authService.login(user);
      this.$router.push({ name: "home" });
    }
  }
};
</script>