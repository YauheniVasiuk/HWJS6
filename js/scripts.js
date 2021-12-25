// Task 1
// console.log("Задача 1");
// let str1 = "aaa@bbb@ccc";

//     console.log(str1.replace(/@/g, '!'));
// Task 2
// console.log("Задача 2");
// let date2 = "2025-12-31";

//     console.log(date2.replace(/-/g, '/'));
// Task 3
// console.log("Задача 3");
// let str3 = "Я учу javascript!";
//     firstW = 'учу';
//     secondW = 'javascript';

//     console.log(str3.substring(str3.indexOf(firstW), str3.indexOf(firstW) + firstW.length));
//     console.log(str3.substr(str3.indexOf(firstW), firstW.length));
//     console.log(str3.slice(str3.indexOf(firstW), str3.indexOf(firstW) + firstW.length));

//     console.log(str3.substring(str3.indexOf(secondW), str3.indexOf(secondW) + secondW.length));
//     console.log(str3.substr(str3.indexOf(secondW), secondW.length));
//     console.log(str3.slice(str3.indexOf(secondW), str3.indexOf(secondW) + secondW.length));
// Task 4
// console.log("Задача 4");
// let arr4 = [4, 2, 5, 19, 13, 0, 10];
//     sum4 = 0;
//     for (let i = 0; i < arr4.length; i++) {
//         sum4 += Math.pow(arr4[i], 3);
//     }

//     console.log(Math.round(Math.sqrt(sum4)));
// Task 5
// console.log("Задача 5");
// let a5 = 6;
//     b5 = 1;
//     c5 = a5 - b5;

//     console.log(Math.abs(c5));
// Task 6
// console.log("Задача 6");
// let dateNow = new Date();
// let day6 = dateNow.getDate();
// let month6 = dateNow.getMonth()+1;

// console.log(dateNow);
// console.log(dateNow.toLocaleString('ru'));

// if (day6 < 10) {
//     day6 = '0'.concat(day6);
// }
// if (month6 < 10) {
//     month6 = '0'.concat(month6);
// }

// console.log("", dateNow.getHours(), ":", dateNow.getMinutes(), ":", dateNow.getSeconds(), " ", day6, ".", month6, ".", dateNow.getFullYear());
// Task 7
// console.log("Задача 7");
// let str7 = "aa aba abba abbba abca abea";
//     regExp = /a[b]+a/gi;
//     console.log(str7.match(regExp));
// Task 8
// console.log("Задача 8");
// let telNumber = prompt("Введите номер телефона в формате (+xxx xxx xxxxxxx)");
//     regExp=/^\+[0-9]{1,3}\s*\-*[0-9]{2,3}\s*\-*\b[0-9]{7}\b$/gi;

//     console.log(regExp.test(telNumber));
// Task 9
    // console.log("Задача 9");
    // let email = prompt("введите адрес электронной почты (www.xxxxxx@xxxxx.xxxxx)");

    //     function checkEmail(email) {

    //         let regExp = /^[a-z]+\.[\w-]+[0-9]{0,}@[\w-]{2,}\.[a-z]{2,11}$/gi;

    //         return regExp.test(email);
    //     }

    //     console.log(checkEmail(email));
// Task 10
    // console.log("Задача 10");
    // let adress = "https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3";
   
    //     function getAdressParts(adress) {
    //         let lengthFull = adress.length; 
    //         let adressPart = [];
    //         let regExp1 = /^[\w-]{4,}\:\/\/[\w-]+\.?[\w-]+\.[a-z]{2,11}/gi;
    //         if (adress.match(regExp1)) {
    //             exp1 = String((adress.match(regExp1)));
    //             adress = adress.replace(exp1, '');
    //             adressPart.push(exp1);
    //         }
            
    //         let regExp2 = /^\/[0-9]{4,}\/[0-9]{2,}\/[0-9]{2,}\/[\w-]+\/\?/gi;
    //             lengthFull -= exp1.length; 
    //         if ((lengthFull > 0 ) && (adress.match(regExp2))) {
    //             exp2 = String((adress.match(regExp2)));
    //             adress = adress.replace(exp2, '');
    //             adressPart.push(exp2);
    //         }
                
    //         let regExp3 = /^\s?[\w-]+\=[\w-&]+\=?[\w-]+\#/gi;
    //             lengthFull -= exp2.length;
    //         if ((lengthFull > 0 ) && (adress.match(regExp3))) {
    //             exp3 = String((adress.match(regExp3)));
    //             exp3 = exp3.replace('#', '');
    //             adress = adress.replace(exp3, '');
    //             adressPart.push(exp3);
    //             exp4 = adress;
    //             adressPart.push(exp4);
    //         }

    //         return adressPart;

    //     }
        
    //     console.log(getAdressParts(adress));
       


