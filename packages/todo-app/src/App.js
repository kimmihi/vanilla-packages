import Header from "./components/Layout/Header";
import TodoListContainer from "./components/TodoListContainer";

import { getTodoList } from "./utils/storage";

export default class App {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;

    this.render();
  }

  template() {
    return `
      <section class="header-container"></section>
      <section class="todo-list-container"></section>
      <section class="todo-form-modal-container"></section>
    `;
  }

  render() {
    this.parent.innerHTML = this.template();
    this.mounted();
  }

  mounted() {
    const headerContainer = document.querySelector(".header-container");
    const todoListContainer = document.querySelector(".todo-list-container");

    const todoList = getTodoList();

    new Header(headerContainer);
    new TodoListContainer(todoListContainer, { todoList });
  }
}
