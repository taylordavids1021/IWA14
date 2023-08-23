function add (a, b) { return a + b }

function multiply (a, b) { return a * b }

function internal() {
	add()
	multiply()
	const added = add(this.internal.c, this.internal.c)
	const multiplied = multiply(this.internal.b, this.internal.c)
	console.log(added + multiplied)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()