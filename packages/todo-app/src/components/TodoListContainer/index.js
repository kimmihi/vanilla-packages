import TodoItem from "./TodoItem";
export default class TodoListContainer {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;

    this.render();
  }

  template() {
    return `
        <ul class="todo-list">
        </ul>
    `;
  }

  render() {
    this.parent.innerHTML = this.template();
    this.mounted();
    this.setEvent();
  }

  setEvent() {
    this.handleFinishTodo();
  }

  handleFinishTodo() {
    const { onFinish } = this.props;
    const button = document.querySelectorAll(".finish-btn");
    button.forEach((button) =>
      button.addEventListener("click", (e) => {
        const { todoId } = e.target.dataset;
        onFinish(Number(todoId));
      })
    );
  }

  mounted() {
    const { todoList, onFinish } = this.props;
    const todoListWrapper = document.querySelector(".todo-list");

    todoList
      .filter((todo) => !todo.complete)
      .forEach((todo) => {
        todoListWrapper.insertAdjacentHTML(
          "beforeend",
          new TodoItem(null, { todo }).template()
        );
      });
  }
}
