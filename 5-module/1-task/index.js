'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {


    let trs = table.querySelectorAll('tbody tr');

    trs.forEach( item => {

        let age = item.getElementsByTagName('td')[1];
        let gender = item.getElementsByTagName('td')[2];
        let status = item.getElementsByTagName('td')[3];

        if (status.dataset.available === 'true') {

            status.parentElement.classList.add('available');
        }

        else if (status.dataset.available === 'false' ) {

            status.parentElement.classList.add('unavailable');
        }

        else  {

            status.parentElement.setAttribute("hidden", "hidden");
        }

        if (gender.innerHTML == 'm') {

            gender.parentElement.classList.add('male');
        }

        if (gender.innerHTML == 'f') {

            gender.parentElement.classList.add('female');
        }

        if (age.innerHTML  < 18) {

            age.parentElement.style.textDecoration = "line-through";
        }
    });

}
