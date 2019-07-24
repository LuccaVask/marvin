function abc(palavra){
    var nome = palavra.toLowerCase()
    var cel = nome.substr(0,1)
    if (cel == "a" || cel == "b" || cel == "c" ){
        return "true"
    } else {
        return "false"
    }
}