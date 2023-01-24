"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
function* range(l) {
    if (l < 0)
        return 0;
    let i = 0;
    while (i < l) {
        yield ++i;
    }
}
exports.range = range;
//# sourceMappingURL=range.js.map