var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import URI_API from './const.js';
const rightOrWrong = (data, method) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.status < 200 || data.status >= 300) {
        console.log(`fetch ${method} error: ${data.status}: ${data.statusText}`);
    }
    else {
        console.log(`fetch ${method} ok:`, yield data.json());
    }
});
export default class FetchClass {
    getTask(taskId) {
        fetch(`${URI_API}/${taskId}`).then((data) => {
            rightOrWrong(data, 'getTask');
        });
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
//# sourceMappingURL=fetchClass.js.map