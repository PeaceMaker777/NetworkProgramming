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
    },

    render: function () {
        var totalNumber=this.countTotalNumber(),
        result = '';
        if (totalNumber>0){
            var price = this.countTotalPrice();
            result = "В	корзине: " + totalNumber+ " товаров	на	сумму " + price + "	рублей";
        }
        else{
            result = "Корзина	пуста";
        }
        document.getElementById("cart").innerHTML=result;
    }
};

var products = [
    {name:'f', price:20},
    {name:'b', price:40},
    {name:'c', price:50},
    {name:'d', price:20},
    {name:'n', price:20},
];

//Basket.render();


var i = 0;

products.forEach(function (item) {
    Basket.putProduct(item);
    if (i%2===1){
        Basket.putProduct(item);
    }
    i++;
});

Basket.render();



