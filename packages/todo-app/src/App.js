export default class App {
  state = {
    count: 0,
  };

  constructor(parent) {
    this.parent = parent;
    this.target = document.createElement("div");
    this.render();
    this.setEvent();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
    this.setEvent();
  }

  render() {
    this.parent.innerHTML = `<h2>${this.state.count}</h2><button>+</button>`;
  }

  setEvent() {
    console.log("set event!!");
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
      this.setState({ count: this.state.count + 1 });
    });
  }
}
