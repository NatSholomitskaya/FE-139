"use script"

{/*Создайте переменную price и присвойте ей значение 100. Затем создайте переменную discount и присвойте ей значение 0.2 (20%). Вычислите цену со скидкой и выведите результат в консоль: "80 руб, вместо 100 руб".*/

let price = 100, 
discount = 0.2;
console.log(price - price * discount);
}

{/*2. Дана строка: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь". Посчитайте сколько раз в строке встречается символ "п". Выведите кол-во в консоль.*/

let str = "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь",
count = 0;

for(i = 0; i <= str.length -1; i++) {
    if (str[i] == "п") {
        count++;
    } 
}

console.log(count);
}

{/*3. Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Используйте цикл for, чтобы найти и вывести наименьшее число в массиве.*/

let arr = [51, 56, 84, 69, 75, 1];
let min = +Infinity;
for(i = 0; i < arr.length; i++) {
    if(min > arr[i]) {
        min = arr[i];
    }
}
console.log(min);
}

{
/*4. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы выведите в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев".*/

let name = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];
let nameCity = [];

for (let i = 0; i < name[0].length; i++) {
    nameCity.push(name[0][i] + ' из ' + name[1][i]);
}

console.log(nameCity);
}

{/*5. Создайте переменную temperature со случайным значением от -10 до 40. Напишите условие, которое проверяет, холодно ли (меньше 0) или жарко (больше 30), либо "нормальная температура", и выведите соответствующее сообщение. Решите задачу с помощью switch.
*/

let temperature = 15;
let value = 0;
if (temperature < 0) console.log(value = 1);
if (temperature > 0 && temperature < 30) console.log(value = 2);
if (temperature > 30) console.log(value = 3);
switch (value) {
    case 1:
        console.log("Холодно");
    break;
    case 2:
        console.log("Нормальная температура");
    break;
    case 3:
        console.log("Жарко");
    break;
}

}

{/*6. Напишите программу, которая запрашивает у пользователя целое положительное число и выводит на экран факториал этого числа с помощью цикла for. Например, для числа 5 = 1*2*3*4*5 = 120.*/

let numb = +prompt('Введите число для вычисления факториала');
let factorial = 1;
for (let i = 2; i <= numb; i++) {
    factorial *= i;
}
console.log(factorial);
}

{/*7. Создайте строку с названиями городов Беларуси, записывая каждый город через запятую (4 городов будет достаточно). Создайте массив из данной строки с городами. Используя метод push, добавьте в массив еще 3 города и выведите результат.*/

let str = "Минск, Гомель, Витебск, Брест";
let strNew = str.split(',');
strNew.push('Гродно', 'Могилев', 'Барановичи');
console.log(strNew);
}

{/*8. Напишите условие, которое проверяет, что переменная age больше 18 и меньше 65. Если условие выполнено, выведите сообщение о том, что пользователь находится в возрасте трудоспособности.
*/

let age = +prompt('Ваш возраст?');
let message = (age > 18 && age < 65) ? 'Вы трудоспособны!' :
    (age < 18) ? 'Вы еще не достигли трудоспособного возраста!' :
    (age > 65) ? 'Вам уже не нужно работать' : 'Отдыхайте!';
console.log(message);
}

{/*9. Создайте массив с названиями месяцев. Используя обратный цикл while, выведите каждый месяц в консоль, добавить порядковый номер к месяцу, например: "1. Январь".*/

let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let i = 0;

while(i < month.length) {
    console.log((i + 1) + '. ' + month[i]);
    i++;
}
}

{/*10. Напишите программу, которая ищет заданное число в произвольном массиве длиной 8 и выводит его индекс. Если число не найдено, выведите сообщение об этом.*/

let arr = [34, 5, 85, 44, -3, 25, 1, 568];
let n = 5;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
        console.log(n, i);
        break;
        } else {
        console.log('Число не найдено!');
    }
}
}