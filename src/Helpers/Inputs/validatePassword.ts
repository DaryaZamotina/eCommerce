export default function validatePassword(password: string) {
  let lengthPassword = true;
  let upperCase = true;
  let lowerCase = true;

  if (password.length < 8) {
    lengthPassword = false;
  }
  if (password.toLowerCase() === password) {
    upperCase = false;
  }
  if (password.toUpperCase() === password) {
    lowerCase = false;
  }

  const num = /\d/.test(password);

  if (lengthPassword && upperCase && lowerCase && num) {
    return true;
  } else {
    return false;
  }
}
