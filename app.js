
let form = document.querySelector('form');
let ul = document.querySelector('ul');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if(this.elements[0].value==""){
        return;
    }
    let task = document.createElement('li');
    let btn = document.createElement('button');
    btn.classList.add(".btn");
    btn.innerText = "done";
    task.innerText = this.elements[0].value
    task.appendChild(btn);
    this.elements[0].value = "";
    ul.appendChild(task);
    btn.addEventListener('click',function(){
        let li = this.parentElement;
        li.remove();
    })
});





