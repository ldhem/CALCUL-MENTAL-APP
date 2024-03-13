// // Conditions Imbriquées

// // if() {
// //     if() {

// //     } else {
// //         if()
// //     }
// // }

// // array.length, index

// // let obj = {};
// // let arr = ["Dan", "Sami", "Karim","Zoubair","Hendjy"];
// // let result = "";

// // for (let index = 0; index < arr.length; index++) {
// //     result += arr[index];
// //     if (index < arr.length - 2) {
// //         result += ", ";
// //     } else if (index === arr.length - 2) {
// //         result += " et ";
// //     }
// // }

// // result += " assistent au cours de Javascript";

// // console.log(result);


// // let numbers = [3, 1, 21, 13, 15, 8, 7]
// // let sum = 0

// // // A l'aide d'un parcous de tableau, calculer la somme totale du tableau

// // for (let index = 0; index < numbers.length; index++){
// //     sum += numbers[index];
// // }

// // // console.log(sum);

// // // Calculer la somme de la première moitié du tableau
// // let total_1 = 0;
// // for (let i = 0; i < Math.ceil(numbers.length / 2); i++) {
// //     total_1 += numbers[i];
// // }

// // // Calculer la somme de la deuxième moitié du tableau
// // let total_2 = 0;
// // for (let i = Math.ceil(numbers.length / 2); i < numbers.length; i++) {
// //     total_2 += numbers[i];
// // }

// // console.log(total_1, total_2);



// let people = [
//     {
//         name: "Jean",
//         age: 28,
//         hasCar: false
//     },
//     {
//         name: "Daniel",
//         age: 17,
//         hasCar: false
//     },
//     {
//         name: "Mathilde",
//         age: 21,
//         hasCar: true
//     },
//     {
//         name: "Oscar",
//         age: 12,
//         hasCar: false
//     },
//     {
//         name: "Adèle",
//         age: 43,
//         hasCar: true
//     },
//     {
//         name: "Romane",
//         age: 61,
//         hasCar: false
//     },
//     {
//         name: "Amandine",
//         age: 8,
//         hasCar: false
//     },
//     {
//         name: "Johanna",
//         age: 25,
//         hasCar: true
//     },
// ]



// // Calculer la moyenne des ages des people (Le total divisé par le nombre d'elements dans le tableau)

// // let total = 0

// // for (let index = 0; index < people.length; index++) {
// //     total += people[index].age;
// // }


// // let moyenne = total / people.length;

// // console.log(Math.round(moyenne));

// // // Afficher le nombre de personnes qui ont une voiture.
// // // Difficulté supplémentaire : Afficher une phrase "Un tel, un tel, un tel et un tel ont une voiture"

// // let countWithCar = 0;


// // for (let index = 0; index < people.length; index++) {
// //     if (people[index].hasCar) countWithCar++;
    
// // }

// // console.log("Nombre de personnes ayant une voiture:", countWithCar);

// // let sentence=""

// // for (let index = 0; index < people.length; index++) {
// //     if (people[index].hasCar) {
// //         sentence += people[index].name + ","
// //     }
// // }

// // console.log(people.hasCar)



// // Les FONCTIONS


// // Declaration d'une fonction (function)
// function logName(parameter) {
// //     console.log("Bonjour " + parameter +" Vous avez gagné notre grand prix, appelez au 0033.....")
// // }

// // // Execution d'une fonction

// // logName("Paul")
// // logName("Simon")
// // logName("Mehdi")

// // function add (param1,param2) {
// //     console.log(param1 + param2)
// // }

// // add (3, 4)
// // add(200, 41)
// // add(21, 7)

// function addWithReturn (p1, p2) {
//     return p1 + p2
// }


// let resultAddition = addWithReturn (5,6)

// let names_1 = ["Paul","Pierre","Simon"]
// let names_2 = ["Paul","Mehdi","Simon"]
// let names_3 = ["Nassim","Hendjy","Val"]


// function getAllNameInSentence(arrParameter){
//     let sentence = ""

//     for(let i = 0; i < arrParameter.length; i++){
//         sentence += arrParameter[i]
//         if (i !== arrParameter.length -1 ) {
//         sentence += ", "
//         }
//     }

//     return sentence
// }

// let resultSentence = getAllNameInSentence (names_1)
// let resultSentence2 = getAllNameInSentence (names_2)
// // let resultSentence3 = getAllNameInSentence (names_3)

// // console.log(resultSentence, resultSentence2, resultSentence3)



// // Ecrire une fonction qui retourne la phrase "Bordeaux, Talence, Pessac, Mérignac"

// // let towns = ["Bordeaux","Talence","Pessac","Mérignac",]

// // function foncTowns (towns) {
// //     let sentence = "";

// //     for (let i = 0; i < towns.length; i++) {
// //         sentence += towns[i];
// //         if ( i < towns.length - 1) {
// //             sentence += ", "
// //         }
// //     }

