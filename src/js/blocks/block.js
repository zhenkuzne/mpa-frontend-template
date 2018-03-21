export default class Block {
  constructor(o) {
    this.$field = o.$field;
  }

  showMessage() {
    const message = 'from showMessage in Block!';

    this.$field.text(message);
  }
}
