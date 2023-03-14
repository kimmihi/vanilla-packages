export default class Header {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;

    this.render();
  }

  template() {
    return `
        <header>
            <h1 id="title">
                My Todo
            </h1>
            <div class="nav">
              <a href="#/all">전체</a>
              <a href="#/complete">완료</a>
              <a href="#/incomplete">미완료</a>
            </div>
            <button class="open-modal-btn">+</button>
        </header>
    `;
  }

  render() {
    this.parent.innerHTML = this.template();
    this.setEvent();
  }

  setEvent() {
    this.onClickOpenModalBtn();
  }

  onClickOpenModalBtn() {
    const openModalBtn = document.querySelector(".open-modal-btn");
    const { onOpen } = this.props;
    openModalBtn.addEventListener("click", () => {
      onOpen();
    });
  }
}
