function display(num){
console.log(result);
result.value+=num
}

function allClr(){
    result.value =""
}
function equal(){
    result.value= eval(result.value)
}
function back(){
    result.value =result.value.slice(0,-1)
}