let operator="";
document.getElementById("add").onclick=function(){
    operator="+";
}
document.getElementById("sub").onclick=function(){
    operator="-";
}
document.getElementById("multiply").onclick=function(){
    operator="*";
}
document.getElementById("division").onclick=function(){
    operator="/";
}
document.getElementById("modular").onclick=function(){
    operator="%";
}
function calculate(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let=result;
    if (!operator) { 
        document.getElementById("result").innerHTML = "Select operator!";
        return;
    }
    switch(operator){
    case"+":result=num1+num2;break;
    case"-":result=num1-num2;break;
    case"*":result=num1*num2;break;
    case"/":result=num1/num2;break;
    case"%":result=(num2/100)*num1;break;
    default:result="error";break;
    }
    document.getElementById("result").innerHTML=result;
    operator="";
    console.log(operator);
}
