import { UI } from './view';

const POPUP_NAMES = {
  AUTH: 'authorization',
  CONFIR: 'confirmation',
  SETTINGS: 'settings',
};

UI.POPUP.OPEN_LINKS.forEach(openPopupLink => {
  openPopupLink.addEventListener('click', () => {
    const popupName = openPopupLink.dataset.popupOpen;
    popupOpen(popupName);
  });
});

UI.POPUP.CLOSE_BTNS.forEach(closeBtn => closeBtn.addEventListener('click', () => {
  popupClose( closeBtn.closest('.popup') );
}));

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    popupClose();
  }
});

function popupOpen(popupName) {
  let activePopups = document.querySelectorAll('.popup._active');

  if (activePopups.length > 0) {
    popupClose('');
  }
  
  const currentPopup = document.querySelector(`[data-popup=${popupName}]`);

  if (currentPopup) {
    currentPopup.classList.add('_active');
  }
}

function popupClose(popupName) {
  if (!popupName) {
    UI.POPUP.WINDOWS.forEach(popup => popup.classList.remove('_active'));
  } else {
    popupName.classList.remove('_active');
  }
}

export {
  POPUP_NAMES,
  popupOpen,
  popupClose
};