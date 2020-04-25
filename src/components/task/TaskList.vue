<template>
  <div id="taskList">
    <Task />
    <Task />
  </div>
</template>

<script>
import Task from "@/components/task/Task.vue";

export default {
  name: "TaskList",
  components: { Task }
};
</script>

<style>
#taskList {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>