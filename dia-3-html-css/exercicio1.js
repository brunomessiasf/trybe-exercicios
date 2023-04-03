function indiceDoMaior(arrNumeros) {
    let maior = 0;
    for (let index in arrNumeros) {
        if (arrNumeros[maior] < arrNumeros[index]) {
            maior = Number(index)
            
        }
    }
    console.log(maior)
}
indiceDoMaior([9, 1, 3, 5, 7])
 