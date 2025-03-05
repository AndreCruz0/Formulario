let inputs = document.querySelectorAll("input")
console.log(inputs);
let botao = document.querySelector("button")
console.log(botao)
let paragrafos = document.querySelectorAll(".inativo")
let textArea = document.querySelectorAll("textarea")
botao.addEventListener("click", () => {
    inputs.forEach((input, index) => {
        input.classList.remove("vermelho", "verde")
        if (input.value == "") {
            input.classList.add("vermelho")
        } else {
            input.classList.add("verde")
        }
        paragrafos.forEach((paragrafo) => {
            let =  paragrafo = paragrafos[index]
            paragrafo.classList.remove("ativo", "vermelho")
            if (input.value === "") {
                paragrafo.classList.add("ativo", "vermelho")
            }
        })
    })
    textArea.forEach((textArea, index) => {
        textArea.classList.remove("vermelho", "verde")
        if (textArea.value == "") {
            textArea.classList.add("vermelho")
        } else {
            textArea.classList.add("verde")
        } if (textArea.classList.contains("vermelho") && textArea.value == "") {
            paragrafos[3].classList.add("ativo", "vermelho")
        } else {
            paragrafos[3].classList.remove("ativo", "vermelho")
            paragrafos[3].classList.add("inativo",)
        }
    })
    if (inputs[0, 1, 2].classList.contains("verde") && textArea[0].classList.contains("verde")) {
        confetti({
            particleCount: 500,
            spread: 1500,
            scalar: 2
        })
    }
})
