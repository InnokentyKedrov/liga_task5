import URI_API from './const.js';
const rightOrWrong = (data, method) => {
    if (data.status < 200 || data.status >= 300) {
        console.warn(`XMLHttpRequest ${method} error: ${data.status}: ${data.statusText}`);
    }
    else
        console.log(`XMLHttpRequest ${method} ok: `, data.response);
};
export default class XMLClass {
    getTask(taskId) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${URI_API}/${taskId}`);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();
        xhr.responseType = 'json';
        xhr.onloadend = () => rightOrWrong(xhr, 'getTask');
    }
    getAllTasks() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', URI_API);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();
        xhr.responseType = 'json';
        xhr.onloadend = () => rightOrWrong(xhr, 'getAllTasks');
    }
    postTask(postData) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', URI_API);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(postData));
        xhr.responseType = 'json';
        xhr.onloadend = () => rightOrWrong(xhr, 'postTask');
    }
    putTask(taskId, putData) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `${URI_API}/${taskId}`);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(putData));
        xhr.responseType = 'json';
        xhr.onloadend = () => rightOrWrong(xhr, 'putTask');
    }
    patchTask(taskId, patchData) {
        const xhr = new XMLHttpRequest();
        xhr.open('PATCH', `${URI_API}/${taskId}`);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(patchData));
        xhr.responseType = 'json';
        xhr.onloadend = () => rightOrWrong(xhr, 'patchTask');
    }
    deleteTask(taskId) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${URI_API}/${taskId}`);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();
        xhr.responseType = 'json';
        xhr.onloadend = () => rightOrWrong(xhr, 'deleteTask');
    }
}
//# sourceMappingURL=xmlClass.js.map