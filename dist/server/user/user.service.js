"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const Service_1 = require("../../lib/classes/Service");
const user_entity_1 = require("../../db/entity/user.entity");
class UserService extends Service_1.Service {
    constructor({ DOMAIN }) {
        super({ DOMAIN });
        this.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.render(this.path, {
                title: "USER TITLE",
            });
        });
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const r = yield this.repo
                .getRepository(user_entity_1.User)
                .find({ relations: { profile: true } });
            res.send("sorry");
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map