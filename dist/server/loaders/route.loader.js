"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeLoader = void 0;
const home_controller_1 = require("../home/home.controller");
const about_controller_1 = require("../about/about.controller");
const board_controller_1 = require("../board/board.controller");
const profile_controller_1 = require("../profile/profile.controller");
const user_controller_1 = require("../user/user.controller");
const signup_controller_1 = require("../signup/signup.controller");
function routeLoader({ app }) {
    return __awaiter(this, void 0, void 0, function* () {
        app.use("/", home_controller_1.homeController);
        app.use("/about", about_controller_1.aboutController);
        app.use("/board", board_controller_1.boardController);
        app.use("/profile", profile_controller_1.profileController);
        app.use("/user", user_controller_1.userController);
        app.use("/signup", signup_controller_1.signupController);
    });
}
exports.routeLoader = routeLoader;
//# sourceMappingURL=route.loader.js.map