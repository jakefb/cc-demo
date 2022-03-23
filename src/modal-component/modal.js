function initializeModals ({ appRoot = document }) {
  appRoot.querySelectorAll('button[data-modal-button')
    .forEach(
      element => {
        const { modalMessage } = element.dataset
          
        if (modalMessage) {
          const dialogElement = document.createElement('div')
          dialogElement.className = 'modal'
          dialogElement.style.display = 'none'

          const dialogElementInner = document.createElement('div')
          dialogElementInner.className = 'modal-inner'
          dialogElementInner.innerHTML = `
            <p>${modalMessage}</p>
            <div>
              <button>Yes</button>
              <button>Cancel</button>
            </div>
          `

          dialogElement.append(dialogElementInner)
          document.body.append(dialogElement)

          element.onclick = () => {
            dialogElement.style.display = 'flex'
          }
        } else {
          throw Error('Please provide a message for the modal, using the "data-modal-message" HTML attriture on the button element:', element)
        }
      }
    )
}

export { initializeModals }
