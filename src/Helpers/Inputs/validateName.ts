export default function validateName(name: string) {
  return /^[a-zA-Zа-яА-Я\s]*$/.test(name);
}
