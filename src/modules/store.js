export class Store{
    static getTasks(){
        let tasks;
        if(localStorage.getItem("tasks")===null){
            tasks=[];
        }else{
            tasks=JSON.parse(localStorage.getItem("tasks"));
        }
    }

    static addTask(task){
        let tasks= Store.getTasks();

        tasks.push(task);

        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    static removeTask(el){
        let tasks= Store.getTasks();
        console.log(task.detail, el.value)

        tasks.forEach((task,index)=>{

            if(task.detail===el.value){
                tasks.splice(index,1);
            }

        });

        localStorage.setItem("tasks",JSON.stringify(tasks));

        
    }
}

