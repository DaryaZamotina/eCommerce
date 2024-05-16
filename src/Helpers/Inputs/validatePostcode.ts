export default function validatePostcode(street: string) {
  if (street.length !== 6 || !/^\d+$/.test(street)) {
    return false;
  }
  return true;
}
