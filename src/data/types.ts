export class Logo {
    logoImag: string;
    result: string;
    keyboard: string;
    numberWords: number;
    hint: string;

    constructor(logoImag: string, result: string, keyboard: string, numberWords: number, hint: string) {
        this.logoImag = logoImag;
        this.result = result;
        this.keyboard = keyboard;
        this.numberWords = numberWords;
        this.hint = hint;
    }
}