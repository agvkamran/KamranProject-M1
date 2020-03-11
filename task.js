// let firstMessage = "Ваш депозит на начало расчетного периода составлял 30000 руб";
// console.log(firstMessage);
// let secondMessage = "Согласно вашему тарифу, вам была присвоена ставка 18.5%";
// console.log(secondMessage);
// let thirdMessage = "К концу расчетного периода прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб";
// console.log(thirdMessage);


// let deposit = prompt("Напишите сумму денег");
// let percent = 7;

// let DepositPercent = Number(deposit) + Number(deposit * percent / 100);

// console.log("Через год у вас будет" + " " + DepositPercent + " " "на счету");

let deposit = prompt("Напишите сумму денег");
let percent = prompt("Напишите процентную ставку");

let DepositPercent = Number(deposit) + Number(deposit * percent / 100);

console.log("Через год у вас будет" + DepositPercent + "на счету");



