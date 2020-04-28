<template>
  <div id="log-form">
    <label for="username">Usuario</label>
    <br />
    <input
      required
      type="text"
      name="username"
      id="userInput"
      autocomplete="off"
      placeholder="Introduce tu usuario"
      v-model="username"
    />
    <br />
    <label for="password">Contraseña</label>
    <br />
    <input
      required
      type="password"
      name="password"
      id="passInput"
      placeholder="Introduce tu contraseña"
      v-model="password"
      @keypress.enter="authenticate()"
    />
    <span id="error">Usuario o contraseña incorrectos.</span>
    <br />
    <button @click="authenticate()">Acceder</button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    authenticate: function() {
      alert(`${this.username} ${this.password}`);
      localStorage.setItem("user-token", "Esto es un token de prueba");
      this.$router.push("Todo");
    }
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

#log-form > input {
  width: 100%;
  margin: 4% auto;
  border: 0px solid transparent;
  background-color: rgba(220, 220, 220, 0.1);
  box-shadow: 0 2px 0px 0 black;
}

#log-form > button {
  display: block;
  width: 10rem;
  height: 2em;
  margin: 10% auto;
  border-radius: 4px;
  background-color: forestgreen;
  color: white;
  font-weight: bold;
}

#error {
  display: none;
  margin-top: 10%;
  color: firebrick;
  text-decoration: firebrick underline;
  font-weight: bold;
}
</style>