// var balance = prompt("Введите остаток на счету");
// var creditLimit = prompt("Кредитный лимит");
// var spend = Number(balance) + Number(creditLimit);
// alert(spend);

// let amount = +prompt("Введите число");
// if (amount >= 100){
//     amount = amount - 100;
//     alert("Успешно")
// }
// else if (amount < 100){
//     alert("Недостаточно средств");
// }
// else if (amount == 0){
//     alert("Операция выполнена успешно")
// }
// else {
//     alert('Неверный формат суммы');
// }
// console.log("Спасибо за обращение")


// s

// let a = +prompt("Напишите первое число");
// let b = +prompt("Напишите второе число");

// if (a > b && a!=1 && b!=1 && a!=2 && b!=2){
//     alert("Число а больше числа b на" + " " + (a - b));
// }
// if (a < b && b!=1 && a!=1 && a!=2 && b!=2){
//     alert("Число b больше числа а на" + " " + (b - a));
// }
// if (a == 1) {
//     alert("Число b равно" + b);
// }
// if (b == 1){
//     alert("Число a равно" + a);
// }
// if (a == 2){
//     alert("Разница между числами" + (b - a));
// }
// if(b == 2){
//     alert("Разница между числами" + (a - b))
// }



// let a = prompt('Where are you from? 1: Baku, 2: Gandja, 3: Tbilisi');
// switch(a){
// case '1':
// alert("13 Yusif Məmmədəliyev, Bakı 1005");
// break;
// case '2':
// alert("240 Mustafa Kamal Atatürk, Gəncə");
// break;
// case '3': 
// alert("37M Ilia Chavchavadze Avenue");
// default:
// alert("Нет филиалов в вашем городе");
// }

// console.log(15/4)


/*
Напишите программу, которая выведет на консоль 
текстом число от 1 до 99, введенное 
пользователем. Например:

24 -> “двадцать четыре”
5  -> “пять”
13 -> “тринадцать”
*/
    
// function getNumber() {
//     return +prompt('Введите число');
// }

// function convertDigitToWord(digit) {
//     switch (digit) {
//         case 1:
//             return 'один';
//         case 2:
//             return 'два';
//         case 3:
//             return 'три';
//         case 4:
//             return 'четыре';
//         case 5:
//             return 'пять';
//         case 6:
//             return 'шесть';
//         case 7:
//             return 'семь';
//         case 8:
//             return 'восемь';
//         case 9:
//             return 'девять';
//         case 10:
//             return 'десять';
//     }
// }

// function convertTeensToWords(teens) {
//     let result;
//     switch (teens) {
//         case 11:
//             result = 'одиннадцать';
//             break;
//         case 12:
//             result = 'двенадцать';
//             break;
//         case 13:
//             result = 'тринадцать';
//             break;
//         case 14:
//             result = 'четырнадцать';
//             break;
//         case 15:
//             result = 'пятнадцать';
//             break;
//         case 16:
//             result = 'шеснадцать';
//             break;
//         case 17:
//             result = 'мемьнадцать';
//             break;
//         case 18:
//             result = 'восемьнадцать';
//             break;
//         case 19:
//             result = 'девятьнадцать';
//             break;
//     }
//     return result;
// }

// function convertDecimalToWords(decimal) {
//     let result;
//     switch (decimal) {
//         case 2:
//             result = 'двадцать';
//             break;
//         case 3:
//             result = 'тридцать';
//             break;
//         case 4:
//             result = 'сорок';
//             break;
//         case 5:
//             result = 'пятьдесят';
//             break;
//         case 6:
//             result = 'шестьдесят';
//             break;
//         case 7:
//             result = 'семьдесят';
//             break;
//         case 8:
//             result = 'восемьдесят';
//             break;
//         case 9:
//             result = 'девяносто';
//             break;
//     }
//     return result;
// }

// function convertNumberToWords(number) {
//     let result;
//     if (number <= 10) {
//         result = convertDigitToWord(number);
//     } else if (number <= 19) {
//         result = convertTeensToWords(number);
//     } else {
//         let units = number % 10; // Единицы
//         let decimal = (number - units) / 10; // Десятичные
//         result = convertDecimalToWords(decimal);
//         if (units !== 0) {
//             result += ' ' + convertDigitToWord(units);
//         }
//     }
//     return result;
// }

// // Ввод
// let number = getNumber();

