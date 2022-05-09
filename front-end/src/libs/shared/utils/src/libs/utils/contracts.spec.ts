import { requireNonNull } from './contracts';

describe('Contracts', () => {
    it('should Asserts.requireNonNull throw exception', () => {
        expect(requireNonNull('')).toBe('');
        expect(requireNonNull(0)).toBe(0);
        expect(requireNonNull(false)).toBe(false);
        expect(() => requireNonNull(undefined)).toThrowError(ReferenceError);
    });
});
