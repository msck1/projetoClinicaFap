import mysql from 'mysql2'; 
import { fazerConexao } from '../db'; 

class Paciente {

    private idpaciente: number;
    private nome_paciente: string;
    private dataNascimento_paciente: string;
    private cpf_paciente: string;


    constructor(_idpaciente: number, _nome_paciente: string, _dataNascimento_paciente: string, _cpf_paciente: string) {
        this.idpaciente = _idpaciente;
        this.nome_paciente  = _nome_paciente;
        this.cpf_paciente = _cpf_paciente;
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }


    public getIdPaciente(): number {
        return this.idpaciente;
    }

    public setIdPaciente(_idpaciente: number): void {
        this.idpaciente = _idpaciente;
    }

    public getNomePaciente(): string {
        return this.nome_paciente;
    }

    public setNomePaciente(_nome_paciente: string): void {
        this.nome_paciente = _nome_paciente;
    }

    public getCpfPaciente(): string {
        return this.cpf_paciente;
    }

    public setCpfPaciente(_cpf_paciente: string): void {
        this.cpf_paciente = _cpf_paciente;
    }

    public getDataNascimentoPaciente(): string {
        return this.dataNascimento_paciente;
    }

    public setDataNascimentoPaciento(_dataNascimento_paciente: string): void {
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }

}

function inserirPaciente(paciente: Paciente, callback: (erro: mysql.QueryError | null, resultado?: any) => void) { 

    const conexao = fazerConexao();
    const inserir = `INSERT INTO paciente (nome_paciente,  dataNascimento_paciente, cpf_paciente) VALUES (?, ?, ?)`;
    conexao.query(inserir, [paciente.getNomePaciente(), paciente.getDataNascimentoPaciente(), paciente.getCpfPaciente()], (erro, resultado) => {

        if (erro) {

            callback(erro); 

        } else {

            callback(null, resultado); 

        }

    });
}

// fazer o resto

// function validarCpf(cpf, pacientes) {
//     return pacientes.find(paciente => paciente.getCpf() === cpf);
// }

// function exibirTodosPacientes(pacientes){
//     console.log("Esse sao todos os Pacientes Cadastrados:");
//     pacientes.forEach((paciente, index) => {
//         console.log(${index + 1}. ${paciente.getPaciente()});
//     });
// }

// function menuExibirPaciente(pacientes){ //Para Listar Paciente
//     if (!Array.isArray(pacientes)) {
//         throw new TypeError('Pacientes deve ser um array.');
//     }
//     opcao1 = true;
//     console.log('Chegamos ao Menu de Listar Paciente!!!');
//     while(opcao1 == true){
//         console.log('=== 1 - Listar um Paciente ');
//         console.log('=== 2 - Listar Todos os Paciente ');
//         console.log('=== 3 - Voltar ');
//         let escolha = parseInt(readline.question('Qual a sua escolha: '));
//         switch (escolha) {
//             case 1: //Listar um Paciente
//             const cpfBusca = readline.question('Digite o CPF do Paciente: ');
//             const pacienteEncontrado = validarCpf(cpfBusca, pacientes);

//             if (pacienteEncontrado) {
//                 console.log('Paciente encontrado com Sucesso!!!');
//                 console.log(pacienteEncontrado.getPaciente());
//             } else {
//                 console.log('Paciente não encontrado, tente novamente.');
//             }
//               break;
//             case 2: //Listar Todos os Paciente
//               exibirTodosPacientes(pacientes);
//               break;
//             case 3: //Voltar
//               opcao1 = false;
//               break;
//             default: //Se escolher Invalido
//               console.log('Essa escolha não existe, tente novamente!!!');
//               break;
//         }
//     }
// }

// function alterarPaciente(pacienteEncontrado) {
//     console.log("Obs: Se for o mesmo valor, basta colocar os dados novamente.")
//     const novoNome = readline.question('Digite o novo Nome do Paciente: ');
//     const novoCpf = readline.question('Digite o novo CPF do Paciente: ');
//     const novaData = readline.question('Digite a nova Data do Paciente: ');
//     const novoCelular = readline.question('Digite o novo telefone celular do Paciente')
//     const novoResidencial = readline.question('Digite o novo telefone residencial do Paciente')
//     if (novoNome) pacienteEncontrado.setNome(novoNome);
//     if (novoCpf) pacienteEncontrado.setCpf(novoCpf);
//     if (novaData) pacienteEncontrado.setData(novaData);
//     if (novoCelular) pacienteEncontrado.setCelular(novoCelular)
//     if (novoResidencial) pacienteEncontrado.setResidencial(novoResidencial)
//     console.log('Paciente Atualizado com Sucesso!!!'); 
// }
// function removerPaciente(pacientes){
//     const cpfBusca = readline.question('Digite o CPF do paciente que deseja remover: ');
//     const pacienteEncontrado = validarCpf(cpfBusca, pacientes);

//     if (pacienteEncontrado) {
//         const pacienteIndex = pacientes.findIndex(paciente => paciente.getCpf() === cpfBusca);
//         pacientes.splice(pacienteIndex, 1);
//         console.log('Paciente removido com sucesso!');
//     } else {
//         console.log('Paciente não encontrado.');
//     }
// }

// const readline = require("readline-sync");
// opcao = true;
// const i = 0; //Teste
// const pacientes = []; //Lista de pacientes
// console.log('=== Bem vindo ao sistema Clínica Medica!!! ');

// while(opcao == true){       
//     console.log('=== Vamos ao menu do Paciente: ');
//     console.log('=== 1 - Cadastrar um Paciente ');
//     console.log('=== 2 - Listar um Paciente ');
//     console.log('=== 3 - Remover um Paciente ');
//     console.log('=== 4 - Alterar dados de um Paciente ');
//     console.log('=== 5 - Sair do Programa ');
//     let escolha = parseInt(readline.question('Qual a sua escolha: '));
//   switch (escolha) {
//     case 1: //Cadastrar um Paciente
//       const novoPaciente = adicionarPaciente();
//       pacientes.push(novoPaciente); // Por na lista
//       console.log('Paciente foi Cadastrador com Sucesso!!!');
//       break;
//     case 2: //Listar um Paciente
//       menuExibirPaciente(pacientes);
//       break;
//     case 3: //Remover um Paciente
//       if(pacientes.length === 0){
//         console.log('Nenhum Paciente esta Cadastrado. Adicione um Paciente primeiro.');
//         break;
//       }     
//       removerPaciente(pacientes);
//       break;
//     case 4: //Alterar dados de um Paciente
//       if(pacientes.length === 0){
//         console.log('Nenhum Paciente esta Cadastrado. Adicione um Paciente primeiro.');
//         break;
//       }
//       const cpfEscolhido = readline.question('Digite o CPF do Paciente: ');
//       const pacienteEncontrado = validarCpf(cpfEscolhido, pacientes);
//       if (pacienteEncontrado) {
//         console.log('Paciente encontrado com Sucesso!!!');
//         console.log(pacienteEncontrado.getPaciente());
//         alterarPaciente(pacienteEncontrado);
//       } else {
//         console.log('Paciente não encontrado, tente novamente.');
//       }
//       break;
//     case 5: //Sair do Programa
//       opcao = false;
//       break;
//     default: //Se escolher Invalido
//       console.log('Essa escolha não existe, tente novamente!!!');
//       break;
//   }
// }

export { Paciente, inserirPaciente }