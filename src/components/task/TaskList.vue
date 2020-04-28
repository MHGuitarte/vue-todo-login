<template>
  <div id="taskList" v-if="tasksToShow">
    <div v-for="task in tasks" :key="task">
      <task :completed="true" />
    </div>
  </div>
  <div v-else>
    <div v-for="task in tasks" :key="task">
      <task />
    </div>
  </div>
</template>

<script>
import Task from "@/components/task/Task.vue";

export default {
  name: "TaskList",
  components: { Task },
  props: {
    tasksToShow: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {
      tasks: ["si", "no"]
    };
  }
};
</script>

<style>
#taskList {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>