"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupService = void 0;
const Service_1 = require("../../lib/classes/Service");
class SignupService extends Service_1.Service {
    constructor({ DOMAIN }) {
        super({ DOMAIN });
        this.post = (req, res) => {
            console.log("req", req);
            res.send({ greet: "hello" });
        };
        this.render = (req, res) => {
            console.log("this.path", this.path);
            res.render(this.path, {
                title: "SIGNUP TITLE",
            });
        };
    }
}
exports.SignupService = SignupService;
//# sourceMappingURL=signup.service.js.map