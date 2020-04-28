<template>
  <div>
    <TaskInput />
    <TaskList />
  </div>
</template>

<script>
import TaskInput from "@/components/task/TaskInput.vue";
import TaskList from "@/components/task/TaskList.vue";

export default {
  name: "TaskPending",
  components: {
    TaskInput,
    TaskList
  }
};
</script>

<style>
</style>