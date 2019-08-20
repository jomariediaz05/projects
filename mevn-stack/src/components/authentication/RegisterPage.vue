<template>
  <div>
    <form class="custom-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="firstName">Fist Name</label>
        <input
          v-model="firstName"
          type="text"
          class="form-control"
          id="firstName"
          placeholder="First Name"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          v-model="lastName"
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Last Name"
        />
      </div>
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
        <button type="submit" class="float-right btn btn-secondary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as authService from "../../services/auth-service";

export default {
  name: "RegisterPage",
  data: function() {
    return {
      username: "",
      password: "",
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      };

      const registerPromise = authService.registerUser(user);
      const loginPromise = authService.logIn(user);

      await Promise.all([registerPromise, loginPromise]);

      this.$router.push({ name: "home" });
    }
  }
};
</script>