"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db"); // import da funcao
function main() {
    (0, db_1.inserirUser)('Daniel', (erro, results) => {
        if (erro) {
            console.error('Erro ao inserir o usuario', erro);
        }
        else {
            console.log("Usuario inserido com sucesso!");
        }
    });
}
main();
