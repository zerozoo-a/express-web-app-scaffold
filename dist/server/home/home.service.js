"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const Service_1 = require("../../lib/classes/Service");
class HomeService extends Service_1.Service {
    constructor({ DOMAIN }) {
        super({ DOMAIN });
        this.render = (req, res) => {
            res.render(this.path, {
                title: "Home TITLE",
            });
        };
    }
}
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map