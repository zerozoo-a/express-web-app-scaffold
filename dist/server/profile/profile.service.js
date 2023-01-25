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
exports.ProfileService = void 0;
const Service_1 = require("../../lib/classes/Service");
class ProfileService extends Service_1.Service {
    constructor({ DOMAIN }) {
        super({ DOMAIN });
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const orm = this.app.get("orm");
        });
        this.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const con1 = this.app.get("db").conns[0];
            this.app.get("db");
            const [departments, metaData] = yield con1.query("SELECT 1 + 1");
            return res.render(this.path, {
                title: "BOARD TITLE",
                date: new Date().toLocaleTimeString(),
                data: {
                    departments,
                },
            });
        });
    }
}
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map