function openModal (dialogElement) {
  dialogElement.style.display = 'flex'
}

function closeModal (dialogElement) {
  dialogElement.style.display = 'none'
}

function initializeModal ({ modalButton, callback }) {
  if (!modalButton) {
    throw Error('Please pass a modalButton element to initializeModal (as a property argument)')
  }
  if (typeof callback !== 'function') {
    throw Error('Please provide a callback function for the modal, using the "data-modal-callback" HTML attribute on the button element:', modalButton)
  }

  const { modalMessage } = modalButton.dataset

  if (modalMessage) {
    const dialogElement = document.createElement('div')
    dialogElement.className = 'modal'
    dialogElement.style.display = 'none'

    const dialogElementInner = document.createElement('div')
    dialogElementInner.className = 'modal-inner'
    dialogElementInner.innerHTML = `
      <p>${modalMessage}</p>
    `

    const buttonWrapperDiv = document.createElement('div')

    const yesButton = document.createElement('button')
    yesButton.textContent = 'Yes'
    yesButton.onclick = () => {
      console.log('clicked yes')
      callback({ result: 'yes' })
      closeModal(dialogElement)
    }

    const cancelButton = document.createElement('button')
    cancelButton.textContent = 'Cancel'
    cancelButton.onclick = () => {
      console.log('clicked cancel')
      callback({ result: 'cancel' })
      closeModal(dialogElement)
    }

    buttonWrapperDiv.append(yesButton)
    buttonWrapperDiv.append(cancelButton)

    dialogElementInner.append(buttonWrapperDiv)

    dialogElement.append(dialogElementInner)
    document.body.append(dialogElement)

    modalButton.onclick = () => {
      openModal(dialogElement)
    }
  } else {
    if (!modalMessage) {
      throw Error('Please provide a message for the modal, using the "data-modal-message" HTML attribute on the button element:', element)
    }
  }
}

export { initializeModal }
