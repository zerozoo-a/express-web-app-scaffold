"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const Service_1 = require("../../lib/classes/Service");
class HomeService extends Service_1.Service {
    constructor({ DOMAIN }) {
        super({ DOMAIN });
        this.render = (req, res) => {
            console.log("public?", this.PATHS.public);
            res.render(this.path, this.props);
        };
        this.props = {
            title: "HOME~~TITLE",
            layout: this.layout("default"),
            components: [`hello`, `world`, `greet`, `name`],
        };
    }
}
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map