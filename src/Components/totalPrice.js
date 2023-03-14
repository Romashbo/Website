export const culcTotalPrice = (ball) =>
  ball.reduce((acc, item) => (acc += item.price), 0);

export default culcTotalPrice;
