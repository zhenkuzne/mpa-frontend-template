import {ParamsInterface, defaultParams, show, hide} from './index'

/**
 * скрыть/показать html элемент
 *
 * @param {HTMLElement} elem
 * @param {ParamsInterface} [params={}]
 */
const toggle = (elem: HTMLElement, params: ParamsInterface): void => {
  // если элемента не существует
  if (!elem) return

  const localParams = {...defaultParams, ...params}

  const {
    hideClass,
  } = localParams

  const element = elem

  // если элемент скрыт
  if (element.classList.contains(`${hideClass}`)) {
    show(element, localParams)
  } else {
    hide(element, localParams)
  }
}

export default toggle

