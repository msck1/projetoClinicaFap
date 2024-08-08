import mysql from 'mysql2'
import { fazerConexao } from '../db';

class Medico {

    private nome_medico:string;
    private especialidade_medico:string;
    private crm_medico:string;

    constructor() {
        

            // para fazer: constructor, getters e setters de acordo com o bd/der, funcoes crud

        
    }

}

// funcao de inserir,
function inserirMedico(nome_medico:string, especialidade_medico:string, crm_medico:string, callback:(erro: mysql.QueryError | null, resultado?:any) =>  void) {
    
    const conexao = fazerConexao();
    const inserir = 'INSERT INTO medico (nome_medico, especialidade_medico, crm_medico) VALUES (?,?,?)';
    conexao.query(inserir, [nome_medico, especialidade_medico, crm_medico], (erro, resultado) => {

        if (erro) {

            callback(erro);
            
        } else {

            callback(null, resultado);
            
        }
    })

}

function listarMedicos() {
    
}

function listarMedicoPorCrm() {
    
}

function alterarMedicoPeloCrm() {
    
}

function excluirMedicoPeloCrm() {
    
}

export { inserirMedico };