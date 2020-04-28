<template>
  <div id="todoContainer">
    <h1 id="title">TODO List</h1>
    <nav id="nav">
      <a href="#" @click="toggleContainer(0)">Pendientes</a> |
      <a href="#" @click="toggleContainer(1)">Completadas</a>
    </nav>
    <keep-alive>
      <component :is="taskContainerStatus"></component>
    </keep-alive>
    <LogoutButton />
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton.vue";
import TaskPending from "@/views/TaskPending.vue";
import TaskDone from "@/views/TaskDone.vue";

export default {
  name: "Todo",
  components: {
    LogoutButton,
    TaskPending,
    TaskDone
  },
  data: function() {
    return {
      taskRoutes: ["TaskPending", "TaskDone"],
      taskContainerStatus: "TaskPending"
    };
  },
  methods: {
    toggleContainer: function(position) {
      this.taskContainerStatus = this.taskRoutes[position];
    }
  }
};
</script>

<style>
#todoContainer {
  padding: 10% 30%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#title {
  text-align: center;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 2px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>