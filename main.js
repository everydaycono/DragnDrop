"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ! since i know this dom will be exist. 
// otherwise it could be nulll
var draggable_list = document.getElementById('draggable-list');
var check = document.getElementById('check');
var placesTovisitList = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];
// Store List Items
//  HTMLLIElement Dom ARRAY
var listItmes = [];
var dragStartIndex;
// Inser List Items into Dom
var createList = function () {
    __spreadArray([], placesTovisitList, true).map(function (a) { return ({ value: a, sort: Math.random() }); }) // make it random (shuffle)
        .sort(function (a, b) { return a.sort - b.sort; }) // sort by sort(key | value)
        .map(function (a) { return a.value; }) // remove sort and value 
        .map(function (person, index) {
        var listItem = document.createElement('li');
        listItem.setAttribute('data-index', index.toString());
        listItem.innerHTML = "\n            <span class=\"number\" >".concat(index + 1, "</span>\n            <div class=\"draggable\" draggable=\"true\" >\n                <p class=\"person-name\" >").concat(person, "</p>\n                <i class=\"fas fa-grip-lines\" ></i>\n            </div>\n        ");
        listItmes.push(listItem);
        draggable_list.appendChild(listItem);
    });
};
createList();
