"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Module */
class Strings {
    static format(str, ...args) {
        const strs = Array();
        let arg;
        for (arg of args) {
            if (arg instanceof Array) {
                let argAt;
                for (argAt of arg) {
                    strs.push(argAt);
                }
            }
            else {
                strs.push(arg);
            }
        }
        return str.replace(/{(\d+)}/g, (match, nbr) => strs[nbr]
            ? strs[nbr]
            : match);
    }
    static formatCode(id, length) {
        return id ? id.toString().padStart(length, '0') : '';
    }
    static getFirstName(name) {
        return name && name.indexOf(' ') > -1
            ? name.substr(0, name.indexOf(' '))
            : '';
    }
    static firstCharToUpper(str) {
        return str
            ? str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
            : undefined;
    }
    static toUrl(value) {
        const fromChars = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
        const toChars = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
        const rgx = new RegExp(fromChars.split('').join('|'), 'g');
        return value.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with
            .replace(rgx, (char) => toChars.charAt(fromChars.indexOf(char))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with ‘and’
            .replace(/[^\w-]+/g, '') // Remove all non-word characters
            .replace(/--+/g, '-') // Replace multiple — with single -
            .replace(/^-+/, ''); // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
    }
    static createFindRegex(value) {
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
exports.default = Strings;
