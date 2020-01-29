const tasks = {
    tasks:[{
        text:'Grocery Shopping',
        completed:true
    },{
        text:'Clean Yard',
        completed:false
    },{
        text:'Film Course',
        completed:false
    }],
    getTasksToDo(){
        const inCompleteTask = this.tasks.filter((task) =>{
                return task.completed === false
        });
        return inCompleteTask
    }
}

console.log(tasks.getTasksToDo())








