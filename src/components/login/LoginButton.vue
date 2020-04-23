<template>
  <button @click="goToTodo()">Acceder</button>
</template>

<script>
export default {
  name: "LoginButton",
  methods: {
    goToTodo: function() {
      this.$router.push("Todo");
    }
  }
};
</script>

<style>
</style>