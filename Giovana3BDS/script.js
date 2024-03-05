let nome = prompt("Digite seu nome:");
console.log(nome);
window.alert(`olá ${nome}!`);

let numero = parseInt(Math.random() * 10 + 1);
let tentativas = 0;
let palpite = 0;

while (palpite !== numero && tentativas < 5) {
    palpite = parseInt(prompt("Digite um numero:"));
    tentativas++;
    if (palpite > numero){
        window.alert(`Voce errou! O numero é menor que ${palpite}. Tente outra vez.`);
    } else {
        if (palpite < numero){
            window.alert(`Voce errou! O numero é maior que ${palpite}. Tente outra vez.`)
}
    }
}

if (numero === palpite){
    let palavratentativa = tentativas === 1 ? "tentativa" : "tentativas";
    window.alert(`Parabens ${nome}! O número era ${numero}, e vocẽ acertou com ${tentativas} ${palavratentativa}!!`);
} else {
    window.alert(`Vocẽ esgotou suas tentativas e nao acertou. O número era ${numero}!`);
}
