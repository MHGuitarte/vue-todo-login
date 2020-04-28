<template>
  <div class="task" id="task1">
    <div class="taskInfo">
      <h3 class="taskTitle">
        Task 1
        <button class="disposeBtn">Completar</button>
      </h3>
    </div>
    <div class="taskAddInfo">
      <p>
        <strong>Por:</strong> Antonio
        <span class="taskDate">
          <strong>Fecha:</strong> 01/01/2000
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    creationDate: {
      type: Date,
      required: true
    },
    completionDate: {
      type: Date,
      required: false
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style>
.task {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 90%;
  height: auto;
  margin: 1% 0;
  padding: 0 1%;
  border: 2px solid green;
  border-radius: 15px;
}

.taskInfo {
  width: 100%;
}

.taskTitle {
  width: 100%;
  height: auto;
}

.disposeBtn {
  height: auto;
  margin: auto;
  border-radius: 10px;
  background-color: firebrick;
  color: white;
  float: right;
}

.disposeBtn:hover {
  background-color: white;
  color: firebrick;
  font-weight: bold;
}

.taskAddInfo {
  width: 100%;
  margin: 0;
  padding: 0;
}

.taskAddInfo > p {
  display: inline-block;
  width: inherit;
  margin: 1% 0;
}

.taskDate {
  float: right;
}
</style>