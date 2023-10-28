import FetchClass from './fetchClass.js';

// Константы для примера
const postData = {
  name: 'kedr',
  info: 'test',
  isImportant: true,
  isCompleted: false,
  id: 0,
};

const putData = {
  name: 'kedr',
  info: 'test',
  isImportant: true,
  isCompleted: true,
  id: 0,
};

const patchData = {
  isCompleted: true,
};

// -----------------------

class Facade {
  constructor(typeRequest) {
    this.typeRequest = typeRequest;
  }

  getTask(taskId) {
    return new FetchClass().getTask(taskId);
  }

  getAllTasks() {
    return new FetchClass().getAllTasks();
  }

  postTask(postData) {
    return new FetchClass().postTask(postData);
  }

  putTask(taskId, putData) {
    return new FetchClass().putTask(taskId, putData);
  }

  patchTask(taskId, patchData) {
    return new FetchClass().patchTask(taskId, patchData);
  }

  deleteTask(taskId) {
    return new FetchClass().deleteTask(taskId);
  }
}

// Метод запроса (fetch или XMLHttpRequest) меняется в зависимости от аргумента,
// передаваемого в конструктор класса Facade ("fetch" или что-то иное)

const work = new Facade('');
work.getAllTasks(8, {
  blabla: true,
});
