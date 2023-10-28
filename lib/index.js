import FetchClass from './fetchClass.js';
import XMLClass from './xmlClass.js';
class Facade {
    constructor(typeRequest) {
        this.typeRequest = typeRequest;
    }
    getTask(taskId) {
        return this.typeRequest === 'fetch' ? new FetchClass().getTask(taskId) : new XMLClass().getTask(taskId);
    }
    getAllTasks() {
        return this.typeRequest === 'fetch' ? new FetchClass().getAllTasks() : new XMLClass().getAllTasks();
    }
    postTask(postData) {
        return this.typeRequest === 'fetch' ? new FetchClass().postTask(postData) : new XMLClass().postTask(postData);
    }
    putTask(taskId, putData) {
        return this.typeRequest === 'fetch'
            ? new FetchClass().putTask(taskId, putData)
            : new XMLClass().putTask(taskId, putData);
    }
    patchTask(taskId, patchData) {
        return this.typeRequest === 'fetch'
            ? new FetchClass().patchTask(taskId, patchData)
            : new XMLClass().patchTask(taskId, patchData);
    }
    deleteTask(taskId) {
        return this.typeRequest === 'fetch' ? new FetchClass().deleteTask(taskId) : new XMLClass().deleteTask(taskId);
    }
}
const work = new Facade('xml');
work.getAllTasks();
//# sourceMappingURL=index.js.map