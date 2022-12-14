"use strict";
// export const createDecryptionMap = (
//   encryptionMap: Map<string, number>
// ): Map<number, string> => {
//   const decryptionMap = new Map<number, string>();
//   encryptionMap.forEach((value: number, key: string) => {
//     decryptionMap.set(value, key);
//   });
//   return decryptionMap;
// };
// export const decryptText = (
//   encryptedText: number[],
//   decryptionMap: Map<number, string>
// ): string => {
//   const decryptedTextArr = encryptedText.map((num: number): string => {
//     return decryptionMap.get(num) ?? "NOT FOUND";
//   });
//   return decryptedTextArr.join("");
// };
