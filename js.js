const frm = window.document.querySelector("form")
const btn = window.document.querySelector("button")
const list = window.document.querySelector(".list_erro")

/*Capturando os elementos pelo seu ID para alterar a cor dos elementos da lista dinamicamente atráves do atributo class, 
evitando que os outros elemento da lista sejam afetados antes que a validação ocorra*/
const list_senha = window.document.querySelector("#list_regra1")
const list_num = window.document.querySelector("#list_regra2")
const list_minus = window.document.querySelector("#list_regra3")
const list_maius = window.document.querySelector("#list_regra4")
const list_simb = window.document.querySelector("#list_regra5")

function contador(campo) {
    const senha = campo.value
    const temNum = senha.match(/[0-9]/g)
    const temMinus = senha.match(/[a-z]/g)
    const temMaius = senha.match(/[A-Z]/g)
    const temEspeciais = senha.match(/\W/g)


    if (senha.length >= 8) {
        verificacao_sucesso(list_senha)
    } else {
        verificacao_erro(list_senha)
    }

    if (!(temNum == null)) {
        verificacao_sucesso(list_num)
    } else {
        verificacao_erro(list_num)
    }

    if (!(temMinus == null)) {
        verificacao_sucesso(list_minus)
    } else {
        verificacao_erro(list_minus)
    }

    if (!(temMaius == null || temMaius.length < 2)) {
        verificacao_sucesso(list_maius)
    } else {
        verificacao_erro(list_maius)
    }

    if (!(temEspeciais == null)) {
        verificacao_sucesso(list_simb)
    } else {
        verificacao_erro(list_simb)
    }
}

btn.addEventListener("click", (e) => {
    mostrarSenha(e)
})

function mostrarSenha(e) {
    let input = document.querySelector("#inSenha")
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text')
    } else {
        input.setAttribute('type', 'password')
    }

    e.preventDefault()
}

const verificacao_sucesso = (classe) => {
    classe.classList.remove("list_erro");
    classe.classList.add("list_success");
}
const verificacao_erro = (classe) => {
    classe.classList.remove("list_success");
    classe.classList.add("list_erro");
}
