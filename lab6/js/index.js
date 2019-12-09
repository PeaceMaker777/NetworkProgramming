//Перевод температуры, температуру можно задавать из страницы, через текстовое поле
function printTemp() {
    var tempC = document.getElementById("text-input").value;
    var tempF = (9	/	5)	*	tempC	+	32;
    alert(tempF);
}

//Переменные и вывод данных в консоль
var name;
var admin;
name="Василий";
admin=name;
console.log(admin);

//Изучение принципа приведения типов
console.log(10	+	10	+	"10");
console.log(10	+	"10"	+	10);
console.log(10	+	10	+	+"10");
console.log(10	/	-"");
console.log(10	/	+"2.5");//при , не работает

//Правила задачи имён переменных
let	mode	=	"normal";
let	my_valu3	=	102;
//let	3my_value3	=	"102";//нельзя начинать название переменной с числа
let	__hello__	=	"world";
let	$$$	=	"money";
//let	!0_world	=	true; //нельзя использовать спецсимволы в названиях

