let mass = [[{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}], [{
    name: 'Adam',
    age: 56
}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}], [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {
    name: 'John',
    age: 19
}]];

var newArray = JSON.parse(JSON.stringify(mass));
console.log(newArray);
//

var BasketPrice = [
    {name:'f', cost:20},
    {name:'b', cost:40},
    {name:'c', cost:50},
    {name:'d', cost:20},
    {name:'n', cost:20},
];
function  countBasketPrice() {
    var costSum=0;
    BasketPrice.forEach(function (item) {
        costSum+=item.cost;
    });

    return costSum;
}

//
function cirkl() {
    for (var b = 0; b < 10; console.log(b) || b++) {}
}

//
function point() {
    var z='';
    for (var b = 0; b < 21; b++) {
        z+='*';
        console.log(z);
    }
}
