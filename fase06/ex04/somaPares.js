function somaPares(num1,num2){
    var are1 = Math.ceil(num1)
    var are2 = Math.ceil(num2)
    var arr = []
    var x = 0
    var soma =  0
    if(are1<are2){
        while(are1<=are2){
            if(are1%2 === 0){
                arr.push(are1)
            }
            are1++
        }
    }else{
        while(are2<=are1){
            if(are2%2 === 0){
                arr.push(are2)
            }
            are2++
        }
    }
    var ary = arr.length
    while(x<ary){
        soma += arr[x]
        x++
    }
    return soma
    
}