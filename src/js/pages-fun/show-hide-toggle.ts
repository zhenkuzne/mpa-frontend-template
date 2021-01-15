const showHideToggle = (): boolean => {
  const btnShow = document.querySelector('.js-show')
  const btnHide = document.querySelector('.js-hide')
  const btnToggle = document.querySelector('.js-toggle')
  const hiddenBlock = document.querySelector('.js-hidden-block')

  if (btnShow && hiddenBlock) {
    btnShow.addEventListener('click', () => {
      window.show(hiddenBlock)
    })
  }

  if (btnHide && hiddenBlock) {
    btnHide.addEventListener('click', () => {
      window.hide(hiddenBlock, {
        callback: () => {
          console.log('Слок скрыт')
        }
      })
    })
  }

  if (btnToggle && hiddenBlock) {
    btnToggle.addEventListener('click', () => {
      window.toggle(hiddenBlock)
    })
  }

  return true
}

export default showHideToggle
