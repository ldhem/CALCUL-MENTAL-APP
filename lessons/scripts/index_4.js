// // REVISIONS ET PRECISIONS

// // let myLitleFunction = "..."
// // let hello = "Hello World"
// // myLitleFunction = maPetiteFonctionDuMatin("confiture")
// // myLitleFunction += " ! "

// // for (let i = 0; i < 10; i++){
// //     myLitleFunction += " ! "
// // }

// // console.log(myLitleFunction,hello)

// // function maPetiteFonctionDuMatin(param){
// //     hello += " !!! " 
// //     return `Tartine a la ${param}`
// // }
// // let number = 5

// // if (number < 10) {
// //     var myName = "Paul"
// // } else {
// //     var myName = "Pierre"
// // }

// // console.log

// // // Ecire une fonction qui retourne le minimum d'un tableau passé en paramètre

// // function getMinimum(arrNumbers) {
// //     let minimum = Infinity;

// //     for (let i = 0; i < arrNumbers.length; i++) {
// //         if (arrNumbers[i] < minimum) {
// //             minimum = arrNumbers[i];
// //         }
// //     }

// //     return minimum;
// // }

// // let arrNumbers_1 = [2, 7, 3, 1, 4];
// // let arrNumbers_2 = [12, 17, 13, 11, 14, 31, 6, 28];
// // let arrNumbers_3 = [182, 167, 513, 311, 214, 341, 16, 214];

// // let minimum_1 = getMinimum(arrNumbers_1);
// // let minimum_2 = getMinimum(arrNumbers_2);
// // let minimum_3 = getMinimum(arrNumbers_3);

// // console.log("Minimum du tableau 1:", minimum_1);
// // console.log("Minimum du tableau 2:", minimum_2);
// // console.log("Minimum du tableau 3:", minimum_3);


// // RETOUR A L'IMC
// // CALCUL DE L'IMC

// const person_1 = {
//     name: "Jean",
//     size: 1.78,
//     weigth: 75
// }

// const person_2 = {
//     name: "Marc",
//     size: 1.92,
//     weigth: 86
// }

// const person_3 = {
//     name: "Sophie",
//     size: 1.70,
//     weigth: 67
// }

// const person_4 = {
//     name: "Julie",
//     size: 1.65,
//     weigth: 67
// }

// // formule de l'IMC : poids / (taille * taille)

// // Ecrire la fonction qui retourne l'IMC d'une personne.
// // Afficher en console "Un tel a une IMC de ..."

// logIMC(person_1)
// logIMC(person_2)
// logIMC(person_3)
// logIMC(person_4)

// function getIMC(param) {
//     let imc = Math.round(param.weigth * 100 / (param.size * param.size)) / 100
//     return imc
// }

// function logIMC(person) {
//     let imc = getIMC(person)
//     console.log(`${person.name} a un IMC de ${imc}`)
// }

// // Exercice++
// // const people_2 = [person_1, person_2, person_3, person_4]
// // Ecrire une nouvelle fonction qui prends en paramètre le tableau d'objets ci-dessus et retourne l'objet de la personne qui a l'IMC la plus élevée

// function biggestIMC(arr) {
//     let maxIMC = -Infinity;
//     let personWithMaxIMC = null;

//     for (let i = 0; i < arr.length; i++) {
//         let currentIMC = getIMC(arr[i]);
//         if (currentIMC > maxIMC) {
//             maxIMC = currentIMC;
//             personWithMaxIMC = arr[i];
//         }
//     }

//     return personWithMaxIMC;
// }

// const people = [person_1, person_2, person_3, person_4];
// const result_imc = biggestIMC(people);

// console.log(`${result_imc.name} a l'IMC le plus élevé parmi les personnes.`);



// INTERACTION AVEC LE DOM

const btnBlue = document.querySelector(".btn-blue")
const btnYellow = document.querySelector(".btn-yellow")
const btnRed = document.querySelector(".btn-red")

btnBlue.isClicked = false
btnYellow.isClicked = false
btnRed.isClicked = false

btnBlue.addEventListener ("click", onBtnClick)
btnYellow.addEventListener ("click", onBtnClick)
btnRed.addEventListener ("click", onBtnClick)

// let btnBlueClicked = false
// let btnYellowClicked = false
// let btnRedClicked = false

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
         color+= letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function onBtnClick() {
    const container = document.querySelector(".container");
    const randomColor = generateRandomColor();
    container.style.backgroundColor = randomColor;
}

// Dernier EXO : en cliquant sur 1 bouton, on change la couleur de chacun des trois boutons avec 3 couleurs aleatoires diffentes

function changeBtnColors() {
    const colors = generateRandomColors();
    
    btnBlue.style.backgroundColor = colors[0];
    btnYellow.style.backgroundColor = colors[1];
    btnRed.style.backgroundColor = colors[2];
}

function generateRandomColors() {
    const letters = '0123456789ABCDEF';
    const colors = [];

    for (let j = 0; j < 3; j++) {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        colors.push(color);
    }
    return colors;
}


btnBlue.addEventListener("click", changeBtnColors);
btnYellow.addEventListener("click", changeBtnColors);
btnRed.addEventListener("click", changeBtnColors);



// function onBtnBlueClick() {
//     btnBlueClicked = !btnBlueClicked
//     if(btnBlueClicked){
//         btnBlueClicked = false
//         btnBlue.textContent = "Salut"
//     } else {
//         btnBlueClicked = true
//         btnBlue.textContent = "Hello"
//     }
// }

// function onBtnYellowClick() {
//     btnYellowClicked = !btnYellowClicked
//     if(btnYellowClicked){
//         btnYellowClicked = false
//         btnYellow.textContent = "Salut"
//     } else {
//         btnYellowClicked = true
//         btnYellow.textContent = "Hello"
//     }
// }

// function onBtnRedClick() {
//     btnRedClicked = !btnRedClicked
//     if(btnRedClicked){
//         btnRedClicked = false
//         btnRed.textContent = "Salut"
//     } else {
//         btnRedClicked = true
//         btnRed.textContent = "Hello"
//     }
// }

// Qaund on clique sur un bouton on change la couleur du contaier de façons aléatoire