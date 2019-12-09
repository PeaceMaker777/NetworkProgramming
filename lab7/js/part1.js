/**
 *
 * @param {Number} number
 */
function intToObject(number) {
    var asString = ""+number;
    var result = {};
    result['единицы']=asString[2];
    result['десятки']=asString[1];
    result['сотни']=asString[0];

    return result;
}

function print(){
    var nick = document.getElementById("text-input").value;
    alert(JSON.stringify(intToObject(nick)));
}

//
var Basket = {
    goodList: {},
    countTotalPrice: function () {
        var sum=0;
        for (var productName in this.goodList) {
            var item = this.goodList[productName];
            sum+=item.price*item.count;
        }

        return sum;
    },

    countTotalNumber: function () {
        var result = 0;
        for (var productName in this.goodList) {
            var item = this.goodList[productName];
            result+=item.count;
        }

        return result;
    },

    putProduct: function (product) {
        var key = product.name;
        if (key in this.goodList){
            this.goodList[key].count++;
        }

        else{
            product.count = 1;
            this.goodList[key]=product;
        }

        return this;
    }
};

var products = [
    {name:'f', price:20},
    {name:'b', price:40},
    {name:'c', price:50},
    {name:'d', price:20},
    {name:'n', price:20},
];

var i = 0;

products.forEach(function (item) {
    Basket.putProduct(item);
    if (i%2===1){
        Basket.putProduct(item);
    }
    i++;
});

console.log('Общая стоимость:' + Basket.countTotalPrice());
console.log('Общее кол-во товаров:' + Basket.countTotalNumber());
