import TagCreator from '../module/tagCreator';
import '../../public/assets/css/spinner.css';

export default function spinner(value: boolean) {
  const spinnerBody = new TagCreator(
    'div',
    'spinnerBody',
    'spinnerBody',
    'body',
  );
  const spinner = new TagCreator('div', 'spinner', 'spinner', 'spinnerBody');

  if (value) {
    spinnerBody.createAndAppend();
    spinner.createAndAppend();
  } else {
    document.getElementById('spinnerBody')?.remove();
  }
}
