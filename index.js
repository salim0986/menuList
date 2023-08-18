let addBtn = document.getElementById('add');
let inputMenu = document.getElementById('inputmenu');
let main = document.querySelector('main');
addBtn.addEventListener('click', input)

function input(e) {

    let writtenValue = e.target.value;
    writtenValue = inputMenu.value;
    let newSec = document.createElement('section');
    newSec.className = "container added";

    newSec.innerHTML = `  
            <h4>${writtenValue}</h4>
            <div class="btn-container">
                <a class="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></a>
                <a class="remove"><i class="fa-solid fa-trash fa-lg"></i></a>
            </div>
            `
    let input = this.previousSibling.previousSibling;
    let str = this.previousSibling.previousSibling.value;
    if (str !== '') {

        main.appendChild(newSec);
        input.value = '';
    } else {

        input.style.backgroundColor = 'red';
        setTimeout(function() {
            input.style.backgroundColor = 'white'
        }, 400)
    }


    let delBtn = document.querySelectorAll('.remove');
    delBtn.forEach(elem => elem.addEventListener('click', deleter));

    let editBtn = document.querySelectorAll('.edit');
    editBtn.forEach(elem => elem.addEventListener('click', editer))
};

inputMenu.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {
        let writtenValue = e.target.value
        writtenValue = inputMenu.value;
        let newSec = document.createElement('section');
        newSec.innerHTML = `  <section class="container   added">
                <h4>${writtenValue}</h4>
                <div class="btn-container">
                    <a class="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></a>
                    <a class="remove"><i class="fa-solid fa-trash fa-lg"></i></a>
                </div>
            </section>                        
                `

        main.appendChild(newSec);
        this.value = ''


    }
});

function deleter() {
    (this.parentElement.parentElement.parentElement).remove()
}

function editer(e) {
    let h4 = e.target.parentElement.parentElement.previousSibling.previousSibling.innerHTML;
    e.target.parentElement.parentElement.parentElement.innerHTML =
        `    <input type="text" value="${h4}" class="edited"></input>
                <div class="btn-container">
                    <a class="update"><i class="fa-solid fa-right-long fa-xl"></i></a>
                </div>
                `
    let updateBtn = document.querySelectorAll('.update');
    updateBtn.forEach(elem => elem.addEventListener('click', function(e) {
        let newValue = e.target.parentElement.parentElement.previousSibling.previousSibling.value;
        let html = e.target.parentElement.parentElement.parentElement;

        html.innerHTML = `
                <h4>${newValue}</h4>
                <div class="btn-container">
                    <a class="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></a>
                    <a class="remove"><i class="fa-solid fa-trash fa-lg"></i></a>
                `
        let editBtn = html.lastChild.children[0];
        let deleteBtn = html.lastChild.children[1];
        editBtn.addEventListener('click', editer)
        deleteBtn.addEventListener('click', deleter)


    }))

}
