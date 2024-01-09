 // this function is created to add item to list
 function displayDate(){
    let date =new Date()
    date = date.toString().split("")
    document.querySelector('#date').innerHTML = date[1] +" " + date[2] +" " +date
 } 
 
 window.onload = function(){}
 function addItem(){
    var a = document.getElementById('list');
    var task = document.getElementById('task')
    var li = document.createElement('li')
    li.setAttribute('id',task.value);

    li.appendChild(document.createTextNode(task.value));
    a.appendChild(li)
    ;

    }

    // this is to remove item from to do list
function deleteItem(){


    var a = document.getElementById('list');
    var task = document.getElementById('task')
    var item = document.getElementById(task.value);
    var result = confirm('Are you sure you want to delete?');
    a.removeChild(item);



    
};