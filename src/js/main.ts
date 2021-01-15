/* eslint-disable no-unused-vars */
'use strict'

// *** основные (универсальные) скрипты
import { hide, show, toggle } from './functions/show-hide-toggle'
import { App } from './functions/app'


// *** скрипты для отдельных страниц
import showHideToggle from './pages-fun/show-hide-toggle'

// *** указываем типы новых функций в window
declare global {
  interface Window {
    App: any,
    show: Function,
    hide: Function,
    toggle: Function,
    getTransitionEndEventName: Function,

    opera: any,
    chrome: any,
    opr: any,
    InstallTrigger: any,
    HTMLElement: any,
    documentMode: any,
    safari: any,
  }
}

// *** после загрузки
window.addEventListener('load', () => {
  // сделать основные функции доступными из любого места программы
  window.show = show || {} // показать html-элемент
  window.hide = hide || {} // скрыть html-элемент
  window.toggle = toggle || {} // показать/скрыть html-элемент

  // сделать параметры доступными из любого места программы
  window.App = App || {} // основные параметры

  // запускаем функции отдельных страниц
  showHideToggle()
})
