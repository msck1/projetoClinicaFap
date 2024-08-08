import readlineSync from 'readline-sync'
import { inserirMedico } from './medicos/medico'; // importa do crud medicos

let programa:boolean = true;

function main() {

    while (programa == true) {

console.log(`
======================
         MENU
1. Crud de medico
2. Crud de paciente
3. Crud de consulta
4. Crud de telefones do paciente
5. Sair do programa e executar o crud
======================
`)

    let opcaoCrud = readlineSync.questionInt("Digite a sua opcao:")


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
`)

    let opcaoMedico = readlineSync.questionInt("Digite a sua opcao:")


        switch (opcaoMedico) {
            case 1:

            // criar input do usuario aqui, seguindo a logica da classe medico

            inserirMedico('Daniel','Pediatra','123456-SP', (erro, resultado) => {
                if (erro) {
            
                    console.log("Erro ao inserir o medico", erro)
                    
                } else {
            
                    console.log("Medico inserido com sucesso!")
                    
                }
            })


                
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

            console.log("Digite um valor valido")

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
            programa = false;
            
            default:

            console.log("Digite um valor valido")

                break;
        } // fim do switch menu
    } // fim do while

}


main()