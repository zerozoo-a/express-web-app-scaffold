"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutController = exports.aboutService = void 0;
const express_1 = require("express");
const about_service_1 = require("./about.service");
exports.aboutService = new about_service_1.AboutService({ DOMAIN: `/about/about` });
exports.aboutController = (0, express_1.Router)();
exports.aboutController.get("", exports.aboutService.render);
//# sourceMappingURL=about.controller.js.map