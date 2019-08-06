function por42(num1,num2){
    if(num1>num2){
        while(num1>num2){
            return num2%42
            num2++
        }
    }else{
        while(num2>num1){
            return num1%42
            num1++
        }
    }
}
console.log(por42(5,4))