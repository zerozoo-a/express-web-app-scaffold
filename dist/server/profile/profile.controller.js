"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const express_1 = require("express");
const profile_service_1 = require("./profile.service");
const profileService = new profile_service_1.ProfileService({
    DOMAIN: `/profile/profile`,
});
exports.profileController = (0, express_1.Router)();
exports.profileController.get("", profileService.render);
//# sourceMappingURL=profile.controller.js.map