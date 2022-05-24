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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validationController_1 = __importDefault(require("./validationController"));
var createThumbnail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, err_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!validationController_1.default.definedParam(req.query.name)) {
                    return [2 /*return*/, res.status(200).json({ Fail: 'Image name is not defined' })];
                }
                if (!validationController_1.default.definedParam(req.query.width)) {
                    return [2 /*return*/, res.status(301).json({ Fail: 'Image width is not defined' })];
                }
                if (!validationController_1.default.definedParam(req.query.height)) {
                    return [2 /*return*/, res.status(301).json({ Fail: 'Image height is not defined' })];
                }
                if (!validationController_1.default.validDimension(req.query.width)) {
                    return [2 /*return*/, res
                            .status(301)
                            .json({ Fail: 'Image width is not Valid , please enter valid width' })];
                }
                if (!validationController_1.default.validDimension(req.query.height)) {
                    return [2 /*return*/, res
                            .status(301)
                            .json({ Fail: 'Image height is not Valid , please enter valid height' })];
                }
                if (!validationController_1.default.isImage(req.query.name)) {
                    return [2 /*return*/, res.status(301).json({ Fail: 'Image is Not Found' })];
                }
                return [4 /*yield*/, validationController_1.default.isThumnail(req.query.name, Number(req.query.width), Number(req.query.height))];
            case 1:
                if (!_e.sent()) return [3 /*break*/, 4];
                _b = (_a = res
                    .status(200))
                    .sendFile;
                return [4 /*yield*/, validationController_1.default.getImage(req.query.name, Number(req.query.width), Number(req.query.height))];
            case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent()])];
            case 3: return [2 /*return*/, _e.sent()];
            case 4:
                _e.trys.push([4, 8, , 9]);
                return [4 /*yield*/, validationController_1.default.createThumnail(req.query.name, Number(req.query.width), Number(req.query.height))];
            case 5:
                _e.sent();
                _d = (_c = res
                    .status(201))
                    .sendFile;
                return [4 /*yield*/, validationController_1.default.getImage(req.query.name, Number(req.query.width), Number(req.query.height))];
            case 6: return [4 /*yield*/, _d.apply(_c, [_e.sent()])];
            case 7: return [2 /*return*/, _e.sent()];
            case 8:
                err_1 = _e.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ error: 'error with image processing' })];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.default = createThumbnail;
