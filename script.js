let msg_erro = document.querySelector('.msg_erro')
let form = document.querySelector('.entrar')
let nome = document.getElementById('inome')
let idade = document.getElementById('iidade')
let titulo = document.querySelector('.titulo')
let titulo_idade = document.querySelector('.titulo_idade')
let bt = document.querySelector('.bt')
let def_din = document.querySelector('.sec_dinheiro')
let sec_compra = document.querySelector('.sec_compras')
let sec_pertences  = document.querySelector('.sec_pertences')
let  sec_viajar = document.querySelector('.sec_viajar')
let div_pertences = document.querySelector('.pertences')
let inpd = document.getElementById('idinheiro')
let dinheiro = Number(inpd.value)
let btn_din = document.querySelector('.bt_din')
let principal  = document.querySelector('.principal')

let car1 = document.querySelector('.car_1')
let car2 = document.querySelector('.car_2')
let car3 = document.querySelector('.car_3')
let cars = [car1,car2,car3]

let viajem1 = document.querySelector('.viajem_1')

/*Compras */
let cars_din = [525000,200000,10000]
let car_name_1 = 'Kuruma'
let car_name_2 = 'Skyline'
let car_name_3 = 'Chevete'
for (let c in cars) {
    cars[c].innerHTML = `${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cars_din[c])}`
}

let pertences = []

let viajem_din = [17355]
viajem1.innerHTML += `<strong>${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(viajem_din[0])}<strong>`



function inicializacao() {
    if (validacao(nome.value,idade.value)) {
        principal.style.padding = '20px'
        form.style.display = 'none'
        bt.style.display = 'flex'
        titulo.innerHTML = `${nome.value}`
        if (Number(idade.value) == 1 ) {
            titulo_idade.innerHTML = `${idade.value} ano`
        }  else {
            titulo_idade.innerHTML = `${idade.value} anos`
        }
        
    } else {
        msg_erro.innerHTML = `[ERRO] Idade ou Nome Inválidos!`
    }

}

function validacao(n,i) {
    if (n.length > 0 && i.length > 0 && Number(i) > 0 && Number(i) < 120) {
        return true
    } else {
        return false
    }
}


function definir_dinheiro() {
    def_din.style.display = 'block'
    sec_compra.style.display = 'none'
    sec_pertences.style.display = 'none'
    sec_viajar.style.display = 'none'
}
function con() {
    btn_din.innerHTML = (`${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inpd.value)}`)
    def_din.style.display = 'none'
}
din = Number(inpd.value)
console.log(din)


function compra() {
    sec_compra.style.display = 'block'
    sec_pertences.style.display = 'none'
    sec_viajar.style.display = 'none'
    def_din.style.display = 'none'
}

function compra_car_1() {
    if (compra_validacao(inpd.value)) {
        alert('Você não tem dinheiro suficiente!')
    } else {
        inpd.value = inpd.value - cars_din[0]
        btn_din.innerHTML = (`${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inpd.value)}`)
        pertences.push(car_name_1)

    }
}

function compra_car_2() {
    if (compra_validacao_2(inpd.value)) {
        alert('Você não tem dinheiro suficiente!')
    } else {
        inpd.value = inpd.value - cars_din[1]
        btn_din.innerHTML = (`${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inpd.value)}`)
        pertences.push(car_name_2)

    }
}

function compra_car_3() {
    if (compra_validacao_3(inpd.value)) {
        alert('Você não tem dinheiro suficiente!')
    } else {
        inpd.value = inpd.value - cars_din[2]
        btn_din.innerHTML = (`${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inpd.value)}`)
        pertences.push(car_name_3)
    }
}

function compra_validacao(d) {
    if (Number(d) < cars_din[0]) {
        return true
    } else {
        return false
    }
}

function compra_validacao_2(d) {
    if (Number(d) < cars_din[1]) {
        return true
    } else {
        return false
    }
}

function compra_validacao_3(d) {
    if (Number(d) < cars_din[2]) {
        return true
    } else {
        return false
    }
}
 

function investir() {
    alert('Em desenvolvimento!')
}


function viajar() {
    sec_viajar.style.display = 'block'
    sec_compra.style.display = 'none'
    sec_pertences.style.display = 'none'
    def_din.style.display = 'none'
}

function pagar_viagem_1() {
    if (viagem_validacao(inpd.value))  {
        alert('Você não tem dinheiro suficiente!')
    } else {
        inpd.value = inpd.value - viajem_din[0]
        btn_din.innerHTML = (`${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inpd.value)}`)

    }
}

function viagem_validacao(d) {
    if  (Number(d) < viajem_din[0])  {
        return  true
    } else {
        return false
    }
}


function meus_pertences() {
    sec_compra.style.display = 'none'
    sec_viajar.style.display = 'none'
    def_din.style.display = 'none'
    div_pertences.innerHTML = ``
    sec_pertences.style.display = 'block'
    for (let c in pertences) {
       
        let per = document.createElement('div')
        per.innerHTML = `${pertences[c]}`
        if  (pertences[c] == 'Chevete') {
            let img_che = document.createElement('img')
            img_che.setAttribute('src','imagens/cheve.webp')
            per.appendChild(img_che)
        }
        if  (pertences[c] == 'Kuruma') {
            let img_che = document.createElement('img')
            img_che.setAttribute('src','imagens/kuru.jpg')
            per.appendChild(img_che)
        }
        if  (pertences[c] == 'Skyline') {
            let img_che = document.createElement('img')
            img_che.setAttribute('src','imagens/sky.jpg')
            per.appendChild(img_che)
        }
        div_pertences.appendChild(per)
       
    }
}
