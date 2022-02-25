import { UI } from "./ui";

function editItem(){
    document.querySelector("#tasks").addEventListener("click",(e)=>{
        UI.editItem(e.target);
    })
}

export default editItem;