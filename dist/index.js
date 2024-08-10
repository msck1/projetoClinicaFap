"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync")); // import do readlinesync
const medico_1 = require("./medicos/medico"); // importa do crud medicos
const medico_2 = require("./medicos/medico"); // import da classe medico
const consulta_1 = require("./consulta/consulta");
const consulta_2 = require("./consulta/consulta");
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
                        const novoMedico = new medico_2.Medico(0, nome_medico, especialidade_medico, crm_medico);
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
                        const medicoAtualizado = new medico_2.Medico(0, medicoNomeNovo, medicoEspecialidadeNova, medicoCrmNovo);
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
                        let medicoCrmExcluir = readline_sync_1.default.question("Digite o CRM do medico que deseja excluir: ");
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
2. Listar consulta pelo id
3. Alterar consulta pelo id
4. Excluir consulta pelo id
5. Voltar
======================
`);
                const opcaoConsulta = readline_sync_1.default.questionInt("Digite a sua opcao: ");
                switch (opcaoConsulta) {
                    case 1:
                        const datahora = new Date(readline_sync_1.default.question("Digite a data e a hora da consulta(FORMATO AAAA-MM-DD HH:MM:SS): "));
                        const descricao = readline_sync_1.default.question("Digite a descricao da consulta: ");
                        const cpf_pacienteConsulta = readline_sync_1.default.question("Digite o CPF do paciente: ");
                        const crm_medicoConsulta = readline_sync_1.default.question("Digite o CRM do medico: ");
                        const novaConsulta = new consulta_2.Consulta(0, datahora, descricao, 0, 0);
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
                        (0, consulta_1.listarConsultaPeloId)();
                        loop();
                        break;
                    case 3:
                        (0, consulta_1.alterarConsultaPeloID)();
                        loop();
                        break;
                    case 4:
                        (0, consulta_1.excluirConsultaPeloId)();
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
                // break do switch consulta
                break;
            case 4:
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
