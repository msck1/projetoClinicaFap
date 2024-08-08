"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const medico_1 = require("./medicos/medico"); // importa do crud medicos
function main() {
    function loop() {
        console.log(`
======================
         MENU
1. Crud de medico
2. Crud de paciente
3. Crud de consulta
4. Crud de telefones do paciente
5. Sair do programa e executar o crud
======================
`);
        let opcaoCrud = readline_sync_1.default.questionInt("Digite a sua opcao:");
        switch (opcaoCrud) {
            case 1:
                console.log(`
======================
         MENU
1. Inserir um medico
2. Listar todos os medicos
3. Listar medico por crm
4. Alterar um medico pelo crm
5. Excluir um medico pelo crm
6. Voltar
======================
`);
                let opcaoMedico = readline_sync_1.default.questionInt("Digite a sua opcao:");
                switch (opcaoMedico) {
                    case 1:
                        // criar input do usuario aqui, seguindo a logica da classe medico
                        (0, medico_1.inserirMedico)('Daniel', 'Pediatra', '123456-SP', (erro, resultado) => {
                            if (erro) {
                                console.log("Erro ao inserir o medico", erro);
                            }
                            else {
                                console.log("Medico inserido com sucesso!");
                            }
                            loop();
                        });
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    default:
                        console.log("Digite um valor valido");
                        break;
                }
                // break do switch medico
                break;
            // fazer o resto do switch pacientes,consulta,etc...
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                console.log("Programa finalizado");
            default:
                console.log("Digite um valor valido");
                break;
        } // fim do switch menu
        // fim do while
    }
    loop();
}
main();
