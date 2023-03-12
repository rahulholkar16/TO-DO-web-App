const main_taskTEXT = document.querySelector("#input_box");
HTMLADD();

let task = [];
let Data = JSON.parse(localStorage.getItem("task"));
if(Data != null){
    task = Data;
}

const main_taskBtn = document.querySelector(".addTask_btn");


main_taskBtn.addEventListener("click",() => {

    main(task);
    HTMLADD();

});

function main (task) {
    // SAVE DATA IN LOCAL STORAGE
    let input_value = main_taskTEXT.value;
    if(input_value.trim()!=0){
        task.push(main_taskTEXT.value);
        localStorage.setItem("task", JSON.stringify(task));
        main_taskTEXT.value = "";
    }
    
};



function HTMLADD () {

    const container = document.body.getElementsByClassName("container")[0];
    let task_arr = JSON.parse(localStorage.getItem("task"));
    let HTML = '';
    task_arr.forEach((element, index) => {

        HTML += `
                <div class="task">
                    <p class="p task_text" id="">${element}</p>
                    <input type="text"  class="task_text hidden" id="input">
                    <button class="edit_btn btn" onclick="edit(${index})">EDIT</button>
                    <button class="del_btn btn" onclick="deleat(${index})">DELETE</button>
                </div> `

    });
    
    container.innerHTML = HTML;

}

function edit(index){

    let task_arr = JSON.parse(localStorage.getItem("task"));
    main_taskTEXT.value = task_arr[index];
    const type_box = document.getElementById("typebox");
    type_box.value = index;

    const addTask_btn = document.querySelector(".addTask_btn");    
    const save_btn = document.querySelector(".save_btn");
    addTask_btn.classList.add("hidden");    
    save_btn.classList.remove("hidden");  

}

const save_btn = document.querySelector(".save_btn");
save_btn.addEventListener("click", function () {

    let task_arr = JSON.parse(localStorage.getItem("task"));
    const type_box = document.getElementById("typebox").value;
    task_arr[type_box] = main_taskTEXT.value;
    localStorage.setItem("task", JSON.stringify(task_arr));
    HTMLADD();
    const addTask_btn = document.querySelector(".addTask_btn");
    addTask_btn.classList.remove("hidden");   
    const save_btn = document.querySelector(".save_btn");
    save_btn.classList.add("hidden");  
    main_taskTEXT.value = "";

})

function deleat(index){

    const div_task = document.querySelector(".task");
    div_task.remove();
    let task_arr = JSON.parse(localStorage.getItem("task"));
    task_arr.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(task_arr));
    HTMLADD();

}