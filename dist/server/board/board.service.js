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
exports.BoardService = void 0;
const Service_1 = require("@/lib/classes/Service");
class BoardService extends Service_1.Service {
    constructor({ DOMAIN, app }) {
        super({ DOMAIN, app });
        this.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const con1 = this.app.get("db").conns[0];
            const [departments, metaData] = yield con1.query("SELECT * FROM departments");
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
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map