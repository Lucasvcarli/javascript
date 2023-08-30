// Variáveis
let nomeAluno;
let sobrenomeAluno;
let anoNascimentoAluno;

// Constante
const NOME_ESCOLA = "Senai";

// Receber informações do usuário
nomeAluno = prompt("Digite o seu primeiro nome:");
sobrenomeAluno = prompt("Digite o seu sobrenome:");
let nomeAlunoCompleto = nomeAluno + " " + sobrenomeAluno;
anoNascimentoAluno = parseInt(prompt("Digite o ano do seu nascimento:"));
idadeAluno = ANO_ATUAL - anoNascimentoAluno;

alert(anoNascimentoAluno);

alert("Seu nome é " + nomeAlunoCompleto + " e você estuda no " + NOME_ESCOLA + ", sua idade é" + idadeAluno + " ano(s)");