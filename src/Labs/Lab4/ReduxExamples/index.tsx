import React from "react";
import TodoForm from "./todos/TodoForm";
import TodoList from "./todos/TodoList";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoForm />
      <TodoList />
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
    </div>
  );
}
