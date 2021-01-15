import {ParamsInterface, defaultParams} from './index'

/**
 * показывает скрытый html элемент
 *
 * @param {HTMLElement} elem
 * @param {ParamsInterface} [params={}]
 */
const show = (elem: HTMLElement, params: ParamsInterface): void => {
  // если элемента не существует
  if (!elem) return

  // если блок не скрыт
  if (elem.offsetHeight > 0) return

  const localParams = {...defaultParams, ...params}

  const {
    showClass,
    hideClass,
    removeStyleInTheEnd,
    callback,
  } = localParams

  const element = elem

  element.style.height = '0px' // высота блока перед зачалом анимации
  element.classList.remove(`${hideClass}`)

  const sectionHeight = element.scrollHeight

  // блок в полную высоту
  element.style.height = `${sectionHeight}px`

  // обработчк окончания анимации
  element.addEventListener(`${window.App.transitionEndName}`, end)

  // когда анимация расерытия блока закончена
  function end() {
    element.classList.add(`${showClass}`)
    // если нужно - удалить атрибут style
    if (removeStyleInTheEnd) element.removeAttribute("style")
    // удаляем обработчк окончания анимации
    element.removeEventListener(`${window.App.transitionEndName}`, end)

    if (callback) callback(true)
  }
}

export default show

