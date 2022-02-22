import { UI } from './view';

openPopupByHash(location.hash);

UI.POPUP.OPEN_LINKS.forEach(openPopupLink => {
  openPopupLink.addEventListener('click', (event) => {
    event.preventDefault();

    const popupName = openPopupLink.getAttribute('href').replace('#', '');

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
    history.pushState('', '', '#' + popupName);
  }
}

function popupClose(popupName) {
  if (!popupName) {
    UI.POPUP.WINDOWS.forEach(popup => popup.classList.remove('_active'));
  } else {
    popupName.classList.remove('_active');
  }

  history.pushState('', '', window.location.href.split('#')[0]);
}

function openPopupByHash(locationHash) {
  if (!locationHash) return;

  const popupName = location.hash.replace('#', '');
  const popup = document.querySelector(`[data-popup=${popupName}]`);

  if (popup) {
    popupOpen(popupName);
  }
}