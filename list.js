let input = document.getElementById("inp");
let checkpoint = document.getElementById("check");
let toDoList = [];


function handleKeyPress(ele) {
    if (ele.key === 'Enter') {
        lists();
    }
}

input.addEventListener('keypress', handleKeyPress);

function lists() 
{
    
    if (input.value === '') 
    {
        alert("kuch likh toh pehle!");
    }
    else 
    {
        
        let data = {
            name: input.value,
            checked: false
        }
        toDoList.push(data);
    }

    input.value = '';
    saveData();
    ShowData();
}

function saveData() {
    localStorage.setItem("data", JSON.stringify(toDoList));
}

(function() {
    let data = localStorage.getItem('data');
    if (data) {
        toDoList = JSON.parse(data);
    }
})();

function ShowData() {
  
    checkpoint.innerHTML = '';
    for (const i in toDoList) {
        let to_do_box = document.createElement("li")
        to_do_box.classList.add("list-group-item");

        // if (toDoList[i].checked) {
            to_do_box.innerHTML = `<input type="checkbox" class="form-check-input box" onclick="checkthis(${i})
            "${toDoList[i].checked ? 'checked': ''}> <span ${toDoList[i].checked ? 'style="text-decoration: line-through"' : ''}>
            ${toDoList[i].name}</span> <button onclick="deletethis(${i})" class="btn btn-outline-danger btn-sm close">X</button>`;
        // } else {
            // to_do_box.innerHTML = `<input type="checkbox" class="box" onclick="checkthis(${i})"> ${toDoList[i].name} <button onclick="deletethis(${i})" class="close">X</button>`;
        // }          

        // to_do_box.innerHTML = `<input type="checkbox" class="box" onclick="checkthis(${i})"> ${toDoList[i].name} <button onclick="deletethis(${i})" class="close">X</button>`;
        checkpoint.appendChild(to_do_box);
        
        
    }
}
ShowData();

function deletethis(index) {
    const data = toDoList[index];
    // console.log(toDoList, data);
    toDoList.splice(index, 1);
    saveData();
    ShowData();
}

function checkthis(index){
    const toDoItem = toDoList[index];
    toDoItem.checked = !toDoItem.checked
    saveData();
    ShowData();
}




  // if (localStorage.getItem("data")) {
    //     toDoList = JSON.parse(localStorage.getItem("data"));
    //     toDoList.forEach(function (item) {
    //         checkpoint.innerHTML += item;
    //     });
    // }
// to_do_box.addEventListener("click", function (el) {
    // if ([...index.target.classList].includes('box')) {
        // this.classList.toggle("done")
//         saveData();
//     }            
// });

//     // localStorage.setItem('user', JSON.stringify("arr"));
//     // const userData = JSON.parse(localStorage.getItem('user'));

//     // function saveData() {
//     //     localStorage.setItem("data", checkpoint.innerHTML);
//     // }
    
//     // function showData() {
//     //     if (localStorage.getItem("data")) {
//     //         checkpoint.innerHTML = localStorage.getItem("data");
//     //     }
//     // }
    
//     // showData();


// // checkpoint.addEventListener('click',function(ele){
// //     if([...ele.target.classList].includes('box')){
// //         ele.target.classList.toggle.style.text_decoration ="line_through";
// //     }
// // })
// // checkpoint.addEventListener("click", function (event) {
// //     if ([...event.target.classList].includes('close')) {
// //         event.target.parentElement.remove();
// //     } else if (event.target.classList.contains('box')) {
// //         event.target.classList.toggle("to-do");
// //     }
// // });


