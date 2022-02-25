import List from "./ui";
import { UI } from "./ui";

function removeItem(){
    document.querySelector("#tasks").addEventListener("click",(e)=>{
        UI.removeItem(e.target);

        
    })
}

export default removeItem;