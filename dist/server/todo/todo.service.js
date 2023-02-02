"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const Service_1 = require("../../lib/classes/Service");
const todo_entity_1 = require("../../db/entity/todo.entity");
class TodoService extends Service_1.Service {
    constructor({ DOMAIN }) {
        super({ DOMAIN });
        this.render = (req, res) => {
            res.render(this.path, this.props);
        };
        this.addTodoPost = (req, res) => {
            const newTodo = new todo_entity_1.Todo();
            newTodo.content = "hi";
            this.repo.getRepository(todo_entity_1.Todo).save(newTodo);
            res.send({ hi: "hello" });
        };
        this.props = {
            title: "TODO TITLE",
            layout: this.layout("default"),
            components: [""],
        };
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map