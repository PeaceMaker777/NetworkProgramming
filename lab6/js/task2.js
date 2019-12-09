var a = 20;
var b = 50;
var c = 0;
if (a>=0&&b>=0){
    c=a-b;
}
else if (a<0&&b<0){
    c=a*b;
}
else{
    c=a+b;
}
console.log("Первое задание, вторая часть:" + c);

//
function sum(a,b) {
    return a+b;
}
console.log("Второе задание, вторая часть, сумма:" + sum(10,20));

function difference(a,b) {
    return a-b;
}
console.log("Второе задание, вторая часть, разность:" + difference(10,20));

//
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1,arg2);
        default:
            throw Error("Я устал");
    }
}

//
function power(val, pow) {
    return pow === 0 ? 1 : val * power(val, pow - 1);
}

//
function validate(password) {
    var ok=password.length>=3&&password.length<=12;
    ok &= password.indexOf("&") != -1
        || password.indexOf("$") != -1
        || password.indexOf("%") != -1
        || password.indexOf("*") != -1
    ;
    ok &= password[0] == "q" || password[password.length-1] == "z";

    return ok;
}