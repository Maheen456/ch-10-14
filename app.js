var num1=parseFloat(prompt("Enter first number: "));
var num1=parseFloat(prompt("Enter second number: "));
var operator=parseFloat(prompt("Enter operator ( either +, -, * or / ): "));

if(operator == '+'){
    var answer=num1+num2;
}else
if(operator== '-'){
    var answer=num1-num2;
}else 
if(operator== '*'){
    var answer=num1*num2;
}else{
    var answer=num1/num2;
}
alert(answer);
    
