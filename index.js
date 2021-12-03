console.log("Cadastro de Artistas");

let listaArtistas = [{
    nome: "Maria Rita",
    estiloMusical: "MPB",
    diasDisponiveis: ["sábado", "domingo"]
}];


function cadastrarArtista(nome, estiloMusical, diasDisponiveis) {
    listaArtistas.push({
        nome: "Emicida",
        estiloMusical: "Rap",
        diasDisponiveis: ["sexta-feira", "sabado"]
    });
}

cadastrarArtista();


console.log(listaArtistas);
console.log(listaArtistas.length);


