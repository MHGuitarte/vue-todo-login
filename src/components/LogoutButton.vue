<template>
  <button @click="logout()" class="logoutButton">Salir</button>
</template>

<script>
export default {
  name: "LogoutButton",
  methods: {
    logout: function() {
      localStorage.removeItem("user-token");
      this.$router.push("/");
    }
  }
};
</script>

<style>
.logoutButton {
  display: block;
  width: 10rem;
  height: 2em;
  margin: 10% auto;
  border-radius: 4px;
  background-color: firebrick;
  color: white;
  font-weight: bold;
}
</style>