export default function validateName(name: string) {
  let length = false;
  let num = false;
  if (name.length > 0) {
    length = true;
  }
  if (/^[a-zA-Zа-яА-Я\s]*$/.test(name)) {
    num = true;
  }
  if (length && num) {
    return true;
  } else {
    return false;
  }
}
