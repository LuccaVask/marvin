function alfabetoMilitar(vogal){
    var vogalmin = vogal.toLowerCase()
    if (vogalmin == "a"){
        return "alfa"
    } if (vogalmin == "e"){
        return "echo"
    } if (vogalmin == "i"){
        return "india"
    }if (vogalmin == "o"){
        return "oscar"
    }if (vogalmin == "u"){
        return "uniform"
    } else {
        return "false"
    }
}