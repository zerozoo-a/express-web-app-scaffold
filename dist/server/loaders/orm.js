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
const data_source_1 = require("../../db/data-source");
function ormLoader() {
    return __awaiter(this, void 0, void 0, function* () {
        data_source_1.AppDataSource.initialize()
            .then(() => {
            console.log("Data Source has been initialized!");
        })
            .catch((err) => {
            console.error("Error during Data Source initialization:", err);
        });
    });
}
exports.default = ormLoader;
//# sourceMappingURL=orm.js.map