/* Module */
class Strings {
    public static format(str: string, ...args: any[]): string {
        const strs: string[] = Array();

        let arg: any;
        for (arg of args) {
            if (arg instanceof Array) {
                let argAt: any;
                for (argAt of arg) {
                    strs.push(argAt);
                }
            }
            else {
                strs.push(arg);
            }
        }

        return str.replace(/{(\d+)}/g, (match: string, nbr: number): string => strs[nbr]
            ? strs[nbr]
            : match);
    }

    public static formatCode(id: number, length: number): string {
        return id ? id.toString().padStart(length, '0') : '';
    }

    public static getFirstName(name: string): string {
        return name && name.indexOf(' ') > -1
            ? name.substr(0, name.indexOf(' '))
            : '';
    }

    public static firstCharToUpper(str: string): string {
        return str
            ? str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
            : undefined;
    }

    public static toUrl(value: string): string {
        const fromChars: string = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
        const toChars: string = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
        const rgx: RegExp = new RegExp(fromChars.split('').join('|'), 'g');

        return value.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with
            .replace(rgx, (char: string): string => toChars.charAt(fromChars.indexOf(char))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with ‘and’
            .replace(/[^\w-]+/g, '') // Remove all non-word characters
            .replace(/--+/g, '-') // Replace multiple — with single -
            .replace(/^-+/, ''); // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
    }

    public static createFindRegex(value: string): RegExp {
        value = value.replace('\\', '\\\\');
        value = value.replace('^', '\\^');
        value = value.replace('$', '\\$');
        value = value.replace('.', '\\.');
        value = value.replace('|', '\\|');
        value = value.replace('?', '\\?');
        value = value.replace('*', '\\*');
        value = value.replace('+', '\\+');
        value = value.replace('(', '\\(');
        value = value.replace(')', '\\)');
        value = value.replace('[', '\\[');
        value = value.replace(']', '\\]');
        value = value.replace('{', '\\{');
        value = value.replace('}', '\\}');

        value = value.replace(/[aàáäâãå]/ig, '[aàáäâãå]');
        value = value.replace(/[eèéëê]/ig, '[eèéëê]');
        value = value.replace(/[iìíïî]/ig, '[iìíïî]');
        value = value.replace(/[oòóöô]/ig, '[oõòóöô]');
        value = value.replace(/[uùúüû]/ig, '[uùúüû]');
        value = value.replace(/[cç]/ig, '[cç]');

        return new RegExp(value, 'gmi');
    }
}

export default Strings;
