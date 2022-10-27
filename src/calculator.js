export function getPercents(percent, number) {
	if (
		typeof percent === 'number' &&
		typeof number === 'number' &&
		!isNaN(percent) &&
		!isNaN(number)
	) {
		return (number / 100) * percent
	} else {
		return 'Данные не верны'
	}
}

export function createAdder(a) {
	return function addA(b) {
  	return a + b;
  }
}