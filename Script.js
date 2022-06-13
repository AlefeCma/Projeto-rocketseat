const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]
const pergunta = document.querySelector("#pergunta")
const resposta = document.querySelector("#resposta")
//gerar numero aleatorio



function fazerPergunta() {
    if (pergunta.value == "") {
        window.alert("digite sua pergunta")
        return
    } else {
        const nmrrespostas = respostas.length
        const nmraleatorio = Math.floor(Math.random() * nmrrespostas)
        resposta.innerHTML = respostas[nmraleatorio]
    }
    setTimeout(function () { resposta.style.opacity = 0;
        pergunta.value = ""}, 3000)
    }