function ateZero(num){
    var arr = []
    var zero = 0
    if(num>=zero){
        while(num>=zero){
            arr.push(zero)
            zero++
        }
    }else{
        while(num<=zero){
            arr.push(num)
            num++
        }
    }
    return arr
}