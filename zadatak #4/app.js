//  2. Zadatak
// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

example = [-3, 4.8, 5, 3, -3.2];

function master(arr) {
	const newArray = arr
		.filter((value) => {
			return Number.isInteger(value);
		})
		.map((value) => {
			return value ** 2;
		});
	return newArray;
}

console.log(master(example));
