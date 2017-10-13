import $ from 'jquery';
import Block from './blocks/block';

let block = new Block({$field: $('.output')});
block.showMessage();
