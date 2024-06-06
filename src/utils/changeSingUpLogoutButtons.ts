export function ifAuthThenDisplayNone(links: HTMLElement[]) {
  if (
    localStorage.getItem('access_token_for_user') &&
    localStorage.getItem('access_token_for_user') !== 'undefined'
  ) {
    links.forEach((link) => {
      link.classList.add('hide-link');
    });
  } else if (
    localStorage.getItem('newUser') &&
    localStorage.getItem('newUser') !== 'undefined'
  ) {
    links.forEach((link) => {
      link.classList.add('hide-link');
    });
  } else {
    links.forEach((link) => {
      link.classList.remove('hide-link');
    });
  }
}

export function ifAnonimThenDisplayNone(links: HTMLElement[]) {
  if (
    localStorage.getItem('access_token_for_user') &&
    localStorage.getItem('access_token_for_user') !== 'undefined'
  ) {
    links.forEach((link) => {
      link.classList.remove('hide-link');
    });
  } else if (
    localStorage.getItem('newUser') &&
    localStorage.getItem('newUser') !== 'undefined'
  ) {
    links.forEach((link) => {
      link.classList.remove('hide-link');
    });
  } else {
    links.forEach((link) => {
      link.classList.add('hide-link');
    });
  }
}
