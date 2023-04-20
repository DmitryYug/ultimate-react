import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('With first argument', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('With mode', () => {
        expect(classNames('someClass', { hovered: true })).toBe('someClass hovered');
    });
    test('With false mode', () => {
        expect(classNames('someClass ', { hovered: false })).toBe('someClass');
    });
    test('With additional class', () => {
        const expected = 'someClass additional1 additional2';
        expect(classNames('someClass', {}, ['additional1', 'additional2'])).toBe(expected);
    });
    test('With all arguments', () => {
        const expected = 'someClass additional1 additional2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false, scaled: undefined },
            ['additional1', 'additional2'],
        )).toBe(expected);
    });
});
