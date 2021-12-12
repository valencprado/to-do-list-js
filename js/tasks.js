//recuperando pelo ID os elementos do HTML
let InputNewTask = document.querySelector('#InputNewTask');
let btnAddTask = document.querySelector('#btnAddTask');
let TaskList = document.querySelector('#TaskList');

//input funcionando por meio do "enter"
InputNewTask.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let task = {
            name: InputNewTask.value,
            id: gerarId(),
        }
        AddTask('task');
    }

});
//botão 
btnAddTask.addEventListener('click', (e) => {
        let task = {
            name: InputNewTask.value,
            id: gerarId(),


        }
        AddTask('task')
    })
    // identificador único da task
function gerarId() {
    //random() gera o número aleatório e floor()arredonda para um número inteiro
    //número entre 1 e 3000
    return Math.floor(Math.random() * 3000);
}

function AddTask(task) {
    let li = CreateLiTag(task);
    TaskList.appendChild(li);
    InputNewTask.value = '';
}

//criar toda a tag li
function CreateLiTag(task) {
    let li = document.createElement('li');
    li.id = task.id;

    let span = document.createElement('span');
    span.classList.add('TaskText');
    span.innerHTML = task.name;

    let div = document.createElement('div');

    let BtnEdit = document.createElement('button');
    BtnEdit.classList.add('BtnAction')
    BtnEdit.innerHTML = 'Edit';
    BtnEdit.setAttribute('onclick', 'edit(' + task.id + ')');


    let BtnDelete = document.createElement('button');
    BtnDelete.classList.add('BtnAction')
    BtnDelete.innerHTML = 'Delete';
    BtnDelete.setAttribute('onclick', 'delete(' + task.id + ')');

    div.appendChild(BtnEdit);
    div.appendChild(BtnDelete);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function edit(IdTask) {
    alert(IdTask)
}

function Delete(IdTask) {
    alert(IdTask)
}