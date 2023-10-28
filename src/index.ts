import FetchClass from './fetchClass.js';
import XMLClass from './xmlClass.js';

import { IData, IPatch, MethodType } from './types.js';

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
  typeRequest: MethodType;
  constructor(typeRequest: MethodType) {
    this.typeRequest = typeRequest;
  }

  getTask(taskId: number): void {
    return this.typeRequest === 'fetch' ? new FetchClass().getTask(taskId) : new XMLClass().getTask(taskId);
  }

  getAllTasks(): void {
    return this.typeRequest === 'fetch' ? new FetchClass().getAllTasks() : new XMLClass().getAllTasks();
  }

  postTask(postData: IData): void {
    return this.typeRequest === 'fetch' ? new FetchClass().postTask(postData) : new XMLClass().postTask(postData);
  }

  putTask(taskId: number, putData: IData): void {
    return this.typeRequest === 'fetch'
      ? new FetchClass().putTask(taskId, putData)
      : new XMLClass().putTask(taskId, putData);
  }

  patchTask(taskId: number, patchData: IPatch): void {
    return this.typeRequest === 'fetch'
      ? new FetchClass().patchTask(taskId, patchData)
      : new XMLClass().patchTask(taskId, patchData);
  }

  deleteTask(taskId: number): void {
    return this.typeRequest === 'fetch' ? new FetchClass().deleteTask(taskId) : new XMLClass().deleteTask(taskId);
  }
}

// Метод запроса (fetch или XMLHttpRequest) меняется в зависимости от аргумента,
// передаваемого в конструктор класса Facade ("fetch" или "xml")

const work = new Facade('xml');
work.getAllTasks();
