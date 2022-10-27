import { getPercents } from '../calculator.js'
import { createAdder } from '../calculator.js'

describe('tests for calculator function', () => {
	it('getPercents', () => {
		expect(getPercents(10, 100)).toBe(10)
		expect(getPercents(40, 1486)).toBe(594.4)
		expect(getPercents('str', 200)).toBe('Данные не верны')
		expect(getPercents(30, 'str')).toBe('Данные не верны')
		expect(getPercents(NaN, 1000)).toBe('Данные не верны')
	})
	it('createAdder', () => {
		expect(createAdder(10)(100)).toBe(110)
                expect(createAdder('a')(100)).toBe('a100')
                expect(createAdder('a')('b')).toBe('ab')
                expect(createAdder(NaN)(5)).toBe(NaN)
                expect(createAdder(undefined)(5)).toBe(NaN)
	})
})
