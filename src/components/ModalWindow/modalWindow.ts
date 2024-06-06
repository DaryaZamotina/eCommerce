import '../../../public/assets/css/body.css';
import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/modal.css';

export function createModalWindow(text: string) {
  const modalWindow = new TagCreator(
    'div',
    'modal-window',
    'modalWindow',
    'pageContainer',
    `${text}`,
  );
  modalWindow.createAndAppend();

  console.log('Why modal window not open???');

  const btnCloseModalWindow = new TagCreator(
    'button',
    'btn-close-modal-window',
    'btnCloseModalWindow',
    'modalWindow',
    `✕`,
  );
  btnCloseModalWindow.createAndAppend();
}

export function handleClickCloseModalWindow(e: Event) {
  const btnCloseModalWindow = document.getElementById(
    'btnCloseModalWindow',
  ) as HTMLButtonElement;
  const modalWindow = document.getElementById('modalWindow');

  if (btnCloseModalWindow.contains(e.target as Node)) {
    modalWindow.remove();
    document.removeEventListener('click', handleClickCloseModalWindow);
  } else if (modalWindow.contains(e.target as Node)) {
    return;
  }
  modalWindow.remove();
  document.removeEventListener('click', handleClickCloseModalWindow);
}
