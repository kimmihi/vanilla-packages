export default class InCompleteTodoList {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
  }

  template() {
    return `
        <div>
            <h2>InComplete Todo List</h2>
        </div>
    `;
  }
}
