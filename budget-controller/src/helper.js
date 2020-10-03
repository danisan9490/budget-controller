export const reviewBudget = (budget, amountLeft) => {
  let alerts;
  if ((budget / 4) > amountLeft) {
    alerts = 'alert alert-danger';
  } else if ((budget / 2) > amountLeft) {
    alerts = 'alert alert-warning';
  } else {
    alerts = 'alert alert-success';
  }
  return alerts;
}