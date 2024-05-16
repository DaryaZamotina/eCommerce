export default function validateAge(ade: string): boolean {
  const birthdate = new Date(ade);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();
  if (
    currentDate.getMonth() < birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
  ) {
    return age - 1 >= 12;
  } else {
    return age >= 12;
  }
}
