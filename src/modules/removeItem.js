import List from "./ui";
import { UI } from "./ui";
import { Store } from "./store";

function removeItem(){
    document.querySelector("#tasks").addEventListener("click",(e)=>{
        UI.removeItem(e.target);
   
        Store.removeTask(e.target.parentElement.previousElementSibling.children)
    })

}

export default removeItem;