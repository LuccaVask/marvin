function ateZero(num){
    var arr = []
    var zero = 0
    if(num>zero){
        while(num>=zero){
            arr.push(zero)
            zero++
            return arr
        }
    }else{
        while(num<0){
            arr.push(num)
            num++
            return arr
        }
    }
}