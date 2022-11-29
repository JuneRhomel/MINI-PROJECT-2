window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")
    console.log(localStorage)
    form.addEventListener("submit", (e)=> {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            return
        }
        const task_el = document.createElement("div")
        task_el.classList.add("task");

        const task_content_el = document.createElement("div")
        task_content_el.classList.add("content")

        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text");
        task_content_el.appendChild(task_input_el)
        task_input_el.type="type";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly")



        const task_actions_el = document.createElement("div")
        task_actions_el.classList.add("actions")

        // console.log(task_actions_el)

        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML = "delete";
        
        // console.log(task_delete_el)

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)
        
        task_el.appendChild(task_actions_el)
        list_el.appendChild(task_el)
        input.value = ""


        task_edit_el.addEventListener("click", ()=> {

            if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly","readonly")
                task_input_el.focus()
                task_edit_el.innerHTML = "Save"
            } else {
                task_input_el.setAttribute("readonly","readonly")
                task_edit_el.innerHTML = "Edit"
            }

        })

        task_delete_el.addEventListener("click",()=> {
            list_el.removeChild(task_el)
        })
    })
})