import { initializeModal } from './modal-component/modal.js'

function updateMainPageText ({ result }) {
  const resultElement = document.querySelector('#result')

  if (result === 'yes') {
    resultElement.textContent = 'You just clicked "Yes"'
  } else if (result === 'cancel') {
    resultElement.textContent = 'You just clicked "Cancel"'
  }
}

initializeModal({ modalButton: document.querySelector('#confirmationModal'), callback: updateMainPageText })
