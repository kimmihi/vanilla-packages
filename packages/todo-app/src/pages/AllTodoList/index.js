export default class AllTodoList {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
  }

  template() {
    return `<div> 
        <h2>All Todo List</h2>
    </div>`;
  }
}
