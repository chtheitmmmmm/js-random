// function

import {
    numberChars,
    xdigitChars,
    upperChars,
    lowerChars,
    alphaChars,
    alNumChars,
    printableChars,
    randomLengthSymbol,
    randomLengthRange
} from "./js-chengmin-random/constants.js";
import {
    oneInOther,
    isprintable,
    isalnum,
    isdigit,
    islower,
    isalpha,
    isupper
} from "./js-chengmin-random/ctype.js";
import {
    generateNumbersFromRange,
    generateCharsFromRange,
    generateFromRange
} from "./js-chengmin-random/generateFromRange.js";
import {Probability} from "./js-chengmin-random/probability";
import {
    randomAlphaChar,
    randomAlNumChar,
    randomNumberChar,
    randomUpperChar,
    randomLowerChar,
    randomPrintableChar
} from "./js-chengmin-random/randomChar";
import {randomChoice} from "./js-chengmin-random/randomChoice";
import {randomInt, randomFloat} from "./js-chengmin-random/randomNumber";

export {
    // 各种字符集
    numberChars,
    xdigitChars,
    upperChars,
    lowerChars,
    alphaChars,
    alNumChars,
    printableChars,

    // 以下是所有函数结构
    oneInOther,
    isprintable,
    isalnum,
    isdigit,
    islower,
    isalpha,
    isupper,

    generateFromRange,
    generateNumbersFromRange,
    generateCharsFromRange,

    randomChoice,
    randomAlphaChar,
    randomAlNumChar,
    randomNumberChar,
    randomUpperChar,
    randomLowerChar,
    randomPrintableChar,
    randomInt,
    randomFloat,
    // 一个类，用分数表示概率，用 ok() 函数来测试本次调用是否为 true
    Probability
}