function tabela(multiply) {
    let meuArray = []
    for(let contador = 1;contador <= multiply;contador++){
        meuArray[contador] = []
         
        for(let mult = 1;mult <= multiply; mult++){
            meuArray[contador][mult] = contador * mult
        }

    }

return meuArray
}
console.table(tabela(10))    
