import $ from 'jquery';
import Block from './blocks/block';

const block = new Block({ $field: $('.output') });
block.showMessage();

const test = {};

Object.assign(test, {
  key: 'value'
});
