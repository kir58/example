export const getNumber = str => Number(str.split(' ').join(''));

export const getStr = (num) => {
  const reg = /(\d)(?=(\d\d\d)+\b)/ig;
  return String(num).replace(reg, '$1 ');
};

export const getSum = basket => (
  basket.reduce((acc, { price, amount }) => acc + (getNumber(price) * amount), 0));

export const getAllAmount = basket => basket.reduce((acc, { amount }) => amount + acc, 0);
