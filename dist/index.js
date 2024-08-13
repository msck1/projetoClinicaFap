"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync")); // import do readlinesync
const medico_1 = require("./medicos/medico"); // importa do crud medicos
const consulta_1 = require("./consulta/consulta"); // import de crud consulta
function main() {
    function loop() {
        console.log(`
======================
         MENU
1. Crud de medico
2. Crud de paciente
3. Crud de consulta
4. Crud de telefones do paciente
5. Sair do programa
======================
`);
        let opcaoCrud = readline_sync_1.default.questionInt("Digite a sua opcao:");
        switch (opcaoCrud) {
            case 1:
                console.log(`
======================
         MENU
1. Inserir um medico
2. Listar medico por crm
3. Alterar um medico pelo crm
4. Excluir um medico pelo crm
5. Voltar
======================
`);
                const opcaoMedico = readline_sync_1.default.questionInt("Digite a sua opcao:");
                switch (opcaoMedico) {
                    case 1:
                        const nome_medico = readline_sync_1.default.question("Digite o nome do medico: ");
                        const especialidade_medico = readline_sync_1.default.question("Digite a especialidade do medico: ");
                        const crm_medico = readline_sync_1.default.question("Digite o crm do medico: ");
                        const novoMedico = new medico_1.Medico(0, nome_medico, especialidade_medico, crm_medico);
                        (0, medico_1.inserirMedico)(novoMedico, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao inserir o medico", erro);
                            }
                            else {
                                console.log("Medico inserido com sucesso!", resultado);
                            }
                            loop();
                        });
                        break;
                    case 2:
                        const medicoCrmBuscar = readline_sync_1.default.question("Digite o CRM do medico: ");
                        (0, medico_1.listarMedicoPorCrm)(medicoCrmBuscar, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao buscar o medico", erro);
                            }
                            else {
                                console.log("Medico encontrado com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 3:
                        const medicoCrmAntigo = readline_sync_1.default.question("Digite o CRM do medico que deseja alterar: ");
                        const medicoNomeNovo = readline_sync_1.default.question("Digite o nome novo do medico: ");
                        const medicoEspecialidadeNova = readline_sync_1.default.question("Digite a especialidade nova: ");
                        const medicoCrmNovo = readline_sync_1.default.question("Digite o CRM novo do medico: ");
                        const medicoAtualizado = new medico_1.Medico(0, medicoNomeNovo, medicoEspecialidadeNova, medicoCrmNovo);
                        (0, medico_1.alterarMedicoPeloCrm)(medicoCrmAntigo, medicoAtualizado, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Medico atualizado com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 4:
                        const medicoCrmExcluir = readline_sync_1.default.question("Digite o CRM do medico que deseja excluir: ");
                        (0, medico_1.excluirMedicoPeloCrm)(medicoCrmExcluir, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Medico excluido com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 5:
                        loop();
                        break;
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                }
                // break do switch medico
                break;
            case 2:
                console.log(`
======================
         MENU
1. Inserir um paciente
2. Listar paciente pelo CPF
3. Alterar paciente pelo CPF
4. Excluir paciente pelo CPF
5. Voltar
======================
`);
                const opcaoPaciente = readline_sync_1.default.questionInt("Digite a sua opcao: ");
                switch (opcaoPaciente) {
                    case 1:
                        loop();
                        break;
                    case 2:
                        loop();
                        break;
                    case 3:
                        loop();
                        break;
                    case 4:
                        loop();
                        break;
                    case 5:
                        loop();
                        break;
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                }
                // break do switch paciente
                break;
            // falta fazer o resto do switch constula,etc...
            case 3:
                console.log(`
======================
         MENU
1. Inserir uma consulta
2. Listar consulta pelo CPF
3. Alterar consulta pelo CPF
4. Excluir consulta pelo CPF
5. Voltar
======================
`);
                const opcaoConsulta = readline_sync_1.default.questionInt("Digite a sua opcao: ");
                switch (opcaoConsulta) {
                    case 1:
                        const datahora = readline_sync_1.default.question("Digite a data e a hora da consulta (FORMATO AAAA-MM-DD HH:MM:SS): ");
                        const descricao = readline_sync_1.default.question("Digite a descricao da consulta: ");
                        const cpf_pacienteConsulta = readline_sync_1.default.question("Digite o CPF do paciente: ");
                        const crm_medicoConsulta = readline_sync_1.default.question("Digite o CRM do medico: ");
                        const novaConsulta = new consulta_1.Consulta(0, datahora, descricao, 0, 0);
                        (0, consulta_1.inserirConsulta)(novaConsulta, crm_medicoConsulta, cpf_pacienteConsulta, (erro, resultado) => {
                            if (erro) {
                                console.error('Erro ao criar a consulta:', erro);
                            }
                            else {
                                console.log('Consulta criada com sucesso:', resultado);
                            }
                            loop();
                        });
                        break;
                    case 2:
                        const cpf_paciente = readline_sync_1.default.question("Digite o CPF do paciente que deseja achar a consulta: ");
                        (0, consulta_1.listarConsultaPeloCPF)(cpf_paciente, (erro, resultado) => {
                            if (erro) {
                                console.error('Erro ao listar consulta:', erro);
                            }
                            else {
                                console.log('Consulta encontrada com sucesso:', resultado);
                            }
                            loop();
                        });
                        break;
                    case 3:
                        const cpfBuscarConsulta = readline_sync_1.default.question("Digite o CPF do paciente relacionao a consulta: ");
                        const dataHoraNova = readline_sync_1.default.question("Digite a nova data e hora da consulta (FORMATO AAAA-MM-DD HH:MM:SS): ");
                        const descricaoNova = readline_sync_1.default.question("Digite a nova descricao: ");
                        const consultaAtualizada = new consulta_1.Consulta(0, dataHoraNova, descricaoNova, 0, 0);
                        (0, consulta_1.alterarConsultaPeloCPF)(consultaAtualizada, cpfBuscarConsulta, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Consulta atualizada com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 4:
                        const excluirConsultaCPF = readline_sync_1.default.question("Digite o CPF do paciente relacionado a consulta: ");
                        (0, consulta_1.excluirConsultaPeloCPF)(excluirConsultaCPF, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Consulta excluida com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 5:
                        loop();
                        break;
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                }
                // break do switch consulta
                break;
            case 4:
                console.log(`
======================
         MENU
1. Inserir uma consulta
2. Listar consulta pelo CPF
3. Alterar consulta pelo CPF
4. Excluir consulta pelo CPF
5. Voltar
======================
`);
                const opcaoTelefone = readline_sync_1.default.questionInt("Digite a sua opcao: ");
                switch (opcaoTelefone) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                }
                loop();
                break;
            case 5:
                console.log("Programa finalizado");
                return;
            default:
                console.log("Digite um valor valido");
                loop();
                break;
        } // fim do switch menu
    }
    loop();
}
main();
