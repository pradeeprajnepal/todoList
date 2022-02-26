import { Store } from "./store";

export default class List{
        constructor(detail){
            this.detail=detail
        }
    }

export class UI{

        static dispalyList(){
            const storedList= Store.getTasks();
            const tasks= storedList;

            tasks.forEach((task)=>UI.addItemToList(task));
        }

        static addItemToList(task){
            const list= document.querySelector("#tasks");

            const row= document.createElement("div");
            row.classList.add("row", "mt-1");

            const inputWrap=document.createElement("div");
            inputWrap.classList.add("col-sm-8");
            inputWrap.setAttribute("id","list-content");

            const input=document.createElement("input");
            input.classList.add("form-control");
            input.setAttribute("type","text");
            input.setAttribute("value",task.detail);
            input.setAttribute("id","list-input");
            input.setAttribute("readonly","readonly");

            inputWrap.appendChild(input);
            row.appendChild(inputWrap);

            const btnWrap= document.createElement("div");
            btnWrap.classList.add("col-sm-4");
            btnWrap.setAttribute("id","list-btns");

            const btnEdit= document.createElement("button");
            btnEdit.classList.add("btn", "btn-info", "edit");
            btnEdit.setAttribute("id","edit");
            btnEdit.innerHTML=`Edit`;

            const btnDlt=document.createElement("button");
            btnDlt.classList.add("btn","btn-danger", "delete");
            btnDlt.setAttribute("id","delete");
            btnDlt.innerHTML=`Delete`;

            btnWrap.appendChild(btnEdit);
            btnWrap.appendChild(btnDlt);

            row.appendChild(btnWrap);

            list.appendChild(row);
        }

        static showAlert(message, className){
            const div= document.createElement("div");
            div.className =`alert alert-${className} mt-4 col-md-8`;
            div.appendChild(document.createTextNode(message));

            const container= document.querySelector(".container");
            const main= document.querySelector("#main");
            container.insertBefore(div,main);

            setTimeout(()=>document.querySelector(".alert").remove(),1200)
        }

        static clearFields(){
            const input= document.querySelector("#form-input");
            input.value="";
        }

        static removeItem(el){
            if(el.classList.contains("delete")){
                el.parentElement.parentElement.remove();
                UI.showAlert("Task deleted","success")
            }
        }

        static editItem(el){
            if(el.classList.contains("edit")){
                
                const input= document.querySelector("#list-input");
                const edit= document.querySelector("#edit");
                
                if(edit.innerHTML==="Edit"){
                    edit.innerHTML="Save";
                    edit.className=`edit btn btn-success`;
                    input.removeAttribute('readonly');
                    input.focus();
                }else{
                    edit.innerHTML="Edit";
                    edit.className="edit btn btn-info";
                    edit.setAttribute("id","edit");
                    input.setAttribute("readonly","readonly")
                    UI.showAlert("Task edited","success");
                } 
            }
        }
        


    }




