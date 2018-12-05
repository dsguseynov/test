"use strict";

let money = +(prompt("Ваш бюджет на месяц?",""));
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let month = 30;
let appData = {
    money1: money,
    timeData: time,
    expenses : {money : time},
    optionalExpenses : [],
    income : {},
    savings: false
};
console.log(money/month);
document.write(money/month);