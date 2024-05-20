export default function validateAge(ade: string): boolean {
  const birthdate = new Date(ade);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  const isBirthdayPassedThisYear =
    currentDate.getMonth() > birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() >= birthdate.getDate());

  const actualAge = isBirthdayPassedThisYear ? age : age - 1;

  return actualAge >= 12 && actualAge <= 120;
}
