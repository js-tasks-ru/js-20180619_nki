'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */
function getBeforeTime(when) {
    let current = Date.now(); // обязательно получать текущую дату через эту функцию. Иначе тесты работать не будут

    let rest = when - current;

    if (rest <= 0 ) {

        return 'событие завершилось'
    }

    let dt = new Date(rest);
    let now = new Date(current);
    when = new Date(when);

    let hours = dt.getUTCHours();
    let minutes = dt.getUTCMinutes();
    let sec = dt.getUTCSeconds();
    let month = when.getUTCMonth() - now.getUTCMonth();
    let days = when.getUTCDate() - now.getUTCDate();
    let years = when.getUTCFullYear() - now.getUTCFullYear();
    let result = [];



    if (sec) {
        result.push(`${sec} сек.`);
    }

    if (minutes) {
        result.push(`${minutes} мин.`);
    }

    if (hours) {
        result.push(`${hours} ч.`);
    }

    if (days) {

        result.push(`${days} д.`);
    }


    if (month) {
        result.push(`${month} мес.`);
    }



    if (years) {
        result.push(`${years} г.`);
    }




    return result.reverse().join(', ');

}


