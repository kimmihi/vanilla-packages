const STORAGE_KEY = {
  todoList: "todo-list",
};

const getTodoList = () => {
  const todoList = getStorageData(STORAGE_KEY.todoList) || [];

  return todoList;
};

const addTodo = (newTodo) => {
  const todoList = getTodoList();
  const newTodoList = [...todoList, newTodo];

  setStorage(STORAGE_KEY.todoList, newTodoList);

  return getTodoList();
};

const updateTodo = (todoId) => {
  const todoList = getTodoList();
  const updatedTodoList = todoList.map((todo) =>
    todo.id === todoId ? { ...todo, complete: true } : todo
  );
  setStorage(STORAGE_KEY.todo, updatedTodoList);

  return updatedTodoList;
};

const getStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setStorage = (key, value) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(value));
};

export { getTodoList, addTodo, updateTodo };
