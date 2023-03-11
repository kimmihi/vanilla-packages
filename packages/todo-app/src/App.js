import Header from "./components/Layout/Header";
import TodoListContainer from "./components/TodoListContainer";
import TodoFormModal from "./components/TodoFormModal";

import { getTodoList, addTodo } from "./utils/storage";

export default class App {
  state = {
    isOpenModal: false,
  };
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;

    this.render();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
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
    const todoFormModalContainer = document.querySelector(
      ".todo-form-modal-container"
    );

    const todoList = getTodoList();

    new Header(headerContainer, { onOpen: this.handleOpenModal.bind(this) });
    new TodoListContainer(todoListContainer, { todoList });
    new TodoFormModal(todoFormModalContainer, {
      isOpen: this.state.isOpenModal,
      onClose: this.handleCloseModal.bind(this),
    });
  }

  handleOpenModal() {
    this.setState({ isOpenModal: true });
  }

  handleCloseModal() {
    this.setState({ isOpenModal: false });
  }

  addTodo(newTodo) {}
}
