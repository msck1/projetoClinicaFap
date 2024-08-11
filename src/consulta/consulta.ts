import mysql from 'mysql2'
import { fazerConexao } from '../db'



class Consulta {

    private idconsulta: number;
    private dataHora_consulta: Date;
    private consulta_descricao: string;
    private medico_id_medico: number;
    private paciente_id_paciente: number;
    
        constructor (_idconsulta: number, _dataHora_consulta: Date, _consulta_descricao: string, _medico_id_medico: number, _paciente_id_paciente: number) {

            this.idconsulta = _idconsulta;
            this.dataHora_consulta = _dataHora_consulta;
            this.consulta_descricao = _consulta_descricao;
            this.medico_id_medico = _medico_id_medico;
            this.paciente_id_paciente = _paciente_id_paciente;

        }

        public setidconsulta(_idconsulta: number) {
            this.idconsulta = _idconsulta
        }

        public setdataHora_consulta(_dataHora_consulta: Date) {
            this.dataHora_consulta = _dataHora_consulta
        }                 

        public setconsulta_descricao(_consulta_descricao: string) {
            this.consulta_descricao = _consulta_descricao
        }            

        public setmedico_id_medico(_medico_id_medico: number) {
            this.medico_id_medico = _medico_id_medico
        }            

        public setpaciente_id_paciente(_paciente_id_paciente: number) {
            this.paciente_id_paciente = _paciente_id_paciente
        }

        public getidconsulta(): number {
            return this.idconsulta
        }

        public getdataHora_consulta(): Date {
            return this.dataHora_consulta
        }

        public getconsulta_descricao(): string {
            return this.consulta_descricao
        }

        public getmedico_id_medico(): number {
            return this.medico_id_medico
        }

        public getpaciente_id_paciente(): number {
            return this.paciente_id_paciente
        }

}

// funcao de inserir
function inserirConsulta(consulta: Consulta, crm_medico:string, cpf_paciente:string, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
    const conexao = fazerConexao();
    const inserirConsulta = `INSERT INTO consulta (dataHora_consulta, consulta_descricao, medico_id_medico, paciente_idpaciente) VALUES (?, ?, (SELECT id_medico FROM medico WHERE crm_medico = ?), (SELECT idpaciente FROM paciente WHERE cpf_paciente = ?))`;
    conexao.query(inserirConsulta,[consulta.getdataHora_consulta(), consulta.getconsulta_descricao(), crm_medico,cpf_paciente],(erro, resultado) => {
            if (erro) {

                callback(erro);

            } else {

                callback(null, resultado);

            }
        }
    );
}

// resto das funcoes, falta fazer
function listarConsultaPeloId() {
    
}

function alterarConsultaPeloID() {


}

function excluirConsultaPeloId() {
    
}


export { inserirConsulta, listarConsultaPeloId, alterarConsultaPeloID, excluirConsultaPeloId }
export { Consulta }