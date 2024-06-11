export default function changeTotatPrice(sum: number) {
  document.getElementById('totalCost').textContent = `${sum / 100} €`;
}