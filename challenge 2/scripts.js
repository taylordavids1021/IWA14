function add (a, b) { return a + b }

function multiply (a, b) { return a * b }

function internal() {
	add()
	multiply()
	this.add = this.add(example1.internal.a, example1.internal.b)
	this.multiply = this.multiply(example2.internal.a, example1.internal.b)
	console.log(internal.this)
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