// //     return sentence;
// // }

// // let result = foncTowns(towns);
// // console.log(result);


// function getNamesInSentence(peoples) {
//     let namesSentence = "";

//     for (let i = 0; i < peoples.length; i++) {
//         namesSentence += peoples[i].name;
//         if (i < peoples.length - 1) {
//             namesSentence += " - ";
//         }
//     }

//     return namesSentence;
// }

// let resultFromArrayOfObject = getNamesInSentence(people);
// console.log(resultFromArrayOfObject);


// // "Jean - Mathilde - Adèle ..."

// // function getNamesWithoutCar(noCar) {
// //     let namesWithoutCar = [];

// //     for (let i = 0; i < noCar.length; i++) {
// //         if (!noCar[i].hasCar) {
// //             namesWithoutCar.push(noCar[i].name);
// //         }
// //     }

// //     return namesWithoutCar;
// // }

// // let resultWithoutCar = getNamesWithoutCar(people);
// // console.log(resultWithoutCar); 

// // Le fonction retourneun tableau des noms des personnes qui n'ont pas de voiture


// // Precision sur les parametres 

// let myArrayOfObjects = [
// { name: "Sarah", gender: "f"},
// { name: "Alice", gender: "f"},
// { name: "Antoine", gender: "m"},
// { name: "Stéphane", gender: "m"},
// ]

// // let objectToTest = myArrayOfObjects[3]
// // let gone = "parti"

// // if (objectToTest.gender === "f") {
// //     gone += "e"
// // }

// // console.log(`${objectToTest.name} est ${gone} !`)

// function logCorrectSentence(person) {
//     let gone = "parti";

//     if (person.gender === "f") {
//         gone += "e";
//     }

//     console.log(`${person.name} est ${gone} !`);
// }

// for (let i = 0; i < myArrayOfObjects.length; i++) {
//     logCorrectSentence(myArrayOfObjects[i]);
// }


// // Exercice, trouver le minimum

// let numbers_a = [34, 12, 31, 5, 54, 62, 3];
// let minimum = Infinity;

// for (let i = 0; i < numbers_a.length; i++) {
//     if (numbers_a[i] < minimum) {
//         minimum = numbers_a[i];
//     }
// }

// console.log(minimum);

// // Exercice; factoriser le script avec une fonction getMinimum() qui retourne la valeur minimum d'un tableau

// function getMinimum(arrNumbers) {
//     let minimum = Infinity;

//     for (let i = 0; i < arrNumbers.length; i++) {
//         if (arrNumbers[i] < minimum) {
//             minimum = arrNumbers[i];
//         }
//     }

//     return minimum;
// }

// let minimumValue = getMinimum(numbers_a);
// console.log(minimumValue);



// function getAverage(arrNumbers) {
//     let sum = 0;

//     for (let i = 0; i < arrNumbers.length; i++) {
//         sum += arrNumbers[i];
//     }

    
//     let average = sum / arrNumbers.length;

   
//     let formattedAverage = average.toFixed(2);

//     return formattedAverage;
// }

// let averageAge = getAverage(numbers_a);

// console.log(averageAge);


// // CALCUL DE L'IMC

// const person_1 = {
//     name: "Jean",
//     size: 1.78,
//     weigth: 75
// };

// const person_2 = {
//     name: "Marc",
//     size: 1.92,
//     weigth: 86
// };

// function calculateIMC(person) {
//     const imc = person.weigth / (person.size * person.size);
//     return imc.toFixed(2);
// }

// function displayIMCMessage(person) {
//     const imc = calculateIMC(person);
//     console.log(`${person.name} a une IMC de ${imc}.`);
// }
// displayIMCMessage(person_1);
// displayIMCMessage(person_2);

// if (parseFloat(calculateIMC(person_1)) > parseFloat(calculateIMC(person_2))) {
//     console.log(`${person_1.name} a l'IMC le plus élevé.`);
// } else {
//     console.log(`${person_2.name} a l'IMC le plus élevé.`);
// }


// Formule de l'IMC : poids / (taille * taille)

// Ecrire la fonction qui retourne l'IMC d'une personne

// Afficher En console "Un tel a une IMC de ....."

// const people_2 = [person_1,person_2,person_3]
// Modifier ma fonction pour prendre en paramètre le tableau d'objets ce-dessus
// La fonction affichera "Un tel a l'IMC la plus elevée"











// Avec le tableau people[], afficher le nom de la personne la plus jeune

// let minimumAge = Infinity;
// let personWithMinimumAge;

// for (let i = 0; i < people.length; i++) {
//     if (people[i].age < minimumAge) {
//         minimumAge = people[i].age;
//         personWithMinimumAge = people[i];
//     }
// }

// console.log(`La personne avec l'âge le plus bas est ${personWithMinimumAge.name} avec l'âge de ${minimumAge}.`);