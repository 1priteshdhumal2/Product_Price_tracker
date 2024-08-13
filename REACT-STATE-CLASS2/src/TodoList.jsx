import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    console.log("new task in todo");
  };

  return (
    <div>
      <input type="text" placeholder="Add a task" />
      <br />
      <br />
      <button onClick={addNewTask()}>Add Task</button>
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
