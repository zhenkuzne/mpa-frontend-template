// browsers

// Opera 8.0+
var isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0

// Firefox 1.0+
var isFirefox = typeof window.InstallTrigger !== 'undefined'

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]" }(!window.safari || (typeof window.safari !== 'undefined' && window.safari.pushNotification)))

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.DOCUMENT_NODE

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") !== -1)

// Blink engine detection
// var isBlink = (isChrome || isOpera) && !!window.CSS


export {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isEdgeChromium,
}
