const filmes = [
    {
        nome: "o senhor dos anéis",
        resumo: "Anões, elfos, humanos e hobbits, todos unidos para destruir um anel"
    },
    {
        nome: "star wars",
        resumo: "Espaçonaves, sabres de luz e robôs encrenqueiros"
    },
    {
        nome: "titanic",
        resumo: "Um navio, uma porta flutuante e um infeliz acidente envolvendo gelo"
    },
    {
        nome: "101 dálmatas",
        resumo: "Muitos dálmatas, muitos mesmo!"
    }
]

//Quando o usuário digitar o nome do filme corretamente, o input deve ficar verde, e o botão deve ficar enable e verde também, após clicar
//no botão, o resumo deve ser mudado para o próximo filme, e então a verificação acontece novamente com o nome correto sendo o do próximo filme

// 1 etapa: usuario digita o nome do filme e acontece a verificação se o nome do filme está correto, até então o botão deve estar disable

//Deixando o botão disabled
document.getElementById("botao").disabled = true;

//Fazendo com que cada vez que o botão seja pressionado, passe para a próxima pergunta e limpe o input
var perguntaAtual = 0;
var receberInput = document.getElementById("input");
var botaoProximo = document.getElementById("botao");

function proximaPergunta() {
    document.getElementById("input").value = "";
    receberInput.classList.remove("valid");
    botaoProximo.classList.remove("valid");

    if (perguntaAtual < filmes.length - 1) {
        perguntaAtual++;
    } else {
        alert("Parabéns, você chegou ao final, em breve adicionarei mais perguntas para testar seus conhecimentos")
        perguntaAtual = 0;
    }
    document.getElementById("resumoDoFilme").textContent = filmes[perguntaAtual].resumo;
    document.getElementById("botao").disabled = true;
}

//Verificando se o que o usuário digitou é igual ao nome correto do filme
function verificarTexto(filmeDigitado) {
    var filmeCorreto = filmes[perguntaAtual].nome;
    filmeDigitado = filmeDigitado.toLowerCase();

    if (filmeDigitado === filmeCorreto) {
        receberInput.classList.toggle("valid");
        botaoProximo.classList.toggle("valid");
        document.getElementById("botao").disabled = false;
    } else {
        receberInput.classList.remove("valid");
        botaoProximo.classList.remove("valid");
        document.getElementById("botao").disabled = true;
    }
}

document.getElementById("resumoDoFilme").textContent = filmes[perguntaAtual].resumo;