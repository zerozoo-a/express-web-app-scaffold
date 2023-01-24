"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutController = void 0;
const express_1 = require("express");
const about_service_1 = require("./about.service");
exports.aboutController = (0, express_1.Router)();
exports.aboutController.get("", about_service_1.aboutService);
