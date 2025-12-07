const frm =  window.document.querySelector("form")
const resp = window.document.querySelector("h3")

function contador(campo){
    const senha = campo.value
    window.document.getElementById("contador").innerText = senha.length;
    if(senha.length == 15){
        document.querySelector("#pContador").style.color = "red"
    }
}
frm.addEventListener("submit", (e)=>{
    e.preventDefault()  
    const senha =  frm.inSenha.value;
    const temNum = senha.match(/[0-9]/g)
    const temMinus = senha.match(/[a-z]/g)
    const temMaius = senha.match(/[A-Z]/g)
    const temEspeciais = senha.match(/\W/g)
    const tam = senha.length
    const erros = []
    if(tam < 8){
        alert("A senha deve possui 8 a 15 caracteres.")
        frm.inSenha.focus()
        return

    }
    if(temNum == null){
        erros.push("A senha tem que ter no mínimo 1 número")
    }

    if(temMinus == null){
        erros.push("A senha tem que ter no mínimo 1 letra minúscula")
    }

    if(temMaius == null || temMaius.length < 2){
        erros.push("A senha tem que ter no mínimo 1 letra maiúscula")

    }
    if(temEspeciais == null){
        erros.push("A senha tem que ter no mínimo 1 símbolo")
    }

    if(erros.length > 0){
        alert("A senha deve possuir:\n1 letra minúscula\n2 maiúscula\n1 número\n1 caractere especial")
        frm.inSenha.value = ''
        frm.inSenha.focus()
        return
    }

    
    setTimeout(()=>{
        location.reload()
    }, 30000)


})