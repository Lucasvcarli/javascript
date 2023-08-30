// Variáveis
let nomeAluno;
let sobrenomeAluno;

// Constante
const NOME_ESCOLA = "Senai";

// Receber informações do usuário
nomeAluno = prompt("Digite o seu primeiro nome:");
sobrenomeAluno = prompt("Digite o seu sobrenome:");
let nomeAlunoCompleto = nomeAluno + " " + sobrenomeAluno;

alert("Seu nome é " + nomeAlunoCompleto + " e você estuda no " + NOME_ESCOLA);