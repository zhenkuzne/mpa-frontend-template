import {
  isMobile, tabletCheck
} from './isMobile'

import {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isEdgeChromium,
} from './browsers'

import getTransitionEndEventName from './getTransitionEndEventName'


const App = {
  // название события transition end, которое работает в данном браузере
  transitionEndName: getTransitionEndEventName(),

  // ширина скроллбара
  scrollbarWidth: window.innerWidth - document.documentElement.clientWidth || 0,
  // ширина контента страницы (без скроллбара)
  contentWidth: isMobile ? document.documentElement.clientWidth : window.innerWidth,
  // высота экрана
  contentHeight: isMobile ? document.documentElement.clientHeight : window.innerHeight,

  isMobile: isMobile.any(), // если мобильное устройство
  isTablet: !!tabletCheck(), //если планшет
  isMobileOrTablet: !!(isMobile.any() || !!tabletCheck()), // если планшет или мобильное устройство

  isAndroid: isMobile.Android(), // если андроид
  isiOS: isMobile.iOS(), // если ios
  isWindowsMobile: isMobile.Windows(), // если windows phone

  // browsers
  isOpera: !!isOpera, // если это браузер Opera
  isFirefox: !!isFirefox, // если это браузер Firefox
  isSafari: !!isSafari, // если это браузер Safari
  isIE: !!isIE, // если это браузер IE
  isEdge: !!isEdge, // если это браузер Edge
  isChrome: !!isChrome, // если это браузер Chrome
  isEdgeChromium: !!isEdgeChromium, // если это браузер Edge
}

export default App
