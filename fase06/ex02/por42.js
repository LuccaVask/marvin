function por42(num1,num2){
    if(num1<num2){
        while(num1<=num2){
            if(num1%42 === 0){
                return num1 + 42
                break;
            }else{
                return false
                console.log("N�o encontrado")
            }
            num1++
        }
    }else{
        while(num1>=num2){
            if(num2%42 === 0){
                return num2 + 42
                break;
            }else{
                return false
                console.log("N�o encontrado")
            }
            num2++
        }
    }
}