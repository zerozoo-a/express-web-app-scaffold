"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = exports.homeService = void 0;
const express_1 = require("express");
const home_service_1 = require("./home.service");
exports.homeService = new home_service_1.HomeService({ DOMAIN: `/home/home` });
exports.homeController = (0, express_1.Router)();
exports.homeController.get("", exports.homeService.render);
//# sourceMappingURL=home.controller.js.map