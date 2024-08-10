//SISTEMA PARA IMPLEMENTAR E GFERENCIAAR OS MÉDICOS, PACIENTES E CONSULTAS DE UMA CLÍNICA.
//CÓDIGO PARA CLASSE DE TELEFONE DE PACIENTE PARA O PROGRAMA DA CLINICA FAP

import mysql from 'mysql2'
import { fazerConexao } from '../db';

class Medico {

    private id_medico:number;
    private nome_medico:string;
    private especialidade_medico:string;
    private crm_medico:string;

        constructor(_id_medico:number, _nome_medico:string, _especialidade_medico:string, _crm_medico:string) {
        this.id_medico =_id_medico
        this.nome_medico = _nome_medico
        this.especialidade_medico = _especialidade_medico
        this.crm_medico = _crm_medico
        }
        
        //Setters
            setid_medico(_id_medico:number): void {
            this.id_medico = _id_medico
        }
            setnome_medico(_nome_medico:string): void {
            this.nome_medico = _nome_medico
        }
            setespecialidade_medico(_especialidade_medico:string): void {
            this.especialidade_medico = _especialidade_medico
        }
            setcrm_medico(_crm_medico:string): void {
            this.crm_medico = _crm_medico
        }
        //Getters
            getidnome_medico(): number{
            return this.id_medico
        }
            getnome_medico(): string {
            return this.nome_medico
        }
            getespecialidade_medico(): string {
            return this.especialidade_medico
        }
            getcrm_medico(): string {
            return this.crm_medico
        }
        }
            

// funcao de inserir
function inserirMedico(medico: Medico, callback:(erro: mysql.QueryError | null, resultado?:any) =>  void) {
    
    const conexao = fazerConexao();
    const inserir = 'INSERT INTO medico (nome_medico, especialidade_medico, crm_medico) VALUES (?,?,?)';
    conexao.query(inserir, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico()], (erro, resultado) => {

        if (erro) {

            callback(erro);
            
        } else {

            callback(null, resultado);
            
        }
    })

}

// funcao de listar buscando pelo crm
function listarMedicoPorCrm(crm_medicoBuscar:string, callback:(erro: mysql.QueryError | null, resultado?:any) => void) {

    const conexao = fazerConexao();
    const query = 'SELECT * FROM medico WHERE crm_medico = ?';
    conexao.query(query, [crm_medicoBuscar],(erro,resultado) => {

        if (erro) {

            callback(erro)
            
        } else {

            callback(null, resultado)
            
        }
    })
    
}

// funcao de alterar: busca pelo crm do medico, altera ele por completo
function alterarMedicoPeloCrm(crm_antigo:string, medico:Medico, callback:(erro: mysql.QueryError | null, resultado?:any) =>  void) {
    
    const conexao = fazerConexao();
    const alterar = 'UPDATE medico SET nome_medico = ?, especialidade_medico = ?, crm_medico = ? WHERE crm_medico = ?';
    conexao.query(alterar, [medico.getnome_medico(), medico.getespecialidade_medico(), medico.getcrm_medico(), crm_antigo], (erro, resultado) => {

        if (erro) {

            callback(erro);
            
        } else {

            callback(null, resultado);
            
        }
    })

}


// funcao de excluir: busca pelo crm do medico, remove o medico por completo
function excluirMedicoPeloCrm(crm_medicoExcluir:string, callback:(erro: mysql.QueryError | null , resultado?:any) => void) {
    
    const conexao = fazerConexao();
    const excluir = 'DELETE FROM medico WHERE crm_medico = ?';
    conexao.query(excluir, crm_medicoExcluir, (erro, resultado) => {

        if (erro) {

            callback(erro);
            
        } else {

            callback(null, resultado);
            
        }
    })

}


export { inserirMedico, listarMedicoPorCrm, alterarMedicoPeloCrm, excluirMedicoPeloCrm  };
export { Medico }
