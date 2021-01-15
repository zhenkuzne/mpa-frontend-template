// getTransitionEvent

/**
 * название события transition end, которое работает в данном браузере
 * [event окончания анимации transition]
 *
 * @return {string}
 */
const getTransitionEndEventName = (): String => {
  // создаёт элемент, чтобы заглянуть в его атрибуты
  const element = document.createElement('div')

  // список возможных нвазний окончания анимации
  const transitions: Array<string> = [
    'transitionend',
    'oTransitionEnd',
    'transitionend',
    'webkitTransitionEnd'
  ]

  // пройти по всему списку вариантов,
  // выбрать какой используется в данным браузере
  transitions.forEach((transition: any): String | undefined => {
    if (element.style[transition] !== undefined) return transition
  })

  return 'transitionend'
}

export default getTransitionEndEventName
