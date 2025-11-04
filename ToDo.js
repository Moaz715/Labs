

const addBtn = document.getElementById('addBtn');

const todos = []

i = 0

const activeBtn = document.getElementById('active');
activeBtn.addEventListener('click', ()=>display('Active'));

const completeBtn = document.getElementById('completed');
completeBtn.addEventListener('click', ()=>display('Completed'));

const allBtn = document.getElementById('all');
allBtn.addEventListener('click', ()=>display('All'))




addBtn.addEventListener('click', function () {

    const inputToDo = document.getElementById('addInput');

    todos.push({
        id: i,
        todo: inputToDo.value,
        state: 'Active'
    })

    i++;

    display();
});

function display(filter = 'All') {

    const list = document.getElementById('items');
    list.innerHTML = '';
    let items = [];
    if(filter === 'All'){
        items = todos;
    }else{
        items = todos.filter((item)=>{
            return item.state === filter
        })
    }

    for (let i = 0; i < items.length; i++) {

        let divItem = document.createElement('div');
        let li = document.createElement('li');
        let btn = document.createElement('button');
        let stateBtn = document.createElement('button');

        btn.textContent = 'Remove';
        stateBtn.textContent = items[i].state
        li.textContent = items[i].todo;


        stateBtn.addEventListener('click', function (index){
            if (items[i].state === 'Active') {
                items[i].state = 'Completed';
                stateBtn.textContent = 'Completed';
            } else {
                items[i].state = 'Active';
                stateBtn.textContent = 'Active';
            }
        })

        btn.addEventListener('click', function (index) {
            todos.splice(index, 1);
            display()
        })

        divItem.appendChild(li);
        divItem.appendChild(btn);
        divItem.appendChild(stateBtn);
        list.appendChild(divItem);


    }

}
