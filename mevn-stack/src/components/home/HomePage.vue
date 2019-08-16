<template>
  <div class="custom-home">
    <div class="jumbotron custom-bg-dark">
      <div class="container">
        <h1 class="display-4">MEVN Stack Task Manager</h1>
        <p
          class="lead"
        >This is a sample task manager application, built with MongoDB, ExpressJS, VueJS, and NodeJS technologies.</p>
        <hr class="my-4" />
        <p>Click below to begin managing task for users.</p>
        <a href="#" class="btn btn-success btn-lg" role="button">View Tasks</a>
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
