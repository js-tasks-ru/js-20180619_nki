/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {

  let newObj = {};

  for (let key in obj) {
    if (obj[key] !== null) {

      if (typeof obj[key] === 'object') {
        newObj[key] = clone(obj[key])
      }

      else {

        newObj[key] = obj[key];

      }
    }
    else {

      newObj[key] = null

    }
  }


return newObj;


}

