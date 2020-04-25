<template>
  <div id="todoContainer">
    <h1 id="title">TODO List</h1>
    <TaskInput />
    <TaskList />
  </div>
</template>

<script>
import TaskInput from "@/components/task/TaskInput.vue";
import TaskList from "@/components/task/TaskList.vue";

export default {
  name: "Todo",
  components: {
    TaskInput,
    TaskList
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
</style>