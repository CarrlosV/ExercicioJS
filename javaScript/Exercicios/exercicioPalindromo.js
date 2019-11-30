function palindromo(string) {
    let expressaoRegular = /[^A-Za-z0–9]/g;
    let stringMinuscula = string.toLowerCase();
    let stringSemAcentuacao = stringMinuscula.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let stringFormatada = stringSemAcentuacao.replace(expressaoRegular, '');
    let stringRevertida = stringFormatada.split('').reverse().join('');
    console.log(stringFormatada);
    console.log(stringRevertida);
    console.log(stringRevertida);
    return stringRevertida === stringFormatada;
}

console.log(palindromo("Olé! Maracujá, caju, caramelo!"));

/*
* bibliografia: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
*/