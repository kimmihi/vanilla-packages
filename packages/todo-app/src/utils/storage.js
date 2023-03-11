const STORAGE_KEY = {
  todoList: "todo-list",
};

const getTodoList = () => {
  const todoList = [
    { id: 1, title: "hello", content: "starbucks", complete: false },
    { id: 2, title: "hello2", content: "starbucks2", complete: false },
    { id: 2, title: "hello2", content: "starbucks2", complete: false },
  ]; // getStorageData(STORAGE_KEY.todoList) ||

  return todoList;
};

const addTodo = (newTodo) => {
  const todoList = getTodoList();
  const newTodoList = [...todoList, newTodo];

  setStorage(STORAGE_KEY.todoList, newTodoList);
};

const getStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setStorage = (key, value) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(value));
};

export { getTodoList, addTodo };
