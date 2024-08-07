import { inserirUser } from "./db"; // import da funcao

function main() {

    inserirUser('Daniel', (erro, results) => {
        if (erro) {

            console.error('Erro ao inserir o usuario', erro);
        } else {
            console.log("Usuario inserido com sucesso!")
        }
    });
}

main()