import List from "./ui";
import  {UI}  from "./ui";
import { Store } from "./store";

function addItems(){


    document.querySelector("#form").addEventListener("submit",(e)=>{
        
        e.preventDefault();
        console.log("submit-clicked")
        const task= document.querySelector("#form-input").value;

        
        
        if(task===""){
            UI.showAlert("Please fill the text-field", "danger")
        }else{
            const item= new List(task);

            UI.addItemToList(item);   

            Store.addTask(item);
            
            UI.showAlert("Task added successfully", "success")

            UI.clearFields();
        }

            
    })
}

export default addItems;