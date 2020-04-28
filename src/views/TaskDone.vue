<template>
  <TaskList :tasksToShow="true"/>
</template>

<script>
import TaskList from "@/components/task/TaskList.vue";

export default {
  name: "TaskDone",
  components: {
    TaskList
  }
};
</script>