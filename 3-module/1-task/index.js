/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */



function showSalary(data, age) {

    let employe = undefined;

    data.forEach((item,index,array) => {
        if (item.age <= age) {
            if (employe === undefined) {
                employe = item.name + ', ' + item.balance+'\n';
            }
            else {
                employe += item.name + ', ' + item.balance+'\n';
            }
        }
    });

    return employe.trim();
}



