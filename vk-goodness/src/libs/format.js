class Format {
  /**
   * Конвертирует число в строку с маской '### [### ...] ₽'
   * @param numb
   * @param currency
   * @returns { string }
   */
  static numberFinance = (numb, currency = '₽') => {
    const list = String(numb).split('');
    const result = [];
    if (list.length % 3 > 0) {
      result.push(...list.splice(0, list.length % 3), ' ');
    }
    while (list.length > 0) {
      result.push(...list.splice(0, 3), ' ');
    }
    result.push(currency);
    return result.join('');
  };
}

export default Format;
