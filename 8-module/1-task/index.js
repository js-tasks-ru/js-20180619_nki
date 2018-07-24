'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    let thead = document.createElement('thead');
    thead.innerHTML = '<tr><td>Name</td>\<td>Age</td><td>Salary</td><td>City</td></tr>';
    this.el.appendChild(thead);
    let tbody = document.createElement('tbody');
    this.el.appendChild(tbody);

    items.forEach(item => {

        let tr =document.createElement("tr");
            tr.innerHTML = `
            
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.salary}</td>
            <td>${item.city}</td>   
            `;
            tbody.appendChild(tr);
    });


    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {

        let tb = this.el.querySelectorAll('tbody')[0]

        console.log(this.el)
        let rowsArray = Array.from(tb.rows);




        let compareNum = function(rowA, rowB) {

            if (+rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML) {
                return 1
            }

            if (+rowA.cells[column].innerHTML < +rowB.cells[column].innerHTML) {

                return -1
            }
        };

        let compare = function(rowA, rowB) {

            if (rowA.cells[column].innerHTML > rowB.cells[column].innerHTML) {
                return 1
            }

            if (rowA.cells[column].innerHTML < rowB.cells[column].innerHTML) {
                return -1
            }
        };

        if (column === 0 ) {

            if(!desc) {
                rowsArray.sort(compare);
            }

            else {
                rowsArray.sort(compare).reverse();
            }
        }

        else if (column ===2) {

            if(!desc) {
                rowsArray.sort(compareNum);
            }

            else {
                rowsArray.sort(compareNum).reverse();
            }
        }

        tbody.parentElement.removeChild(tbody);

        for (let i = 0; i < rowsArray.length; i++) {
            tbody.appendChild(rowsArray[i]);
        }

        this.el.appendChild(tbody)

    };
}

