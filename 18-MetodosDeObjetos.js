// 
pessoa = {
    nome: 'Renato',
    idade: 33,
    altura: 1.85,
    peso: 85
}


console.log(pessoa);

pessoa.cor = 'Branco';

console.log(pessoa);

pessoa.andar = function() {
    return "Pessoa Andando";
}

console.log(pessoa.andar());


console.log(pessoa);

pessoa.aniversario = function() {
    pessoa.idade++;
}

pessoa.aniversario();
pessoa.aniversario();



console.log(pessoa)