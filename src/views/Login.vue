<template>
  <div id="loginContainer">
    <header>
      <h1>TODO Vue</h1>
    </header>
    <div id="content">
      <LoginForm />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/login/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style>
#loginContainer {
  display: table;
  width: 100%;
  margin: 0;
  height: 100%;
}

header {
  display: table-row;
  height: 15%;
  text-align: center;
}

#content {
  display: table-row;
  height: 100%;
}
</style>
