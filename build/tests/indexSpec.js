"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validationController_1 = __importDefault(require("./../controllers/validationController"));
// test function that check query param is defined or not
describe('test required function to validate inputs', function () {
    it('when param undefined', function () {
        var name;
        expect(validationController_1.default.definedParam(name)).toBeFalsy();
    });
    it('when param is defined', function () {
        var name = 'wonder';
        expect(validationController_1.default.definedParam(name)).toBeTruthy();
    });
    // function to test that width or height is correct
    it('when dimension is valid', function () {
        expect(validationController_1.default.validDimension('40')).toBeTruthy();
    });
    it('when dimension is not valid', function () {
        expect(validationController_1.default.validDimension('ss0')).toBeFalsy();
    });
    it('when dimension with negative value', function () {
        expect(validationController_1.default.validDimension('-30')).toBeFalsy();
    });
    it('when image is exist', function () {
        expect(validationController_1.default.isImage('wonder1')).toBeTruthy();
    });
});
