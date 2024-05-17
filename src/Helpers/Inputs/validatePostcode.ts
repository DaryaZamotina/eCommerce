export default function validatePostcode(street: string) {
  if (street.length !== 5 || !/^\d+$/.test(street)) {
    return false;
  }
  return true;
}
