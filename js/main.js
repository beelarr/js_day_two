
// let skyIsBlue = true;
// if (skyIsBlue){
//     console.log('Yeah the sky is blue')
// }else {
//     console.log('Hmm what color is the sky?');
// }
//
//
// let jedi = ['Skywalker', 'Yoda', 'Obi-wan', 'Qui-Gon', 'Windu'];
//
// let jediText ='';
//
// console.log('howmany jedi', jedi.length);
//
// for (let i = 0; i < jedi.length; i++){
//     console.log('what is i', i);
//     jediText += `<li>${jedi[i]}</li>`;
//     console.log(jediText);
//     document.getElementById('demo').innerHTML = jediText;
// }
//
// let color = ['Yellow', 'Orange', 'Red', 'Purple', 'Blue', 'Green'];
//
// let reverseColor = color.reverse();
//
// console.log(reverseColor);
//
// let sortedColors = color.sort();
// console.log(sortedColors);


// let num = [3, 1, 345, 212, 114, 6, 90];
//
// let sortedNum = num.sort(function(first, second){
//     console.log(first);
//     console.log(second);
//     console.log('-');
//     return first - second
// });
// console.log(sortedNum);


// let joinColors = color.join(',');
// console.log(joinColors);
//
// let fruit = ['oranges', 'lemon', 'lime', 'apple', 'Banana'];
//
// let citrus = fruit.slice(0,3);
// console.log(citrus)
//
// fruit.push('Strawberry');
// console.log(fruit);
//
// fruit.sort(function(first, second){
//     return first - second
// });
// console.log(fruit);

// let evenOdds  = [];
// for (let i = 100; i >= 0; i--){
//     if (i % 2  === 0){
//         evenOdds.unshift(i);
//     }else{
//         evenOdds.push(i)
//     }
// }
// console.log(evenOdds);


// let myDog = {name: 'Esme'};
// myDog.length =  34 + ' inches';
// myDog.age = 6;
// myDog.breed = 'Jack Russell';
// myDog.speak = function () {
//     console.log('woof')
// };
// console.log(myDog);
// myDog.speak();
//
// for (prop in myDog){
//     console.log(prop);
// }

let ourDogs = [];
ourDogs.push({owner: 'Bryon', name: 'Winston', breed: 'Twist', age: 17});
ourDogs.push({owner: 'Lori', name: 'Garry', breed: 'Black', age: 2});
console.log(ourDogs);

ourDogs.forEach(function(taco){
    console.log(taco.name, taco.age)
});
