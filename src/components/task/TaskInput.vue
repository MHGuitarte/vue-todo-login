<template>
  <div id="taskInputContainer">
    <input
      type="text"
      placeholder="¿Alguna tarea pendiente?"
      name="taskInput"
      id="taskInput"
      maxlength="200"
    />
    <button id="addBtn">Añadir</button>
  </div>
</template>

<script>
export default {
  name: "TaskInput"
};
</script>

<style>
#taskInputContainer {
  display: block;
  text-align: center;
}

#taskInput {
  display: inline-block;
  width: 70%;
  border-radius: 6px;
  text-align: center;
  line-height: 30px;
}

#addBtn {
  display: inline-block;
  width: 6em;
  border-radius: 15px;
  padding: 1%;
  background-color: green;
  color: white;
  font-weight: bold;
}
</style>