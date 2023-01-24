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
exports.aboutService = void 0;
const aboutService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const DOMAIN = `/about/about`;
    const app = req.app;
    const db = app.get("db");
    const ADD = "SELECT ? AS solution";
    const [result, metaData] = yield db.conns[0].query(ADD, [1 + 1]);
    res.render(`${process.env.PWD}${process.env.ROUTER}${DOMAIN}`, {
        title: "ABOUT TITLE",
    });
});
exports.aboutService = aboutService;
//# sourceMappingURL=about.service.js.map