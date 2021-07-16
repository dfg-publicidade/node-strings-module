"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Module */
class Strings {
    static formatCode(id, length) {
        return id ? id.toString().padStart(length, '0') : '';
    }
    static getFirstName(name) {
        return name
            ? name.indexOf(' ') > -1
                ? name.substr(0, name.indexOf(' '))
                : name
            : '';
    }
    static firstCharToUpper(str) {
        return str
            ? str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
            : undefined;
    }
    static toUrl(value) {
        if (!value) {
            return '';
        }
        const fromChars = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
        const toChars = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
        const rgx = new RegExp(fromChars.split('').join('|'), 'g');
        return value.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with
            .replace(rgx, (char) => toChars.charAt(fromChars.indexOf(char))) // Replace special characters
            .replace(/&/g, '-') // Replace & with ‘-‘
            .replace(/[^\w-]+/g, '') // Remove all non-word characters
            .replace(/--+/g, '-') // Replace multiple — with single -
            .replace(/^-+/, '') // Trim — from start of text
            .replace(/-+$/, ''); // Trim — from end of text
    }
    static createFindRegex(value) {
        if (!value) {
            throw new Error('Regex string cannot be empty');
        }
        value = value.replace(/\\/ig, '\\\\');
        value = value.replace(/\^/ig, '\\^');
        value = value.replace(/\$/ig, '\\$');
        value = value.replace(/\./ig, '\\.');
        value = value.replace(/\|/ig, '\\|');
        value = value.replace(/\?/ig, '\\?');
        value = value.replace(/\*/ig, '\\*');
        value = value.replace(/\+/ig, '\\+');
        value = value.replace(/\(/ig, '\\(');
        value = value.replace(/\)/ig, '\\)');
        value = value.replace(/\[/ig, '\\[');
        value = value.replace(/\]/ig, '\\]');
        value = value.replace(/\{/ig, '\\{');
        value = value.replace(/\}/ig, '\\}');
        value = value.replace(/[aàáäâãå]/ig, '[aàáäâãå]');
        value = value.replace(/[eèéëê]/ig, '[eèéëê]');
        value = value.replace(/[iìíïî]/ig, '[iìíïî]');
        value = value.replace(/[oòóöô]/ig, '[oõòóöô]');
        value = value.replace(/[uùúüû]/ig, '[uùúüû]');
        value = value.replace(/[cç]/ig, '[cç]');
        return new RegExp(value, 'gmi');
    }
}
Strings.createFindRegex('x\\zx\\');
exports.default = Strings;
