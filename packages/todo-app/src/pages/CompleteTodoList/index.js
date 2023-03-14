export default class CompleteTodoList {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
  }

  template() {
    return `
        <div>
            <h2>Complete Todo List</h2>
        </div>
    `;
  }
}
