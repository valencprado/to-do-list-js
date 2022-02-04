// pegando elementos do documento
let inputNovaTarefa = document.querySelector('#inputNomeTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefa = document.querySelector('#listaTarefa')
let janelaEdicao = document.querySelector('#janelaEdicao')
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo')
let janelaEdicaoBtnFechar = document.querySelector('#janelaEdicaoBtnFechar')
let btnAtualizarTarefa = document.querySelector('#btnAtualizarTarefa')
let idTarefaEdicao = document.querySelector('#idTarefaEdicao')
let inputTarefaNome = document.querySelector('#inputTarefaNome')

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

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
    alternarJanelaEdicao()
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

btnAtualizarTarefa.addEventListener('click', (e) => {
    e.preventDefault()
    let idTarefa = idTarefaEdicao.innerHTML.replace('#', '')
    let tarefa = {
        nome: inputTarefaNome.value,
        id: idTarefa
    }
    let tarefaAtual = document.getElementById('' + idTarefa + '')

    if (tarefaAtual) {
        let li = criarTagLi(tarefa)
        listaTarefa.replaceChild(li, tarefaAtual)
        alternarJanelaEdicao()
    } else {
        alert('Elemento não encontrado!')
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

    li.id = tarefa.id
        // criando id para a tarefa


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
    let li = document.getElementById('' + idTarefa + '')
    if (li) {
        idTarefaEdicao.innerHTML = '#' + idTarefa
        inputTarefaNome.value = li.innerText
        alternarJanelaEdicao()
    } else {
        alert('Elemento não encontrado!')
    }
}

function excluir(idTarefa) {
    let confirm = window.confirm('Tem certeza que deseja excluir? ')

    if (confirm) {
        let li = document.getElementById('' + idTarefa + '')
        if (li) {
            listaTarefa.removeChild(li)
        }
    }
}

function alternarJanelaEdicao() {
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}