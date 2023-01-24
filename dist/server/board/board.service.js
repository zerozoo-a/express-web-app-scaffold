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
exports.BoardService = exports.Service = void 0;
class Service {
    constructor({ DOMAIN, app }) {
        this.DOMAIN = DOMAIN;
        this.path = `${process.env.PWD}${process.env.ROUTER}${this.DOMAIN}`;
        this.app = app;
    }
}
exports.Service = Service;
class BoardService extends Service {
    constructor({ DOMAIN, app }) {
        super({ DOMAIN, app });
        this.render = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
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
        this.secret = (req, res, next) => {
            console.log("req", req.query);
            res.send("hi");
        };
    }
}
exports.BoardService = BoardService;
