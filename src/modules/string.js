/**
 * Получение шестнадцатеричного числа с десятичного числа
 * @param offset
 * @returns {string}
 */
const toHex = (offset) => {
    if (typeof offset !== "number" || Number.isNaN( offset )) {
        return "";
    }

    return `0x${offset.toString( 16 ).toUpperCase()}`;
}

/**
 * Удаление лишних пробелов с строки с использованием регулярных выражений
 * @param string
 * @returns {*}
 */
const terminate = (string) => {
    return string.replace( /\0/g, '' );
}

/**
 * Чтение строки из памяти
 * @param offset
 * @param buffer
 * @returns {string}
 */
const read = (offset, buffer) => {
    let byte = buffer[offset];

    let string = "";

    while (byte !== 0) {
        string += String.fromCharCode( byte );
        offset++;
        byte = buffer[offset];
    }

    return string;
}

module.exports = {
    toHex,
    read,
    terminate
}