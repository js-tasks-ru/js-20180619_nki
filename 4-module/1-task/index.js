'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 *
 *
 */



function makeFriendsList (friends) {

    let ul = document.createElement('ul');

    friends.forEach((item, index, array) => {

        let li = document.createElement('li');
        li.innerHTML = item.firstName + ' ' + item.lastName;
        ul.append(li);

    });

    return ul;


}

