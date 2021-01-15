// show-hide-toggle
import show from './show'
import hide from './hide'
import toggle from './toggle'

interface ParamsInterface {
  showClass?: String // [название класса раскрытого блока]
  hideClass?: String // [название класса скрытого блока]
  removeStyleInTheEnd?: Boolean // [нужно ли удалять аттрибут style после выполнения функции]
  callback?: Function | null // [функция, которая срабатывает после выполнения hide()]
}


const defaultParams: ParamsInterface = {
  showClass: 'show',
  hideClass: 'hide',
  removeStyleInTheEnd: true,
  callback: null,
}

export {
  // functions
  hide, // скрыть html-элемент
  show, // показать html-элемент
  toggle, // показать/скрыть html-элемент

  // interfaces
  ParamsInterface,

  // constants
  defaultParams,
}
