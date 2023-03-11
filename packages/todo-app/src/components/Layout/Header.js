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
            <button>+</button>
        </header>
    `;
  }

  render() {
    this.parent.innerHTML = this.template();
  }
}
