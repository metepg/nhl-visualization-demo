import {goalTypeLong} from "../helpers.ts";

describe('goalTypeLong', () => {
    it('should return an empty string if the value is falsy', () => {
        expect(goalTypeLong(null)).toBe('');
        expect(goalTypeLong(undefined)).toBe('');
        expect(goalTypeLong('')).toBe('');
    });

    it('should return the corresponding long goal type for valid input', () => {
        const testData: [string, string][] = [
            ['PPG', 'POWER-PLAY -GOAL'],
            ['SHG', 'SHORT-HANDED -GOAL'],
            ['EN', 'EMPTY NET'],
            ['GW', 'GAME-WINNING -GOAL'],
        ];

        testData.forEach(([input, expected]) => {
            expect(goalTypeLong(input)).toBe(expected);
        });
    });

    it('should handle uppercase and lowercase goal types', () => {
        expect(goalTypeLong('ppg')).toBe('POWER-PLAY -GOAL');
        expect(goalTypeLong('shg')).toBe('SHORT-HANDED -GOAL');
        expect(goalTypeLong('en')).toBe('EMPTY NET');
        expect(goalTypeLong('gw')).toBe('GAME-WINNING -GOAL');
    });

    it('should return an empty string for an unknown goal type', () => {
        expect(goalTypeLong('XYZ')).toBe('');
        expect(goalTypeLong('ABC')).toBe('');
    });
});
