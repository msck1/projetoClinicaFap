import readlineSync from 'readline-sync' // import do readlinesync
import { inserirMedico, listarMedicoPorCrm, alterarMedicoPeloCrm, excluirMedicoPeloCrm } from './medicos/medico'; // importa do crud medicos
import { Medico } from './medicos/medico'; // import da classe medico


function main() {

    function loop() { // funcao loop para fazer o loop no menu, garante que a conexao com o bd seja feita sem precisar sair do loop, a funcao loop deve ser chamada no fim da funcao crud
        
   

console.log(`
======================
         MENU
1. Crud de medico
2. Crud de paciente
3. Crud de consulta
4. Crud de telefones do paciente
5. Sair do programa
======================
`)

    let opcaoCrud = readlineSync.questionInt("Digite a sua opcao:");


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
`)

    let opcaoMedico = readlineSync.questionInt("Digite a sua opcao:");


        switch (opcaoMedico) {
            case 1:

            const nome_medico = readlineSync.question("Digite o nome do medico: ");
            const especialidade_medico = readlineSync.question("Digite a especialidade do medico: ");
            const crm_medico = readlineSync.question("Digite o crm do medico: ");
            const novoMedico = new Medico (0, nome_medico, especialidade_medico, crm_medico,); 

            inserirMedico(novoMedico, (erro, resultado) => {
                if (erro) {
            
                    console.error("Erro ao inserir o medico", erro);
                    
                } else {
            
                    console.log("Medico inserido com sucesso!", resultado);
                    
                }
                loop();
            });


                
                break;
            case 2:

                const medicoCrmBuscar = readlineSync.question("Digite o CRM do medico: ")

                listarMedicoPorCrm(medicoCrmBuscar, (erro, resultado) => {
                    
                    if (erro) {

                        console.error("Erro ao buscar o medico", erro);
                        
                    } else {

                        console.log("Medico encontrado com sucesso", resultado);
                        
                    }
                    loop();
                })

            
                break;
            case 3:
                const medicoCrmAntigo = readlineSync.question("Digite o CRM do medico que deseja alterar: ")
                const medicoNomeNovo = readlineSync.question("Digite o nome novo do medico: ")
                const medicoEspecialidadeNova = readlineSync.question("Digite a especialidade nova: ")
                const medicoCrmNovo = readlineSync.question("Digite o CRM novo do medico: ")
                const medicoAtualizado = new Medico (0, medicoNomeNovo, medicoEspecialidadeNova, medicoCrmNovo)
                alterarMedicoPeloCrm(medicoCrmAntigo, medicoAtualizado, (erro, resultado) => {

                    if (erro) {

                        console.error(erro)
                        
                    } else {

                        console.log("Medico atualizado com sucesso", resultado)
                        
                    }
                    loop();
                })


                break;
            case 4:

            let medicoCrmExcluir = readlineSync.question("Digite o CRM do medico que deseja excluir: ")

                excluirMedicoPeloCrm(medicoCrmExcluir, (erro, resultado) => {

                    if (erro) {

                        console.error(erro)
                        
                    } else {

                        console.log("Medico excluido com sucesso: ",resultado)
                        
                    }
                    loop();
                })

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
`)

    const opcaoPaciente = readlineSync.questionInt("Digite a sua opcao: ")

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

        console.log("Digite um valor valido")
        loop();
            break;
}
// break do switch paciente
break;

// falta fazer o resto do switch constula,etc...

            case 3:
                loop();
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