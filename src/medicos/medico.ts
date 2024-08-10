//SISTEMA PARA IMPLEMENTAR E GFERENCIAAR OS MÉDICOS, PACIENTES E CONSULTAS DE UMA CLÍNICA.
//CÓDIGO PARA CLASSE DE TELEFONE DE PACIENTE PARA O PROGRAMA DA CLINICA FAP

const readline = require('readline-sync');//permitir a interação síncrona com o usuário através do console

import mysql from 'mysql2'
import { fazerConexao } from '../db';

class Medico {

    private id_medico:number;
    private nome_medico:string;
    private especialidade_medico:string;
    private crm_medico:string;

        constructor(_id_medico:number, _nome_medico:string, _especialidade_medico:string, _crm_medico:string) {
        this.id_medico =_id_medico
        this.nome_paciente = _nome_paciente
        this.especialidade_medico = _especialidade_medico
        this.crm_medico = _crm_medico
        }
        
        //Setters
            setid_medico(_id_medico){
            this.id_medico = _id_medico
        }
            setnome_medico(_nome_medico) {
            this.nome_medico = _nome_medico
        }
            setespecialidade_medico(_especialidade_medico) {
            this.especialidade_medico = _especialidade_medico
        }
            setcrm_medico(_crm_medico) {
            this.crm_medico = _crm_medico
        }
        //Getters
            getidnome_medico(){
            return this.id_nome
        }
            getnome_paciente() {
            return this.nome_paciente
        }
            getespecialidade_paciente() {
            return this.especialidade_paciente
        }
            getcrm_paciente() {
            return this.crm_paciente
        }
        }
            

// funcao de inserir, trocar por a query.() depois para os metods get, parametro da funcao inserirMedico 
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

function listarMedicoPorCrm(crm_medico:string, callback:(erro: mysql.QueryError | null, resultado?:any) => void) {

    const conexao = fazerConexao();
    const query = 'SELECT * FROM medico WHERE crm_medico = ?';
    conexao.query(query, crm_medico,(erro,resultado) => {

        if (erro) {

            callback(erro)
            
        } else {

            callback(null, resultado)
            
        }
    })
    
}

function alterarMedicoPeloCrm() {
    
}

function excluirMedicoPeloCrm() {
    
}

export { inserirMedico, listarMedicoPorCrm };
export { Medico }
















