// // Алгоритм
// // Вывод
// alert(convertNumberToWords(number));

// function firstQ(){
// let result = prompt("Сколько океанов на нашей планете? 1: Четыре 2: Пять 3: Шесть");
// switch(result){
//     case '1': 
//     alert("Неправильно");
//     break;
//     return false;
//     case '2':
//         alert("Правильно");
//         return true;
//     case '3': 
//     break;
//     alert("Неправильно");
//     break;
//     return false;
// };
// };

// function secondQ(){
// let result = prompt("Единица измерения силы тока - это: 1: Ампер 2:Вольт 3: Ватт");
// switch(result){
//     case '1': 
//     alert("Правильно");
//     return true;
//     break;
//     case '2':
//         alert("Неправильно");
//         break;
//         return false;
//     case '3': 
//     alert("Неправильно");
//     break;
//     return false;
// };
// };

// function thirdQ(){
//     let result = prompt("Сатурн - это какая по счету планета от Солнца? 1: Вторая 2: Четвертая 3: Шестая");
// switch(result){
//     case '1':
//         alert("Неправильно");
//         break;
//         return false;
//         case '2':
//         alert("Неправильно");
//         break;
//         return false;
//     case '3': 
//     alert("Правильно");
//     return true;

// };
// };


// if(firstQ() == true){
//     if(secondQ() == true){
//         if(thirdQ() == true){
//             alert("ВЫ ВЫИГРАЛИ!");
//         };
//     };
// } ;


// function first(){
//     let number = prompt("Введите число");
//  if(number < 0){
//      alert("Число не является натуральным")
//  };
// };

// function two(){
//     let number = prompt("Введите число");
//     if(number > 0 && number % 2 == 0){
//         alert("Число не является нечетным")
//     };
// };

// function three(){
//     let number = prompt("Введите число");
//     if(number > 0 && number % 2 != 0 && number % 3 != 0){
//         alert("Число не делится на 3")
//     };
// };

// function four(){
//     let number = prompt("Введите число");
//     if(number % 3 == 0){
//         alert("Число является натуральным и нечетным, а также делится на 3")
//     };
// };

// first();


// 
// let sum = 0;
// while(true) {
//     let value = +prompt("vvedite chislo");
//     if(!value) break;
//     sum += value;
// }
// alert("sum" + sum);



// let student = {
//     name: "Kamran",
//     age: 25,
//     "programming language": 'JavaScript' 
// };

// let key = prompt("?");
// console.log(student[key]);

// let question = prompt("?");
// let student = {
//     name: "Kamran",
//     age: 25,
//     "programming language": 'JavaScript' 
// };

// if(question in student){
//     console.log(student[question])
// }
// else {
//     console.log("no information")
// }


// function CreateUser(name, percent, balance){
//     return {
//         name: name,
//         percent: percent,
//         balance: balance
//     };
// }
// let user1 = new CreateUser("us1", 5, 100);
// let user2 = new CreateUser("us2", 6, 200);
// let user3 = new CreateUser("us3", 4, 300);
// let user4 = new CreateUser("us4", 1, 100);
// let user5 = new CreateUser("us5", 8, 90);
// let user6 = new CreateUser("us6", 10, 600);
// let user7 = new CreateUser("us7", 2, 10);
// let user8 = new CreateUser("us8", 6, 80);
// let user9 = new CreateUser("us9", 2, 70);
// let user10 = new CreateUser("us10", 1, 90);


let user1 = {
    after: {},
    before: null,
    name: "User1"
}
let user2 = {
    before: {},
    after: {},
    name: "User2"
}
let user3 = {
    before: {},
    after: {},
    name: "User3"
}
let user4 = {
    before: {},
    after: {},
    name: "User4"
}
let user5 = {
    before: {},
    after: null,
    name: "User5"
}

user1.after = user2;
user2.before = user1;
user2.after = user3;
user3.before = user2;
user3.after = user4;
user4.before = user3;
user4.after = user5;
user5.before = user4;

function findFirstUser(in_user){
    let person = in_user;
    while(person.after != null){
        person = person.after;
    }
    return person;
}
let func = findFirstUser(user1);
console.log(func);

function findLastUser(in_user){
    let person = in_user;
    while(person.before != null){
        person = person.before;
    }
    return person;
}


let funcBefore = findLastUser(user5);
console.log(funcBefore);