function nove(deus){
    var balero = deus.toString()
    var jesus = balero.substr(-1,1)
    if (jesus === "9" ) {
        return true ;
    } else {
        return false;
    }
}