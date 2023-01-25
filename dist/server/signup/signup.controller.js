"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = exports.signupService = void 0;
const express_1 = require("express");
const signup_service_1 = require("./signup.service");
exports.signupService = new signup_service_1.SignupService({ DOMAIN: `/signup/signup` });
exports.signupController = (0, express_1.Router)();
exports.signupController.get("", exports.signupService.render);
//# sourceMappingURL=signup.controller.js.map