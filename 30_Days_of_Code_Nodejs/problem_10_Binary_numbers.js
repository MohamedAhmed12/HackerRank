function main() {
	const n = parseInt(readLine(), 10)

	let current = 0
	let max = 0

	converToBinary(n)
		.split('')
		.map((n) => {
			if (n == 1) {
				current++

				if (current > max) {
					max = current
				}

				return
			}

			current = 0
		})

	console.log(max)
}

function converToBinary(n) {
	if (n == 1) {
		return '1'
	}

	return (n % 2) + converToBinary(Math.floor(n / 2))
}
