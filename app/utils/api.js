"use strict";
exports.__esModule = true;
exports.quranDetail = void 0;
var env_1 = require("../constants/env");
var quranDetail = function (surahId, jmlAyat) {
    return "".concat(env_1.BASE_URL, "/v1/ayatweb/").concat(surahId, "/0/0/").concat(jmlAyat);
};
exports.quranDetail = quranDetail;
