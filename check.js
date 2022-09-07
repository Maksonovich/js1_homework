const num = prompt ('Введите числа?')
const num2 = prompt ('Введите число?')
if (num<num2) {
    alert(num +' короче ' + num2);
}else if(num>num2) {
    alert(num+' длинее '+num2)
}else{
    alert(" равны ");
}