//capturando a tag com ID e colocando em uma variável var
var pElement = document.getElementById("feedback")

//adicionando um listener de evento para receber informações sobre a opinião do usuário
pElement.addEventListener("click",function(){

    let nome = prompt("Informe seu nome")
    let regiao = prompt("Informe sua região")
    let veiculo = prompt("Você utilizou trem, metrô ou ônibus")

    let linha = "", frota = "";

if (veiculo == "trem" || veiculo == "metrô") {
  linha = prompt("Informe a linha:")
} else if (veiculo == "ônibus") {
  frota = prompt("Informe a frota:")
} else {
  alert("Verifique se escreveu a palavra correta e com os acentos corretos.")
}

let nota = prompt("Nos ajude a melhorar! Escreva uma nota de 0 a 10")
let opiniao = prompt("Caso queira, conte para a gente como foi sua experiência")

// Exibindo as informações recebidas no console
console.log(nome + " da região " + regiao + ", utiliza " + veiculo + " da linha/frota " + linha + " " + frota + ". E nos deu nota: " + nota + ". E escreveu: " + opiniao);

})

// Adicionando eventos e informações ao tópicos de navegação (div)
var b1Element = document.getElementById("nós")

b1Element.addEventListener("click", function(){
    alert("A SmarTech é uma start up focada na implementação da sustentabilidade no cotiadiano do usuário.Utilizamos da tecnologia para implementação de grandes projetos na cidade de São Paulo.") 
    b1Element.style.color = "brown"
})

var b2Element = document.getElementById("sus")

b2Element.addEventListener("click", function(){
    alert("Com a sustentabilidade, podemos suprir as necessidades atuais sem prejudicar o meio ambiente e as futuras gerações. A partir do conceito de desenvolvimento sustentável, pesquisamos formas de aprimorar as técnicas atuais para utilizar dos recursos disponíveis, tendo em consideração a preservação do planeta.") 
    b2Element.style.color = "brown"
})

var b3Element = document.getElementById("tech")

b3Element.addEventListener("click", function(){
    alert("A tecnologia possui um papel importante na sustentabilidade. Podemos usufruir deste recurso para monitoramento do consumo de determinados recursos e pesquisar formas de preservação através da necessidade do usuário. Alguns exemplos da tecnologia na mundo sustentavel são: placas solares, lampadas sensoriais.")
    b3Element.style.color = "brown"
})

var b4Element = document.getElementById("prob")

b4Element.addEventListener("click", function(){
    alert("São Paulo se caracteriza como uma cidade com alta demanda de transportes públicos, sendo estes os responsáveis por 75% da poluição sonora e liberação de gases tóxicos a atmosfera. Como podemos diminuir a poluição causada pelos meios de transporte? Tendo em mente a alta procura e o baixo investimento em tecnologia e pesquisa para adaptação do produto. Nada melhor do que ouvir o usuário do produto, não é mesmo?") 
    b4Element.style.color = "brown"
})

var b5Element = document.getElementById("sol")

b5Element.addEventListener("click", function(){
    alert("Para melhoria da experiência do usuário, nossa plataforma irá disponibilizar as linhas de trem, metrô e ônibus na cidade São Paulo. O usuário terá livre acesso a estas informações e poderá publicar em tempo real, sua opinião sobre o meio que está utilizando, seja sugestões de melhoria, reclamações e elogios. Está proposta foi planejada com o intuito de acolher a população e suas necessidades, de forma que as grandes empresas com investimento em sustentabilidade e qualidade de vida, sejam capazes de implementar novos projetos e melhorias naqueles já existentes.") 
    b5Element.style.color = "brown"
})

var b6Element = document.getElementById("clie")

b6Element.addEventListener("click", function(){
    alert("IBM Brasil - International Business Machines Projeto de Mapeamento em São paulo.") 
    b6Element.style.color = "brown"
})

