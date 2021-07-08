let toDo = function Todo () {
    let todoArr = []
    this.create = function () {
        let htmlTodo = ` <h1 class="ToDo">ToDoList</h1>
                        <div class="form">
                            <input id="text"  type="text"  placeholder="Type your task..."><br>
                        </div>
                         <div class='todos'>
                             <ul id='lists'>

                             </ul>
                        </div>`
    let element = document.querySelector('.Application')
    element.innerHTML = htmlTodo

    let input = document.querySelector('#text')
    input.addEventListener('keyup', (event)=>{
        if (event.keyCode == '13') {
            this.add(event.target.value)
            event.target.value=""
        }
    })
   

    }
    this.add = function (task) {
        let todoTask = {
            todo: task,
            flag: true
        }
        todoArr.push(todoTask)
        console.log(todoArr)
        this.show()
    }
    this.delete = function (id) {
        todoArr.splice(id,1);
        this.show()
    }
    this.completeTask = function (id, checked) {
       let item = todoArr.find((i)=>{
        return i.id==id
       })
       item.flag=!checked
       this.show()
    }
    this.show = function () {
        let elementUl = document.querySelector('#lists')
        elementUl.innerHTML = ""
        todoArr.forEach((item,index)=>{
            console.log(item)
            let li = document.createElement('li')
            li.classList.add('lists__li')
            li.innerHTML=`<input  data-id="${index}" class="checkbox"type="checkbox"><span>${item.todo}</span><br>
            <button class="btn__delete" id="${index}">Delete</button>`

            elementUl.appendChild(li)
        })
        let deleteBtn = document.querySelectorAll('.btn__delete')
        deleteBtn.forEach((item, index)=>{
            item.addEventListener('click',(event)=>{
                let id = +event.target.id
                this.delete(id)
                

            })
        })
        let checkboxes = document.querySelectorAll('.checkbox')
        checkboxes.forEach((item, index)=>{
            item.addEventListener('change',(event)=>{
                let checked = event.target.checked
                let id = event.target.getAttribute('data-id')
                this.completeTask(id, checked)
                

            })
        })   
    }

}
window.addEventListener('load',()=>{
    let todo = new toDo()
    todo.create();
})


