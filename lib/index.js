import FetchClass from './fetchClass.js';
class Facade {
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
const work = new Facade();
work.getAllTasks();
//# sourceMappingURL=index.js.map