"use strict";
// const readline = require('readline-sync'); // Permitir a interação síncrona com o usuário através do console
// import mysql from 'mysql2';
// import { fazerConexao } from '../db';
// // Declaração da Classe Telefone
// class Telefone {
//     private idtelefone_paciente: number;
//     private residencial_paciente: number;
//     private celular_paciente: number;
//     private paciente_id_paciente: number;
//     constructor(_idtelefone_paciente: number, _residencial_paciente: number, _celular_paciente: number, _paciente_id_paciente: number) {
//         this.idtelefone_paciente = _idtelefone_paciente;
//         this.residencial_paciente = _residencial_paciente;
//         this.celular_paciente = _celular_paciente;
//         this.paciente_id_paciente = _paciente_id_paciente;
//     }
//     // Setters
//         setIdTelefonePaciente(_idtelefone_paciente: number) {
//         this.idtelefone_paciente = _idtelefone_paciente;
//     }
//         setCelularPaciente(_celular_paciente: number) {
//         this.celular_paciente = _celular_paciente;
//     }
//         setResidencialPaciente(_residencial_paciente: number) {
//         this.residencial_paciente = _residencial_paciente;
//     }
//         setPacienteIdPaciente(_paciente_id_paciente: number) {
//         this.paciente_id_paciente = _paciente_id_paciente;
//     }
//     // Getters
//         getIdTelefonePaciente() {
//         return this.idtelefone_paciente;
//     }
//         getCelularPaciente() {
//         return this.celular_paciente;
//     }
//         getResidencialPaciente() {
//         return this.residencial_paciente;
//     }
//         getPacienteIdPaciente() {
//         return this.paciente_id_paciente;
//     }
// }
// // Função de inserir
// function inserirTelefonePaciente(telefone: Telefone, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
//     const conexao = fazerConexao();
//     const inserirTelefone = 'INSERT INTO telefone (celular_paciente, residencial_paciente, paciente_id_paciente) VALUES (?, ?, (SELECT id_paciente FROM paciente WHERE cpf_paciente = ?)))';
//     conexao.query(inserirTelefone, [telefone.getcelular_Paciente(), telefone.getresidencial_Paciente(), cpf_paciente], (erro, resultado) => {
//         conexao.end(); // Fechar a conexão após a operação
//         if (erro) {
//             callback(erro);
//         } else {
//             callback(null, resultado);
//         }
//     });
// }
// // Função de listar pelo cpf do Paciente
// function listarTelefonePorCpfpaciente(paciente_id_paciente: number, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
//     const conexao = fazerConexao();
//     const query = 'SELECT * FROM telefone WHERE paciente_id_paciente = ?';
//     conexao.query(query, [paciente_id_paciente], (erro, resultado) => {
//         conexao.end(); // Fechar a conexão após a operação
//         if (erro) {
//             callback(erro);
//         } else {
//             callback(null, resultado);
//         }
//     });
// }
// //Função de alterar pelo Cpf do Paciente
// function alterarCpfPaciente(telefone: Telefone, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
//     const conexao = fazerConexao();
//     const alterarTelefone = 'UPDATE telefone SET idtelefone_paciente = ?, celular_paciente = ?, residencial_paciente = ? WHERE cpf_paciente = ?';
//     conexao.query(alterarTelefone, [telefone.getPacienteIdPaciente(), telefone.getCelularPaciente(), telefone.getResidencialPaciente()], (erro, resultado) => {
//         conexao.end(); // Fechar a conexão após a operação
//         if (erro) {
//             callback(erro);
//         } else {
//             callback(null, resultado);
//         }
//     });
// }
// // Função de excluir
// function excluirTelefonePorCpfPaciente(idtelefone_paciente: number, callback: (erro: mysql.QueryError | null, resultado?: any) => void) {
//     const conexao = fazerConexao();
//     const excluirTelefone = 'DELETE FROM telefone WHERE cpf_paciente = ?';
//     conexao.query(excluirTelefone, [idtelefone_paciente], (erro, resultado) => {
//         conexao.end(); // Fechar a conexão após a operação
//         if (erro) {
//             callback(erro);
//         } else {
//             callback(null, resultado);
//         }
//     });
// }
// export { inserirTelefonePaciente, listarTelefonePorCpfpaciente, alterarTelefonePorCpfPaciente, excluirTelefonePorCpfPaciente };
// export { Telefone };
