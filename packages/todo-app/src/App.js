import Header from "./components/Layout/Header";
import TodoListContainer from "./components/TodoListContainer";
import TodoFormModal from "./components/TodoFormModal";

import { getTodoList, addTodo, updateTodo } from "./utils/storage";

export default class App {
  state = {
    isOpenModal: false,
    todoList: [],
  };
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;

    this.initialize();
    this.render();
  }

  initialize() {
    const todoList = getTodoList();
    this.setState({ todoList });
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

    new Header(headerContainer, { onOpen: this.handleOpenModal.bind(this) });
    new TodoListContainer(todoListContainer, {
      todoList: this.state.todoList,
      onFinish: this.handleUpdateTodo.bind(this),
    });
    new TodoFormModal(todoFormModalContainer, {
      isOpen: this.state.isOpenModal,
      onClose: this.handleCloseModal.bind(this),
      onSubmit: this.handleCreateTodo.bind(this),
    });
  }

  handleOpenModal() {
    this.setState({ isOpenModal: true });
  }

  handleCloseModal() {
    this.setState({ isOpenModal: false });
  }

  handleCreateTodo(newTodo) {
    const newTodoList = addTodo({
      id: this.state.todoList.length + 1,
      complete: false,
      ...newTodo,
    });

    this.setState({ todoList: newTodoList });
    this.handleCloseModal();
  }

  handleUpdateTodo(todoId) {
    const updatedTodoList = updateTodo(todoId);
    this.setState({ todoList: updatedTodoList });
  }
}
