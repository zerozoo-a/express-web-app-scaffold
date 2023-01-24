"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeService = void 0;
const homeService = (req, res) => {
    const DOMAIN = `/home/home`;
    const app = req.app;
    app.get("pools");
    res.render(`${process.env.PWD}${process.env.ROUTER}${DOMAIN}`, {
        title: "HOME TITLE",
        date: new Date().toLocaleTimeString(),
    });
};
exports.homeService = homeService;
//# sourceMappingURL=home.service.js.map