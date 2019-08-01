function soletrar(string){
    var tam = string.length;
    var arr = []
    var pos = 0
    while (tam > pos){
        arr.push(string.substr(pos,1))
        pos++ 
    }
    return arr
}