input = input.split('\n')
let key = input.shift()
let formattedElements = input.splice(0, key)
let dictionary = input

formattedElements.map((element, index) => {
	element = element.split(' ')
	formattedElements[element[0]] = element[1]
	delete formattedElements[index]
})

output = dictionary.map((element) => {
	if (formattedElements[element]) {
		return console.log(element + '=' + formattedElements[element])
	}
	console.log('Not found')
})
