let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){//O valor "n" vai receber o valor de num.value ao executar o adicionar
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        window.alert(`O valor ${n}, não está entre 1 e 100.`)
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){// -1 significa que n tem esse elemento no array
        window.alert(`O valor já foi adicionado ou inexistente`)
        return true
    }else{
        return false

    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){// O ! antes de Lista e para dizer se o elemento estiver dentro do array = false, se n estiver = true
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` //.TEXT PARA ESCREVAR NA TELA
        lista.appendChild(item)
        res.innerHTML = ''
    }
    num.value ='' //limpar o valor digitado na barra
    num.focus() //pra deixar o campo selecionado
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0] //primeiro valor
        let menor = valores[0] //primeiro valor
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos] //vai somar todos os numeros
            

            if(valores[pos] > maior)
                maior = valores[pos]

            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = parseFloat(soma / tot).toFixed(2)
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. <p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma}. </p>`
        res.innerHTML += `<p>A média da soma de todos os valores é ${media} </p>`
    }
}
