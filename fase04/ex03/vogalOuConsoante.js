function vogalOuConsoante(napolitano){
    var enrolado = napolitano.toLowerCase() ;
    if (enrolado == "a" || enrolado == "e" || enrolado == "i" || enrolado == "o" || enrolado == "u") {
        return "Vogal" ;
    } else {
        return "Consoante" ;
    }
}