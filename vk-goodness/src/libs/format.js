class Format {
  /**
   * Конвертирует число в строку с маской '### [### ...] ₽'
   * @param numb
   * @param symbal
   * @returns { string }
   */
  static numberFinance = (numb, symbal = '₽') => {
    const list = String(numb).split('');
    const result = [];
    if (list.length % 3 > 0) {
      result.push(...list.splice(0, list.length % 3), ' ');
    }
    while (list.length > 0) {
      result.push(...list.splice(0, 3), ' ');
    }
    result.push(symbal);
    return result.join('');
  };
}

export default Format;
