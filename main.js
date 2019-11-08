// init
const todos = [
    "早起吃早餐",
    "不情願地去上課",
    "心情好的時候翹課",
    "去公司吹冷氣吃零食"
];



showTodos()

function showTodos(){
    let ul = document.getElementById('my-todo');
    let fragment = document.createDocumentFragment()
    for (let i = 0 ; i < todos.length ; i++){
        let li = document.createElement('li');
        li.className = "col-2  d-flex justify-content-between align-self-center  mb-3";
        li.appendChild(document.createTextNode(todos[i]));
        fragment.appendChild(li);
        let trash =document.createElement('button');
        trash.className = 'btn fas fa-trash-alt btn-info ; width:10px ; hight:10px;'
        let btn = trash.id = "del";
        li.appendChild(trash);
        fragment.appendChild(li);
        ul.appendChild(fragment);
        let  list = li.id = "list" ;
    }
}

let show =  document.getElementById('addBtn');
show.addEventListener('click',function(t){
    let newWork = document.getElementById('newTodo').value;
    if(newWork !=''){
        showtodo(t);
        clear(t);
    }
    else{
        alert('請輸入文字');
    }
},false);

let todo=document.getElementById ('my-todo');

todo.addEventListener('click',function(event){
    console.log(event.target.id)
    let parent= document.getElementById('my-todo');
    let child = document.getElementById('del').parentNode;
    if(event.target.id == 'del'){
       parent.removeChild(event.target.parentNode); //需參照父節點
    //    event.target.parentNode.remove() //無需參照父節點
    }
},false);


function showtodo(){
    let ul = document.getElementById('my-todo');
    let nework = document.getElementById('newTodo').value;
    let ll = document.createElement('li');
    ll.className = "col-2  d-flex justify-content-between align-self-center  mb-3";
    ll.appendChild(document.createTextNode(nework));
    let trash =document.createElement('button');
    trash.className = 'btn fas fa-trash-alt btn-info ; width:10px ; hight:10px;'
    let btn = trash.id = "del";
    ll.appendChild(trash);
    ul.appendChild(ll);
    let  list = ll.id = "list" ;
    
}

function clear() {
    document.getElementById("newTodo").value = '';
}
