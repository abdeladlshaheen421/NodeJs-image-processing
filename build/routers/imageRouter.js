"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageRouter = express_1.default.Router();
var imagesController_1 = __importDefault(require("./../controllers/imagesController"));
imageRouter
    .route('/images')
    .get(function (req, res) {
    return (0, imagesController_1.default)(req, res);
});
exports.default = imageRouter;
