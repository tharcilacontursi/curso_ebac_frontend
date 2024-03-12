const turma1 = [
    {nome: 'Enzo', nota: 8},
    {nome: 'Maria' , nota: 10},
    {nome: 'Ana', nota: 4},
    {nome: 'Joao', nota: 5},
    {nome: 'Carol', nota: 6},
    {nome: 'Pedro', nota: 2},
];

function alunosAprovadosDaTurma(turma) {
    return turma.filter(aluno => aluno.nota >= 6);

}

const aprovados = alunosAprovadosDaTurma(turma1)

console.log(`Os alunos aprovados da Turma1 são:`);
aprovados.forEach(aluno => {
    console.log(`${aluno.nome}`);
});
