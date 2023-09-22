const palindromo = () => {
    let word = prompt("Ingrese la palabra a evaluar: ");
    const regex = /[a-z]/g;

    word = word.toLowerCase();
    word = word.match(regex);
    wordReverse = [...word];
    wordReverse = wordReverse.reverse();
    console.log(word.join());
    console.log(wordReverse.join());

    for(let i = 0; i < word.length; i++){
        if(word[i] != wordReverse[i]) {
            return `La palabra introducida es palindromo? : ${false}`;
        }
    }

    return `La palabra introducida es palíndromo : ${true}`
}