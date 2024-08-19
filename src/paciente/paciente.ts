import mysql from 'mysql2'
import { fazerConexao} from '../db'

class Paciente {
    private idpaciente: number;
    private nome_paciente: string;
    private dataNascimento_paciente: string;
    private cpf_paciente: string;

    constructor(_idpaciente:number, _nome_paciente:string, _dataNascimento_paciente:string, _cpf_paciente:string) {
        this.idpaciente = _idpaciente;
        this.nome_paciente = _nome_paciente;
        this.cpf_paciente = _cpf_paciente;
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }

    getIdPaciente():number {
        return this.idpaciente;
    }
    setIdPaciente(_idpaciente:number): void {
        this.idpaciente = _idpaciente;
    }
    getNomePaciente():string {
        return this.nome_paciente;
    }
    setNomePaciente(_nome_paciente:string): void {
        this.nome_paciente = _nome_paciente;
    }
    getCpfPaciente():string {
        return this.cpf_paciente;
    }
    setCpfPaciente(_cpf_paciente:string): void {
        this.cpf_paciente = _cpf_paciente;
    }
    getDataNascimentoPaciente():string {
        return this.dataNascimento_paciente;
    }
    setDataNascimentoPaciento(_dataNascimento_paciente:string): void {
        this.dataNascimento_paciente = _dataNascimento_paciente;
    }
}

function inserirPaciente(paciente: Paciente, callback: (erro: mysql.QueryError | null, resultado?: any) => void): void {
    const conexao = fazerConexao();
    const inserir = `INSERT INTO paciente (nome_paciente,  dataNascimento_paciente, cpf_paciente) VALUES (?, ?, ?)`;
    conexao.query(inserir, [paciente.getNomePaciente(), paciente.getDataNascimentoPaciente(), paciente.getCpfPaciente()], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
function listarPacientePeloCpf(cpf_pacienteBuscar: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void): void {
    const conexao = fazerConexao();
    const query = `SELECT nome_paciente, CONVERT_TZ(dataNascimento_paciente, '+00:00', '-03:00') AS dataNascimento_paciente, cpf_paciente FROM paciente WHERE cpf_paciente = ?`;
    conexao.query(query, [cpf_pacienteBuscar], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
function alterarPacientePeloCpf(cpf_antigo: string, paciente: Paciente, callback: (erro: mysql.QueryError | null, resultado?: any) => void): void {
    const conexao = fazerConexao();
    const alterar = 'UPDATE paciente SET nome_paciente = ?, dataNascimento_paciente = ?, cpf_paciente = ? WHERE cpf_paciente = ?';
    conexao.query(alterar, [paciente.getNomePaciente(), paciente.getDataNascimentoPaciente(), paciente.getCpfPaciente(), cpf_antigo], (erro, resultado) => {
        if (erro) {
            callback(erro);
        } else {
            callback(null, resultado);
        }
    });
}
function excluirPacientePeloCpf(cpf_pacienteExcluir: string, callback: (erro: mysql.QueryError | null, resultado?: any) => void): void {
    const conexao = fazerConexao();
    const excluir = 'DELETE FROM paciente WHERE cpf_paciente = ?';
    conexao.query(excluir, [cpf_pacienteExcluir], (erro, resultado) => {
        if (erro) {
            callback(erro);
        } else {
            callback(null, resultado);
        }
    });
}
export { Paciente, inserirPaciente, alterarPacientePeloCpf, listarPacientePeloCpf, excluirPacientePeloCpf};