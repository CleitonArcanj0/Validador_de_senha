const frm =  window.document.querySelector("form")

function contador(campo){
    const senha = campo.value
    const temNum = senha.match(/[0-9]/g)
    const temMinus = senha.match(/[a-z]/g)
    const temMaius = senha.match(/[A-Z]/g)
    const temEspeciais = senha.match(/\W/g)
    

    window.document.getElementById("contador").innerText = senha.length;
    
    if(senha.length == 15){
        document.querySelector("#pContador").style.color = "red"
    }

    if(senha.length > 8){
        document.getElementById("list_regra1").style.color = "#48f115f8"
    } else{
        document.getElementById("list_regra1").style.color = '#f33e08f8'
    }

    if(temNum == null){
        document.getElementById("list_regra2").style.color = '#f33e08f8'
    }else{
        document.getElementById("list_regra2").style.color = "#48f115f8"
    }
    
    if(temMinus == null){
        document.getElementById("list_regra3").style.color = '#f33e08f8'
    }else{
         document.getElementById("list_regra3").style.color = "#48f115f8"
    }


    if(temMaius == null || temMaius.length < 2){
        document.getElementById("list_regra4").style.color = '#f33e08f8'

    }else{
        document.getElementById("list_regra4").style.color = "#48f115f8"
    }

    if(temEspeciais == null){
        document.getElementById("list_regra5").style.color = '#f33e08f8'   
    }else{
        document.getElementById("list_regra5").style.color = "#48f115f8"
    }
}
