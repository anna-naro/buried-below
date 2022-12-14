"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class AdjustmentHandler {
}
_a = AdjustmentHandler;
AdjustmentHandler.baseTextArr = [];
AdjustmentHandler.addText = (currentWordIndex, values) => {
    _a.baseTextArr.splice(currentWordIndex, 0, ...values);
};
AdjustmentHandler.removeText = (currentWordIndex, searchValueLength) => {
    _a.baseTextArr.splice(currentWordIndex, searchValueLength);
};
AdjustmentHandler.replaceText = ({ currentWordIndex, newValue, }) => {
    _a.baseTextArr.splice(currentWordIndex, 1, newValue);
};
AdjustmentHandler.modifyText = ({ searchValue, range, newValues, }) => {
    const subText = _a.baseTextArr.slice(range.from - 1, range.to);
    const searchValueArr = searchValue.split(" ");
    const firstSearchWordIndex = subText.indexOf(searchValueArr[0]);
    const currentWordIndex = firstSearchWordIndex + range.from - 1;
    if (newValues === null || newValues === void 0 ? void 0 : newValues.length)
        _a.addText(currentWordIndex, newValues);
    else
        _a.removeText(currentWordIndex, searchValueArr.length);
};
AdjustmentHandler.init = (baseText, modificationsArr, replacementsArr) => {
    _a.baseTextArr = baseText.split(" ");
    modificationsArr.forEach((modification) => _a.modifyText(modification));
    replacementsArr.forEach((replacement) => _a.replaceText(replacement));
    return _a.baseTextArr;
};
exports.default = AdjustmentHandler;
