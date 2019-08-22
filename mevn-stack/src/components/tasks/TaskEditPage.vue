<template>
  <div>
    <form class="custom-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-model="task.title"
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea
          v-model="task.body"
          name="body"
          id="body"
          cols="30"
          rows="10"
          placeholder="Body"
          class="form-control"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="due-date">Due Date</label>
        <input
          v-model="task.dueDate"
          type="date"
          name="due-date"
          id="due-date"
          placeholder="Due Date"
          class="form-control"
        />
      </div>
      <div class="form-group mt-2">
        <button type="submit" class="float-right btn btn-success">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as taskService from "../../services/task-service";
import moment from "moment";

export default {
  name: "TaskEditPage",
  data: function() {
    return {
      task: {
        title: "",
        body: "",
        dueDate: ""
      }
    };
  },
  beforeRouteEnter: function(to, from, next) {
    taskService.getTaskById(to.params.id).then(res => {
      if (!res) {
        next("/tasks");
      } else {
        next(vm => {
          const task = res.data.task;
          console.log(res.data);

          task.dueDate = moment(task.dueDate).format("YYYY-MM-DD");
          vm.task = task;
        });
      }
    });
  },
  methods: {
    onSubmit: async function() {
      const req = {
        task: this.task
      };

      await taskService.updateTask(req);
      this.$router.push({ name: "tasks-all" });
    }
  }
};
</script>