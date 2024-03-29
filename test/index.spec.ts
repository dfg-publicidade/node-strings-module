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
        expect(Strings.getFirstName('Test test')).to.be.eq('Test');
    });

    it('4. getFirstName', async (): Promise<void> => {
        expect(Strings.getFirstName('Test')).to.be.eq('Test');
    });

    it('5. getFirstName', async (): Promise<void> => {
        expect(Strings.getFirstName(undefined)).to.be.eq('');
    });

    it('6. firstCharToUpper', async (): Promise<void> => {
        expect(Strings.firstCharToUpper('test')).to.be.eq('Test');
    });

    it('7. firstCharToUpper', async (): Promise<void> => {
        expect(Strings.firstCharToUpper(undefined)).to.be.eq(undefined);
    });

    it('8. toUrl', async (): Promise<void> => {
        expect(Strings.toUrl('-Test test àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;&')).to.be.eq('test-test-aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh');
    });

    it('9. toUrl', async (): Promise<void> => {
        expect(Strings.toUrl(undefined)).to.be.eq('');
    });

    it('10. createFindRegex', async (): Promise<void> => {
        expect(Strings.createFindRegex('search')).to.be.deep.eq(new RegExp('s[eèéëê][aàáäâãå]r[cç]h', 'gim'));
    });

    it('11. createFindRegex', async (): Promise<void> => {
        expect((): void => {
            Strings.createFindRegex(undefined);
        }).to.throw('Regex string cannot be empty');
    });
});
