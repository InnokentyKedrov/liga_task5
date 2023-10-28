import URI_API from './const.js';
import { IData, IHXR, IPatch } from './types.js';

const rightOrWrong = (data: IHXR, method: string): void => {
  if (data.status < 200 || data.status >= 300) {
    console.warn(`XMLHttpRequest ${method} error: ${data.status}: ${data.statusText}`);
  } else console.log(`XMLHttpRequest ${method} ok: `, data.response);
};
export default class XMLClass {
  getTask(taskId: number): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${URI_API}/${taskId}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
    xhr.responseType = 'json';
    xhr.onloadend = (): void => rightOrWrong(xhr, 'getTask');
  }

  getAllTasks(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URI_API);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
    xhr.responseType = 'json';
    xhr.onloadend = (): void => rightOrWrong(xhr, 'getAllTasks');
  }

  postTask(postData: IData): void {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', URI_API);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(postData));
    xhr.responseType = 'json';
    xhr.onloadend = (): void => rightOrWrong(xhr, 'postTask');
  }

  putTask(taskId: number, putData: IData): void {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `${URI_API}/${taskId}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(putData));
    xhr.responseType = 'json';
    xhr.onloadend = (): void => rightOrWrong(xhr, 'putTask');
  }

  patchTask(taskId: number, patchData: IPatch): void {
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', `${URI_API}/${taskId}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(patchData));
    xhr.responseType = 'json';
    xhr.onloadend = (): void => rightOrWrong(xhr, 'patchTask');
  }

  deleteTask(taskId: number): void {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${URI_API}/${taskId}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
    xhr.responseType = 'json';
    xhr.onloadend = (): void => rightOrWrong(xhr, 'deleteTask');
  }
}
