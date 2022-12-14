"use strict";
// import { Modification, Replacement } from "./App";
// export type Range = {
//     from: number,
//     to: number,
// }
// type Action = 'add' | 'remove';
// const addText = (text: string [], currentWordIndex: number, values: string[]): void => {
//     text.splice(currentWordIndex, 0, ...values);
//     // text = [...text.slice(0, currentWordIndex - 1), ...values, ...text.slice(currentWordIndex)];
// }
// const removeText = (text: string[], currentWordIndex: number, searchValueLength: number ): void => {
//     // text.splice(currentWordIndex, searchValueLength, ...Array(searchValueLength).fill(''));
//     text.splice(currentWordIndex, searchValueLength);
//     // for(let i = 0; i < searchValueArr.length; i++) {
//     //     text[i + currentWordIndex - 1] = '';
//     // }
// }
// export const replaceText = ({text, currentWordIndex, newValue}: Replacement): void => {
//     text.splice(currentWordIndex, 1, newValue);
// }
// export const modifyText = ({text, searchValue, range, newValues}: Modification): void => {
//     const subText = text.slice(range.from - 1, range.to);
//     const searchValueArr = searchValue.split(' ');
//     const firstSearchWordIndex = subText.indexOf(searchValueArr[0]);
//     const currentWordIndex = firstSearchWordIndex + range.from - 1;
//     if(newValues?.length) addText(text, currentWordIndex, newValues);
//     else removeText(text, currentWordIndex, searchValueArr.length);
//     // if(!newValues) newValues = Array(searchValueArr.length).fill('');
//     // text.splice(firstSearchWordIndex + range.from - 1, searchValueArr.length, ...newValues);
//     // console.log('values?.length',values?.length);
//     // if(values?.length) addText(text, range.from + firstSearchWordIndex, values);
//     // else removeText(text, range.from + firstSearchWordIndex, searchValueArr);
//     // for(let i = 0; i < searchValueArr.length; i++) {
//     //     text[i + firstSearchWordIndex + range.from - 1] = '';
//     // }
// }
// const addText = (value: string, position: Position): void => {
//     declarationOfIndepencdence.replace()
// }
// export const modifyText = (text: string[], searchValue: string, values: string[], position: Position ): string[] => {
//     const wordNUmberFrom = position.from - 1;
//     const subText = text.slice(wordNUmberFrom, position.to);
//     const searchValueArr = searchValue.split(' ');
//     const index = subText.indexOf(searchValueArr[0]);
//     // console.log('subText',subText);
//     // console.log('searchValueArr',searchValueArr);
//     // console.log('index',index);
//     // console.log('...text.slice(0, position.from -1 + index)',...text.slice(0, position.from -1 + index));
//     // console.log('...text.slice(position.from + index + searchValueArr.length )',...text.slice(position.from + index + searchValueArr.length ));
//     if(values.length) return [...text.slice(0, wordNUmberFrom + index), ...values, ...text.slice(wordNUmberFrom + index)];
//     else return [...text.slice(0, wordNUmberFrom + index), ...text.slice(wordNUmberFrom + index + searchValueArr.length )];
//     // return [...text.slice(0,position.from + 1), ...values, ...text.slice(position.to)];
//     // text.splice(position.from, position.to - position.from, ...values);
//     // console.log('text.substring(0, position.from)',text.substring(0, position.from + 1));
//     // return text.substring(0, position.from + 1) + value + text.substring(position.to + 2);
// };
