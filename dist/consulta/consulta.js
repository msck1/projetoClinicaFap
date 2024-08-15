"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
exports.inserirConsulta = inserirConsulta;
exports.listarConsultaPeloCPF = listarConsultaPeloCPF;
exports.alterarConsultaPeloCPF = alterarConsultaPeloCPF;
exports.excluirConsultaPeloCPF = excluirConsultaPeloCPF;
exports.listarConsultaPeloCRM = listarConsultaPeloCRM;
const db_1 = require("../db"); // Importa a função para estabelecer a conexão com o banco de dados
// Declaração da Classe Consulta-Representa uma consulta médica com detalhes sobre a data, descrição, forma de pagamento, médico e paciente
class Consulta {
    // Construtor da classe-Instancia um novo objeto Consulta com os valores fornecidos
    constructor(_idconsulta, _dataHora_consulta, _consulta_descricao, _forma_pagamento, _medico_id_medico, _paciente_id_paciente) {
        this.idconsulta = _idconsulta;
        this.dataHora_consulta = _dataHora_consulta;
        this.consulta_descricao = _consulta_descricao;
        this.forma_pagamento = _forma_pagamento;
        this.medico_id_medico = _medico_id_medico;
        this.paciente_id_paciente = _paciente_id_paciente;
    }
    // Métodos Setters
    setidconsulta(_idconsulta) {
        this.idconsulta = _idconsulta;
    }
    setdataHora_consulta(_dataHora_consulta) {
        this.dataHora_consulta = _dataHora_consulta;
    }
    setconsulta_descricao(_consulta_descricao) {
        this.consulta_descricao = _consulta_descricao;
    }
    setformaa_pagamento(_forma_pagamento) {
        this.forma_pagamento = _forma_pagamento;
    }
    setmedico_id_medico(_medico_id_medico) {
        this.medico_id_medico = _medico_id_medico;
    }
    setpaciente_id_paciente(_paciente_id_paciente) {
        this.paciente_id_paciente = _paciente_id_paciente;
    }
    // Métodos Getters
    getidconsulta() {
        return this.idconsulta;
    }
    getdataHora_consulta() {
        return this.dataHora_consulta;
    }
    getconsulta_descricao() {
        return this.consulta_descricao;
    }
    getforma_pagamento() {
        return this.forma_pagamento;
    }
    getmedico_id_medico() {
        return this.medico_id_medico;
    }
    getpaciente_id_paciente() {
        return this.paciente_id_paciente;
    }
}
exports.Consulta = Consulta;
// Função para inserir/agendar uma nova consulta-Adiciona uma consulta ao banco de dados com base nos dados fornecidos
function inserirConsulta(consulta, crm_medico, cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    // Consulta BD para inserir uma nova consulta na tabela 'consulta'
    const inserirConsulta = `INSERT INTO consulta (dataHora_consulta, consulta_descricao, forma_pagamento, medico_id_medico, paciente_idpaciente) VALUES (?, ?, ?, (SELECT id_medico FROM medico WHERE crm_medico = ?), (SELECT idpaciente FROM paciente WHERE cpf_paciente = ?))`;
    conexao.query(inserirConsulta, [consulta.getdataHora_consulta(), consulta.getconsulta_descricao(), consulta.getforma_pagamento(), crm_medico, cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
// Função para listar consultas pelo CPF do paciente-Busca consultas no banco de dados com base no CPF do paciente
function listarConsultaPeloCPF(cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    // Consulta o BD para buscar consultas associadas a um paciente pelo CPF
    const buscarConsulta = `SELECT idconsulta, CONVERT_TZ(dataHora_consulta, '+00:00', '-03:00') AS dataHora_consulta, consulta_descricao, forma_pagamento, medico_id_medico, paciente_idpaciente, nome_paciente, nome_medico FROM consulta INNER JOIN paciente ON idpaciente = paciente_idpaciente INNER JOIN medico ON id_medico = medico_id_medico WHERE cpf_paciente = ?`;
    conexao.query(buscarConsulta, [cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
// Função para listar consultas pelo CRM do médico-Busca consultas no banco de dados com base no CRM do médico
function listarConsultaPeloCRM(crm_medico, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    // Consulta O BD para buscar consultas associadas a um médico pelo CRM
    const buscarConsulta = `SELECT idconsulta, CONVERT_TZ(dataHora_consulta, '+00:00', '-03:00') AS dataHora_consulta, consulta_descricao, forma_pagamento, medico_id_medico, paciente_idpaciente, nome_paciente, nome_medico FROM consulta INNER JOIN paciente ON idpaciente = paciente_idpaciente INNER JOIN medico ON id_medico = medico_id_medico WHERE crm_medico = ?`;
    conexao.query(buscarConsulta, [crm_medico], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
// Função para alterar uma consulta pelo CPF do paciente- Atualiza os detalhes da consulta com base no CPF do paciente
function alterarConsultaPeloCPF(consulta, cpf_paciente, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    // Consulta BD para atualizar uma consulta existente baseada no CPF do paciente
    const alterarConsulta = `UPDATE consulta JOIN paciente ON consulta.paciente_idpaciente = paciente.idpaciente SET dataHora_consulta = ?, consulta_descricao = ?, forma_pagamento = ? WHERE paciente.cpf_paciente = ?`;
    conexao.query(alterarConsulta, [consulta.getdataHora_consulta(), consulta.getconsulta_descricao(), consulta.getforma_pagamento(), cpf_paciente], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
// Função para excluir/cancelar uma consulta pelo CPF do paciente-Remove uma consulta do banco de dados com base no CPF do paciente
function excluirConsultaPeloCPF(cpf_pacienteExcluir, callback) {
    const conexao = (0, db_1.fazerConexao)(); // Inicia a conexão com o banco de dados
    // Consulta BD para excluir uma consulta existente baseada no CPF do paciente
    const excluirConsulta = `DELETE consulta FROM consulta JOIN paciente ON consulta.paciente_idpaciente = paciente.idpaciente WHERE paciente.cpf_paciente = ?`;
    conexao.query(excluirConsulta, [cpf_pacienteExcluir], (erro, resultado) => {
        if (erro) {
            callback(erro); // Retorna o erro para o callback
        }
        else {
            callback(null, resultado); // Retorna o resultado para o callback
        }
    });
}
