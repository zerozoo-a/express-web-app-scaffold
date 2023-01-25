"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const express_1 = require("express");
const user_service_1 = require("./user.service");
const userService = new user_service_1.UserService({
    DOMAIN: `/user/user`,
});
exports.userController = (0, express_1.Router)();
exports.userController.get("", userService.render);
//# sourceMappingURL=user.controller.js.map