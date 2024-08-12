"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
exports.inserirConsulta = inserirConsulta;
exports.listarConsultaPeloCPF = listarConsultaPeloCPF;
exports.alterarConsultaPeloCPF = alterarConsultaPeloCPF;
exports.excluirConsultaPeloCPF = excluirConsultaPeloCPF;
const db_1 = require("../db");
class Consulta {
    constructor(_idconsulta, _dataHora_consulta, _consulta_descricao, _medico_id_medico, _paciente_id_paciente) {
        this.idconsulta = _idconsulta;
        this.dataHora_consulta = _dataHora_consulta;
        this.consulta_descricao = _consulta_descricao;
        this.medico_id_medico = _medico_id_medico;
        this.paciente_id_paciente = _paciente_id_paciente;
    }
    setidconsulta(_idconsulta) {
        this.idconsulta = _idconsulta;
    }
    setdataHora_consulta(_dataHora_consulta) {
        this.dataHora_consulta = _dataHora_consulta;
    }
    setconsulta_descricao(_consulta_descricao) {
        this.consulta_descricao = _consulta_descricao;
    }
    setmedico_id_medico(_medico_id_medico) {
        this.medico_id_medico = _medico_id_medico;
    }
    setpaciente_id_paciente(_paciente_id_paciente) {
        this.paciente_id_paciente = _paciente_id_paciente;
    }
    getidconsulta() {
        return this.idconsulta;
    }
    getdataHora_consulta() {
        return this.dataHora_consulta;
    }
    getconsulta_descricao() {
        return this.consulta_descricao;
    }
    getmedico_id_medico() {
        return this.medico_id_medico;
    }
    getpaciente_id_paciente() {
        return this.paciente_id_paciente;
    }
}
exports.Consulta = Consulta;
// funcao de inserir
function inserirConsulta(consulta, crm_medico, cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const inserirConsulta = `INSERT INTO consulta (dataHora_consulta, consulta_descricao, medico_id_medico, paciente_idpaciente) VALUES (?, ?, (SELECT id_medico FROM medico WHERE crm_medico = ?), (SELECT idpaciente FROM paciente WHERE cpf_paciente = ?))`;
    conexao.query(inserirConsulta, [consulta.getdataHora_consulta(), consulta.getconsulta_descricao(), crm_medico, cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
// funcao de listar
function listarConsultaPeloCPF(cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)();
    const buscarConsulta = `SELECT idconsulta, CONVERT_TZ(dataHora_consulta, '+00:00', '-03:00') AS dataHora_consulta, consulta_descricao, medico_id_medico, paciente_idpaciente, nome_paciente, nome_medico FROM consulta INNER JOIN paciente ON idpaciente = paciente_idpaciente INNER JOIN medico ON id_medico = medico_id_medico WHERE cpf_paciente = ?`;
    conexao.query(buscarConsulta, [cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro);
        }
        else {
            callback(null, resultado);
        }
    });
}
function alterarConsultaPeloCPF() {
}
function excluirConsultaPeloCPF() {
}
