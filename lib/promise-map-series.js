// Pulled from https://github.com/joliss/promise-map-series and prettied up a bit

module.exports = function sequence(array, iterator) {
	let currentPromise = Promise.resolve()
	return Promise.all(
		array.map((value, i) => {
			return currentPromise = currentPromise.then(() => iterator(value, i, array))
		})
	)
}
