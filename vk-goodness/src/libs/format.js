class Format {
  static numberFinance = (numb) => {
    const list = String(numb).split('');
    const result = [];
    if (list.length % 3 > 0) {
      result.push(...list.splice(0, list.length % 3), ' ');
    }
    while (list.length > 0) {
      result.push(...list.splice(0, 3), ' ');
    }
    result.push('₽');
    return result.join('');
  };
}

export default Format;
