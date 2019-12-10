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
            result = '',
            imgSrc=''
        ;
        if (totalNumber>0){
            var price = this.countTotalPrice();
            imgSrc = "http://s1.iconbird.com/ico/0912/My7icons/w256h2561347801471RecycleBinfull.png";
            result = "В	корзине: " + totalNumber+ " товаров	на	сумму " + price + "	рублей";
        }
        else{
            imgSrc = "http://s1.iconbird.com/ico/0912/My7icons/w256h2561347801471RecycleBinempty.png";
            result = "Корзина	пуста";
        }
        document.getElementById("cart").innerHTML=result;
        document.getElementById("cart-image").src=imgSrc;

    }
};

var products = [
    {name:'f', price:20},
    {name:'b', price:40},
    {name:'c', price:50},
];

function putByIndex(index) {
    Basket.putProduct(products[index]);
    Basket.render();
}

Basket.render();