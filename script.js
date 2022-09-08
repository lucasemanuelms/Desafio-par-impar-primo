let inpValue = document.getElementById("inpNumber")
let res = document.getElementById("result")

function primo(val){
    cont = 0
    for(let i=0; i <= val; i++){
        if(val % i == 0){
            cont++
        }
    }

    return cont
}

function calcular(){

    if(inpValue.value < 0){
        alert("Número inválido, por favor ponha números positivos.")
        inpValue.value = ''
    }else{
        if(inpValue.value % 2 == 0){

            primo(inpValue.value)
            
            if(cont==2){
                res.innerHTML += `${inpValue.value} é par e primo.<br>`
                inpValue.value = ''
            }else{
                res.innerHTML += `${inpValue.value} é par.<br>`
            inpValue.value = ''
            }

        }else{

            primo(inpValue.value)

            if(cont==2){
                res.innerHTML += `${inpValue.value} é ímpar e primo.<br>`
                inpValue.value = ''
            }else{
                res.innerHTML += `${inpValue.value} é ímpar.<br>`
            inpValue.value = ''
            }

        }
    }

}

function limpar(){
    res.innerHTML = ''
}