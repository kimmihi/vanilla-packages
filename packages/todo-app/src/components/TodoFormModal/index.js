export default class TodoFormModal {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;

    this.render();
  }

  template() {
    const { isOpen } = this.props;
    return isOpen
      ? `
        <div class="modal-wrapper">
            <div class="modal">
                <div class="modal-title">
                    <h3>할 일 추가하기<h3>
                    <button class="modal-close-btn">X</button>
                </div>
                <div class="modal-content">
                    <form class="todo-form">
                        <input class="todo-title-input" placeholder="할 일 제목"/>
                        <input class="todo-content-input" placeholder="내용"/>
                        <button class="todo-add-btn">추 가</button>
                    </form>
                </div>
            </div>
        </div>
    `
      : "";
  }

  render() {
    this.parent.innerHTML = this.template();
    this.setEvent();
  }

  setEvent() {
    this.handleCloseModal();
    this.handleSubmitTodo();
  }

  handleSubmitTodo() {
    const { onSubmit } = this.props;
    const todoForm = document.querySelector(".todo-form");

    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const [titleInput, contentInput] = e.target;

      onSubmit({
        title: titleInput.value,
        content: contentInput.value,
      });
    });
  }

  handleCloseModal() {
    const modalCloseBtn = document.querySelector(".modal-close-btn");
    const { onClose } = this.props;
    modalCloseBtn.addEventListener("click", () => {
      onClose();
    });
  }
}
