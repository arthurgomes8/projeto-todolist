let ListaTask=document.getElementById("task-list")
let InputTarefa=document.getElementById("task")
let AddTask=document.getElementById("AddTask")

AddTask.addEventListener("click",AdicionarTarefa)
InputTarefa.addEventListener("keypress",AddTarefaEnter)
function AddTarefaEnter(event){
    if(event.key==="Enter"){
        AdicionarTarefa()
    }
}

function AdicionarTarefa(){
    //Verificação de ERRO
    let TextoDigitado=InputTarefa.value.trim()
    let x=TextoDigitado.length
    if (x==0){
        window.alert("[ERRO] Digite algo valido.")
    }

    //Sem erros,vamos começar o codigo
    else{
        //Crio um li,dentro do li jogo a tarefa,e mostro o li como filho de ListaTask(que é um ul)
        let item=document.createElement("li")
        item.textContent=TextoDigitado

        let lixeira=document.createElement("button")
        lixeira.textContent="X"
        lixeira.classList.add("delete")

        item.appendChild(lixeira)
        ListaTask.appendChild(item)
        item.addEventListener("click",TaskDone)
        lixeira.addEventListener("click",DeleteTask)

        //Campo de input vazio e com cursor selecionado
        InputTarefa.value=""
        InputTarefa.focus()
    }
}


function TaskDone(event){
    //Vendo qual item foi clicado para sublinhar
    let ElementoClicado=event.target
    ElementoClicado.classList.toggle("tarefa-concluida")
}

function DeleteTask(event){
    //Vendo qual lixeira foi clicada,depois qual seu pai (que no caso é um li) depois apagando seu pai
    let botaoClicado = event.target
    let tarefaCompleta = botaoClicado.parentElement
    tarefaCompleta.remove()
}