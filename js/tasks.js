// pegando elementos do documento
let inputNovaTarefa = document.querySelector('#inputNomeTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefa = document.querySelector('#listaTarefa')

// evento
inputNovaTarefa.addEventListener('keypress', (e) => {
    // se a tecla clicada for o enter:
    // objeto - dados da tabela
    if (e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa)
    }
})

// evento de clique ao botão
btnAddTarefa.addEventListener('click', (e) => {
    // objeto - dados da tabela
    if (e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa)
    }
})


function gerarId() {
    // criação de um id aleatório para a tarefa
    // número entre 1 e 3000 (random) arrendodado para baixo (floor)
    return Math.floor(Math.random() * 3000)
}
// adicionar tarefa ao documento
function adicionarTarefa(tarefa) {
    // usando a função abaixo
    inputNovaTarefa.value = ''
    let li = criarTagLi(tarefa)
        // adiciona a tag li no documento
    listaTarefa.appendChild(li)

}

// criando a Li
function criarTagLi(tarefa) {
    let li = document.createElement('li')
        // dentro da li -> span, div, dois botões

    //span
    let span = document.createElement('span')
    span.classList.add('textoTarefa')
    span.innerHTML = tarefa.nome

    //div
    let div = document.createElement('div')

    // botões
    let btnEditar = document.createElement('button')
    btnEditar.classList.add('btnA')
    btnEditar.innerHTML = ' <i class="fa fa-pencil"></i>'
    btnEditar.setAttribute('onclick', 'editar(' + tarefa.id + ')')


    let btnExcluir = document.createElement('button')
    btnExcluir.classList.add('btnA')
    btnExcluir.innerHTML = ' <i class="fa fa-trash"></i>'
    btnExcluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')')

    // colocando os buttons na div
    div.appendChild(btnEditar)
    div.appendChild(btnExcluir)

    // colocando tudo no li
    li.appendChild(span)
    li.appendChild(div)
    return li
}

function editar(idTarefa) {

    alert(idTarefa)
}

function excluir(idTarefa) {
    alert(idTarefa)
}