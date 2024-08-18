import mysql from 'mysql2'; 
import { fazerConexao } from '../db'; 

class Paciente {

    private idpaciente: number;
    private nome_paciente: string;
    private dataNascimento_paciente: string;
    private cpf_paciente: string;


    constructor(_idpaciente: number, _nome_paciente: string, _dataNascimento_paciente: string, _cpf_paciente: string) {
        this.idpaciente = _idpaciente;
        this.nome_paciente  = _nome_paciente;
        this.cpf_paciente = _cpf_paciente;
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }


    public getIdPaciente(): number {
        return this.idpaciente;
    }

    public setIdPaciente(_idpaciente: number): void {
        this.idpaciente = _idpaciente;
    }

    public getNomePaciente(): string {
        return this.nome_paciente;
    }

    public setNomePaciente(_nome_paciente: string): void {
        this.nome_paciente = _nome_paciente;
    }

    public getCpfPaciente(): string {
        return this.cpf_paciente;
    }

    public setCpfPaciente(_cpf_paciente: string): void {
        this.cpf_paciente = _cpf_paciente;
    }

    public getDataNascimentoPaciente(): string {
        return this.dataNascimento_paciente;
    }

    public setDataNascimentoPaciento(_dataNascimento_paciente: string): void {
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }

}

function inserirPaciente(paciente: Paciente, callback: (erro: mysql.QueryError | null, resultado?: any) => void) { 

    const conexao = fazerConexao();
    const inserir = `INSERT INTO paciente (nome_paciente,  dataNascimento_paciente, cpf_paciente) VALUES (?, ?, ?)`;
    conexao.query(inserir, [paciente.getNomePaciente(), paciente.getDataNascimentoPaciente(), paciente.getCpfPaciente()], (erro, resultado) => {

        if (erro) {

            callback(erro); 

        } else {

            callback(null, resultado); 

        }

    });
}

// fazer o resto

function listarPacientePeloCPF(){

    // falta fazer

}

function alterarPacientePeloCPF() {

    // falta fazer

}
function excluirPacientePeloCPF(){

    // falta fazer
    
}

export { Paciente, inserirPaciente }