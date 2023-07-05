import {getCirclePosition} from "../helpers.ts";

describe('getCirclePosition', () => {
    it('returns "0%" when no arguments are provided', () => {
        expect(getCirclePosition()).toBe('0%');
    });

    it('returns the correct circle position when goal time is at the start of the period', () => {
        expect(getCirclePosition(20, 0, 0)).toBe('0%');
    });

    it('returns the correct circle position when goal time is in the middle of the period', () => {
        expect(getCirclePosition(20, 10, 0)).toBe('50%');
    });

    it('returns the correct circle position when goal time is at the end of the period', () => {
        expect(getCirclePosition(20, 20, 0)).toBe('100%');
    });

    it('returns the correct circle position when goal time is greater than the period duration', () => {
        expect(getCirclePosition(20, 25, 30)).toBe('127%');
    });

    it('returns the correct circle position when custom period duration is provided', () => {
        expect(getCirclePosition(15, 5, 0)).toBe('33%');
    });

    it('returns the correct circle position when goal time is 0 seconds', () => {
        expect(getCirclePosition(20, 5, 0)).toBe('25%');
    });
});
