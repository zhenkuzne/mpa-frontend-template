export default class Block {
	constructor(o) {
		this.$field = o.$field;
	}

	showMessage() {
		let message = 'from showMessage in Block!';

		this.$field.text(message);
		console.log(message);
	}
}
