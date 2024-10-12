function classificarHeroi(nome, experiencia) {
    let nivel;

    switch (true) {
        case (experiencia < 1000):
            nivel = "Ferro";
            break;
        case (experiencia <= 2000):
            nivel = "Bronze";
            break;
        case (experiencia <= 5000):
            nivel = "Prata";
            break;
        case (experiencia <= 7000):
            nivel = "Ouro";
            break;
        case (experiencia <= 8000):
            nivel = "Platina";
            break;
        case (experiencia <= 9000):
            nivel = "Ascendente";
            break;
        case (experiencia <= 10000):
            nivel = "Imortal";
            break;
        default:
            nivel = "Radiante";
    }

    return `O Herói de nome ${nome}, tem ${experiencia} de poder e está no nível de ${nivel}`;
}

function gerarXP() {
    return Math.floor(Math.random() * 12000);
}

const nomes = ["Guerreiro", "Mago", "Arqueiro", "Paladino", "Ladrão", "Feiticeiro", "Bárbaro"];

for (let i = 0; i < nomes.length; i++) {
    const experiencia = gerarXP();
    const resultado = classificarHeroi(nomes[i], experiencia);
    console.log("+--> " + resultado + ".");
}
