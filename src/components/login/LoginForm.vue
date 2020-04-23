<template>
  <div id="log-form">
    <UserInput />
    <PassInput />
    <LoginButton />
  </div>
</template>

<script>
import UserInput from "@/components/login/LoginUserInput.vue";
import PassInput from "@/components/login/LoginPassInput.vue";
import LoginButton from "@/components/login/LoginButton.vue";

export default {
  name: "LoginForm",
  components: {
    UserInput,
    PassInput,
    LoginButton
  }
};
</script>

<style>
#log-form {
  display: block;
  width: 20%;
  height: 30rem;
  margin: auto;
  padding: 5% 2%;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: rgba(220, 220, 220, 0.4);
  box-sizing: border-box;
}

input {
  width: 100%;
  margin: 4% auto;
  border: 0px solid transparent;
  background-color: rgba(220, 220, 220, 0.1);
  box-shadow: 0 2px 0px 0 black;
}

button {
  display: block;
  width: 10rem;
  height: 2em;
  margin: 10% auto;
  border-radius: 4px;
  background-color: forestgreen;
  color: white;
  font-weight: bold;
}
</style>