function primo(num){
    var um = 1
    var contador = 0
    if(num>0){
        while(num>=um){
            if(num%um === 0){
                contador++
            }else{
            }
            um ++
        }
    }else{
        return "Não"
    }
    if(contador == 2){
        return "Sim"
    }else{
        return "Não"
    }
}