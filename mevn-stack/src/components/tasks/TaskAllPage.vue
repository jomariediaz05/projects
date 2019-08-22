<template>
  <div class="d-flex flex-column">
    <div class="mb-4">
      <router-link to="/tasks/new" class="btn btn-success ml-2">Create Task</router-link>
    </div>
    <div class="d-flex flex-wrap justify-content-start">
      <div
        v-for="task in tasks"
        :key="task._id"
        class="card mb-2 ml-2 text-white bg-dark"
        style="width: 18rem;"
      >
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 :class="{ 'completed' : task.completed}" class="card-title">{{ task.title }}</h5>
            <span
              :class="[{'late' : taskIsLate(task.dueDate) && !task.completed}, 'small']"
            >{{ task.dueDate | date }}</span>
          </div>
          <h6 class="card-subtitle mb-2 text-muted">Created by {{ task.author.username }}</h6>
          <p class="card-text">{{ task.body }}</p>
          <div v-if="task.author._id === $store.state.user.id" class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="task.completed"
              @click="markAsCompleted(task)"
              name="completed"
              id="completed"
            />
            <label for="checkbox">Completed</label>
          </div>
          <div
            v-if="task.author._id === $store.state.user.id"
            class="d-flex justify-content-between"
          >
            <router-link
              type="button"
              tag="button"
              class="card-link btn btn-primary"
              :disabled="task.completed"
              :to="{name: 'tasks-edit', params: {id: task._id}}"
            >Edit</router-link>
            <a
              href="#"
              @click.prevent="taskId = task._id"
              class="card-link btn btn-danger"
              v-b-modal.deleteModal
            >Delete</a>
          </div>
        </div>
      </div>
      <div>
        <b-modal id="deleteModal" ref="modal" title="Delete Confirmation">
          <p class="my-4">Are you sure to delete this task?</p>
          <div slot="modal-footer" class="w-100 text-right">
            <b-btn slot="md" class="mr-1" variant="danger" @click="deleteTask">Delete</b-btn>
            <b-btn slot="md" variant="secondary" @click="cancelModal">Cancel</b-btn>
          </div>
        </b-modal>
      </div>
    </div>
    <div v-if="tasks && tasks.lenght === 0" class="ml-2">
      <div class="alert alert-info">No tasks found.</div>
    </div>
  </div>
</template>

<script>
import * as taskService from "../../services/task-service";
import moment from "moment";

export default {
  name: "TaskAllPage",
  data: function() {
    return {
      tasks: null,
      taskId: null
    };
  },
  beforeRouteEnter(to, from, next) {
    taskService.getAllTasks().then(res => {
      next(vm => {
        vm.tasks = res.data.tasks;
      });
    });
  },
  methods: {
    taskIsLate: function(date) {
      return moment(date).isBefore();
    },
    deleteTask: async function() {
      await taskService.deleteTask(this.taskId);

      const index = this.tasks.findIndex(t => t._id === this.taskId);
      this.tasks.splice(index, 1);
      this.taskId = null;

      this.$refs.modal.hide();
    },
    cancelModal: function() {
      this.$refs.modal.hide();
      this.taskId = null;
    },
    markAsCompleted: function(task) {
      task.completed = !task.completed;
      taskService.updateTask({ task: task });
    }
  }
};
</script>