function por42(num1,num2){
    var ok = 0
    if(num1<num2){
        while(num1<=num2){
            if(num1%42 === 0 && num1 + 42 <= num2){
                ok++
                return num1 + 42
                num1++
                break;
            }
        num1++
        }
    }else{
        while(num1>=num2){
            if(num2%42 === 0 && num2 + 42 <= num1){
                ok++
                return num2 + 42
                break;
            }
        num2++
        }
    }
    if(ok === 0){
        console.log("Não encontrado")
        return false
    }
}