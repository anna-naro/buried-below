import { Modification, Replacement } from "../types/adjustment";

class AdjustmentHandler {
  private static baseTextArr: string[] = [];

  private static addText = (
    currentWordIndex: number,
    values: string[]
  ): void => {
    this.baseTextArr.splice(currentWordIndex, 0, ...values);
  };

  private static removeText = (
    currentWordIndex: number,
    searchValueLength: number
  ): void => {
    this.baseTextArr.splice(currentWordIndex, searchValueLength);
  };

  private static replaceText = ({
    currentWordIndex,
    newValue,
  }: Replacement): void => {
    this.baseTextArr.splice(currentWordIndex, 1, newValue);
  };

  private static modifyText = ({
    searchValue,
    range,
    newValues,
  }: Modification): void => {
    const subText = this.baseTextArr.slice(range.from - 1, range.to);
    const searchValueArr = searchValue.split(" ");

    const firstSearchWordIndex = subText.indexOf(searchValueArr[0]);
    const currentWordIndex = firstSearchWordIndex + range.from - 1;

    if (newValues?.length) this.addText(currentWordIndex, newValues);
    else this.removeText(currentWordIndex, searchValueArr.length);
  };

  static init = (
    baseText: string,
    modificationsArr: Modification[],
    replacementsArr: Replacement[]
  ): string[] => {
    this.baseTextArr = baseText.split(" ");

    modificationsArr.forEach((modification: Modification) =>
      this.modifyText(modification)
    );
    replacementsArr.forEach((replacement: Replacement) =>
      this.replaceText(replacement)
    );

    return this.baseTextArr;
  };
}

export default AdjustmentHandler;
