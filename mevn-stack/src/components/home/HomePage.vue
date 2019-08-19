<template>
  <div class="custom-home">
    <div class="jumbotron custom-bg-dark">
      <div class="container">
        <h1 class="display-4">MEVN Tasks Manager</h1>
        <p
          class="lead"
        >This is a sample task manager application, built with MongoDB, ExpressJS, VueJS, and NodeJS technologies.</p>
        <hr class="my-4" />
        <p>Click below to begin managing task for users.</p>
        <router-link to="/tasks" class="btn btn-success btn-lg">View Tasks</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style lang="scss" scoped>
.custom-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
