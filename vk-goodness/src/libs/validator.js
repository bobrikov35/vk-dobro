class Validator {
  /**
   * Возвращает новую строку с замененными на заменитель
   * @param string: исходная строка
   * @param subStr: строка, заменяемая на newSubStr - " или '
   * @param newSubStr: строка, заменяющая подстроку из первого параметра - ' или "
   * @returns { void | * }
   */
  static replaceBackticks(string, subStr = "'", newSubStr = '"') {
    const regExp = new RegExp('^\\\'|\\W\\\'|\\\'\\W|\\\'\\$', 'g');
    return string.replace(regExp, (str) => str.replace(subStr, newSubStr));
  }

  /**
   * Проверяет нажатие спец. клавиш
   * @param key: клавиша
   * @returns { boolean }
   */
  static isSpecialKey(key) {
    switch (key) {
      case 'Escape':
      case 'Tab':
      case 'Delete':
      case 'Backspace':
      case 'Enter':
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowLeft': return true;
      default: return false;
    }
  }

  /**
   * Проверка допустимости вводимого символа в поле с именем
   * @param key
   * @returns {boolean}
   */
  static verifyNameSymbol(key) {
    if (this.isSpecialKey(key)) return true;
    return /[a-zа-яё\s\-]/i.test(key);
  }

  /**
   * Проверка допустимости вводимого символа в поле с номером телефона
   * @param key
   * @returns { boolean }
   */
  static verifyPhoneSymbol(key) {
    if (Validator.isSpecialKey(key)) return true;
    return /[0-9]/.test(key);
  }

  /**
   * Проверка допустимости вводимого символа в поле с email
   * @param key
   * @returns { boolean }
   */
  static verifyEmailSymbol(key) {
    if (Validator.isSpecialKey(key)) return true;
    return /[-_0-9a-z@]|\./i.test(key);
  }

  /**
   * Конвертирует число в строковом формате в номер телефона
   * @param number: число в строковом формате длинной не более 11 символов
   * @returns { string }
   */
  static convertNumberToPhone(number) {
    let result = '+';
    for (let i = 0; i < number.length; i++) {
      result += number[i];
      if (i === 0) result += ' (';
      if (i === 3) result += ') ';
      if (i === 6) result += '-';
      if (i === 8) result += '-';
    }
    return result;
  }

  /**
   * Конвертирует номер телефона в число в строковом формате
   * @param phone: '+9 (999) 999-99-99'
   * @returns { string }
   */
  static convertPhoneToNumber(phone) {
    return phone.replace(/[-+()]|\s/g, '');
  }

  /**
   * Проверка допустимости введенного имени
   * @param name
   * @returns { boolean }
   */
  static verifyName(name) {
    return /^[a-zа-яё\s\-]{3,}$/i.test(name);
  }

  /**
   * Проверка допустимости введенного номера телефона
   * @param phone: '+9 (999) 999-99-99'
   * @returns { boolean }
   */
  static verifyPhone(phone) {
    return /^\+\d+\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(phone);
  }

  /**
   * Проверка допустимости введенного email
   * @param email: '[имя почтового ящика]@[доменное имя сервера]'
   * @returns { boolean }
   */
  static verifyEmail(email) {
    return /^(([0-9a-z]{1}([-_0-9a-z]|\.)+[0-9a-z]{1})@([0-9a-z]{1}[-_0-9a-z]+\.{1}){1,3}[a-z]{2,})$/i.test(email);
  }

  /**
   * Выводит сообщение ошибки
   * @param error: строка 'name', 'phone', 'email'
   * @returns { string }
   */
  static errorMessage(error) {
    switch (error.toLowerCase()) {
      case 'name':
        return 'Имя должно содержать не менее трех букв русского или английского алфавита';
      case 'phone':
        return 'Телефон должен соответствовать шаблону +9 (999) 999-99-99';
      case 'email':
        return 'E-mail должен соответствовать виду my.super-mail@mail.ru';
      default:
        return 'Ошибка не предусмотрена валидатором';
    }
  }
}

export default Validator;
