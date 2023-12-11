//projeto de lógica
console.log("DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI");
// saída
console.log("Digite o nome do seu jogador:");

// declara uma variável
let nickname = "Valente  jogadora";

// concatenando uma mensagem fixa + uma variável
console.log("Bem-vinda " + nickname);
console.log(nickname + " entrou no servidor");

const notificacao = "Pokemon Go diz:";
// saída de mensagens
console.log(notificacao + " Tem um novo Pokémon na região!");
console.log(notificacao + " Você foi derrotado por um líder!");

// informações do herói
const heroi = {
  nome: "Super Herói",
  xp: 5000 // Altere o valor do XP conforme necessário
};

// o nome e o XP do herói
const nomeHeroi = heroi.nome;
const xpHeroi = heroi.xp;

//  nível de XP
function determinarNivel(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 6001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// XP do herói
const nivelXP = determinarNivel(xpHeroi);

//saida
if (nivelXP === "Radiante") {
  console.log(`Parabéns!  Seu  herói está   na fase  ${nivelXP} .`);
} else {
  console.log (` Seu  herói  está  na fase   ${nivelXP},  não  na  fase Radiante.`);
}

//saida
console.log (" O herói de nome "   +   nickname   +  " está no nível de "  )
