import { expect } from 'chai';
import { describe, it } from 'mocha';
import Strings from '../src';

/* Tests */
describe('index.ts', (): void => {
    it('1. formatCode', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.formatCode(1, 8)).to.be.eq('00000001');
    });

    it('2. formatCode', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.formatCode(undefined, 8)).to.be.eq('');
    });

    it('3. getFirstName', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.getFirstName('Test test')).to.be.eq('Test');
    });

    it('4. getFirstName', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.getFirstName(undefined)).to.be.eq('');
    });

    it('5. firstCharToUpper', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.firstCharToUpper('test')).to.be.eq('Test');
    });

    it('6. firstCharToUpper', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.firstCharToUpper(undefined)).to.be.eq(undefined);
    });

    it('7. toUrl', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.toUrl('Test test áéíóú')).to.be.eq('test-test-aeiou');
    });

    it('8. createFindRegex', async (): Promise<void> => {
        // eslint-disable-next-line no-magic-numbers
        expect(Strings.createFindRegex('search')).to.be.deep.eq(new RegExp('s[eèéëê][aàáäâãå]r[cç]h', 'gim'));
    });
});
