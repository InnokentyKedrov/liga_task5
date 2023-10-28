import URI_API from './const.js';

const rightOrWrong = async (data, method) => {
  if (data.status < 200 || data.status >= 300) {
    console.warn(`fetch ${method} error: ${data.status}: ${data.statusText}`);
  } else console.log(`fetch ${method} ok: `, await data.json());
};
export default class FetchClass {
  getTask(taskId) {
    fetch(`${URI_API}/${taskId}`).then((data) => rightOrWrong(data, 'getTask'));
  }

  getAllTasks() {
    fetch(URI_API).then((data) => rightOrWrong(data, 'getAllTasks'));
  }

  postTask(postData) {
    fetch(URI_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }).then((data) => rightOrWrong(data, 'postTask'));
  }

  putTask(taskId, putData) {
    fetch(`${URI_API}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(putData),
    }).then((data) => rightOrWrong(data, 'putTask'));
  }

  patchTask(taskId, patchData) {
    fetch(`${URI_API}/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patchData),
    }).then((data) => rightOrWrong(data, 'patchTask'));
  }

  deleteTask(taskId) {
    fetch(`${URI_API}/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => rightOrWrong(data, 'deleteTask'));
  }
}
