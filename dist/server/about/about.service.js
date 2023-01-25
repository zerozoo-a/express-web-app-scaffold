"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutService = void 0;
const Service_1 = require("../../lib/classes/Service");
class AboutService extends Service_1.Service {
    constructor({ DOMAIN }) {
        super({ DOMAIN });
        this.render = (req, res) => {
            res.render(this.path, {
                title: "ABOUT TITLE",
            });
        };
    }
}
exports.AboutService = AboutService;
//# sourceMappingURL=about.service.js.map