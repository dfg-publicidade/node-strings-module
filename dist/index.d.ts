declare class Strings {
    static format(str: string, ...args: any[]): string;
    static formatCode(id: number, length: number): string;
    static getFirstName(name: string): string;
    static firstCharToUpper(str: string): string;
    static toUrl(value: string): string;
    static createFindRegex(value: string): RegExp;
}
export default Strings;
