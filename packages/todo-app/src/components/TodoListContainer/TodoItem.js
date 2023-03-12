export default class TodoItem {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
  }

  template() {
    const { todo } = this.props;
    return `
        <div class="todo-item">
          <div>
              <h3 class="todo-title">${todo.title}</h3>
              <p class="todo-content">${todo.content}</p>
          </div>
           <button class="finish-btn" data-todo-id="${todo.id}">완료</button>
        </div>
        `;
  }

  render() {
    this.parent.innerHTML = this.template();
  }

  // setEvent() {
  //   this.handleClickFinishBtn();
  // }

  // handleClickFinishBtn() {
  //   const { todo, onFinish } = this.props;
  //   const finishBtn = document.querySelector(".finish-btn");

  //   finishBtn.addEventListener("click", () => {
  //     console.log("finish btn");
  //     onFinish(todo.id);
  //   });
  // }
}
