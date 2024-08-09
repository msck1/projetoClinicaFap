import readlineSync from 'readline-sync'
import { inserirMedico, listarMedicoPorCrm } from './medicos/medico'; // importa do crud medicos
import { Medico } from './medicos/medico';


function main() {

    function loop() { // funcao loop para fazer o loop no menu, garante que a conexao com o bd seja feita de uma maneira mais 
        
   

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

            //const nome_medico = readlineSync.question("Digite o nome do medico: ");
            //const especialidade_medico = readlineSync.question("Digite a especialidade do medico: ");
            //const crm_medico = readlineSync.question("Digite o crm do medico: ");
            //const novoMedico = new Medico (); // inserir as const acima, falta o constructor

            inserirMedico('Daniel','Pediatra','12345-SP', (erro, resultado) => {
                if (erro) {
            
                    console.error("Erro ao inserir o medico", erro);
                    
                } else {
            
                    console.log("Medico inserido com sucesso!", resultado);
                    
                }
                loop();
            });


                
                break;
            case 2:

                // fazer o mesmo input de usuario de inserirMedico


                listarMedicoPorCrm('123456-SP', (erro, resultado) => {
                    
                    if (erro) {

                        console.error("Erro ao buscar o medico", erro);
                        
                    } else {

                        console.log("Medico encontrado com sucesso", resultado);
                        
                    }
                    loop();
                })

            
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
// break do switch medico
break;

// fazer o resto do switch pacientes,consulta,etc...

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