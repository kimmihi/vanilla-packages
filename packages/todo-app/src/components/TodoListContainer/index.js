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
  }

  mounted() {
    const { todoList } = this.props;
    const todoListWrapper = document.querySelector(".todo-list");

    todoList.forEach((todo) => {
      todoListWrapper.insertAdjacentHTML(
        "beforeend",
        new TodoItem(null, { todo }).template()
      );
    });
  }
}
