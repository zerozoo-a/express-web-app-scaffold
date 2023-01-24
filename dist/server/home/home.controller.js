"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
const express_1 = require("express");
const home_service_1 = require("./home.service");
exports.homeController = (0, express_1.Router)();
exports.homeController.get("", home_service_1.homeService);
