import readlineSync from 'readline-sync' // import do readlinesync
import { inserirMedico, listarMedicoPorCrm, alterarMedicoPeloCrm, excluirMedicoPeloCrm, Medico } from './medicos/medico'; // importa do crud medicos
import { alterarConsultaPeloCPF, excluirConsultaPeloCPF, inserirConsulta, listarConsultaPeloCPF, Consulta } from './consulta/consulta' // import de crud consulta




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

    const opcaoMedico = readlineSync.questionInt("Digite a sua opcao:");


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

                        console.error(erro);
                        
                    } else {

                        console.log("Medico atualizado com sucesso", resultado);
                        
                    }
                    loop();
                })


                break;
            case 4:

            let medicoCrmExcluir = readlineSync.question("Digite o CRM do medico que deseja excluir: ")

                excluirMedicoPeloCrm(medicoCrmExcluir, (erro, resultado) => {

                    if (erro) {

                        console.error(erro);
                        
                    } else {

                        console.log("Medico excluido com sucesso: ",resultado);
                        
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

    const opcaoPaciente = readlineSync.questionInt("Digite a sua opcao: ");

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
`)

    const opcaoConsulta = readlineSync.questionInt("Digite a sua opcao: ");


        switch (opcaoConsulta) {
            case 1:

                const datahora = (readlineSync.question("Digite a data e a hora da consulta(FORMATO AAAA-MM-DD HH:MM:SS): "))
                const descricao = readlineSync.question("Digite a descricao da consulta: ")
                const cpf_pacienteConsulta = readlineSync.question("Digite o CPF do paciente: ")
                const crm_medicoConsulta = readlineSync.question("Digite o CRM do medico: ")
                const novaConsulta = new Consulta(0, datahora, descricao, 0, 0);

                inserirConsulta(novaConsulta, crm_medicoConsulta, cpf_pacienteConsulta, (erro, resultado) => {
                    if (erro) {

                        console.error('Erro ao criar a consulta:', erro);

                    } else {

                        console.log('Consulta criada com sucesso:', resultado);

                    }
                    loop();
                });

            
            break;
        case 2:

                const cpf_paciente = readlineSync.question("Digite o CPF do paciente que deseja achar a consulta: ");

                listarConsultaPeloCPF(cpf_paciente,  (erro, resultado) => {

                    if (erro) {

                        console.error('Erro ao listar consulta:', erro)
                        
                    } else {

                        console.log('Consulta encontrada com sucesso:', resultado)

                    }
                    
                loop();
                });

            break;
        case 3:

                alterarConsultaPeloCPF();

                loop();
            break;
        case 4:

                excluirConsultaPeloCPF();

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