import FetchClass from './fetchClass.js';
import { IData, IPatch } from './types.js';

// Константы для примера
// const postData: IData = {
//   name: 'kedr',
//   info: 'test',
//   isImportant: true,
//   isCompleted: false,
// };

// const putData: IData = {
//   name: 'kedr',
//   info: 'test',
//   isImportant: true,
//   isCompleted: true,
// };

// const patchData: IPatch = {
//   isCompleted: true,
// };

// -----------------------

class Facade {
  getTask(taskId: number): void {
    return new FetchClass().getTask(taskId);
  }

  getAllTasks(): void {
    return new FetchClass().getAllTasks();
  }

  postTask(postData: IData): void {
    return new FetchClass().postTask(postData);
  }

  putTask(taskId: number, putData: IData): void {
    return new FetchClass().putTask(taskId, putData);
  }

  patchTask(taskId: number, patchData: IPatch): void {
    return new FetchClass().patchTask(taskId, patchData);
  }

  deleteTask(taskId: number): void {
    return new FetchClass().deleteTask(taskId);
  }
}

// Метод запроса (fetch или XMLHttpRequest) меняется в зависимости от аргумента,
// передаваемого в конструктор класса Facade ("fetch" или что-то иное)

const work = new Facade();
work.getAllTasks();
