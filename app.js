class ToDoClass {
    constructor() {
        this.tasks = [
        	{task: 'Go to Dentist', isCompleted: false},
        	{ task: 'Complete 650 projects', isCompleted: false},
        	{ task: 'Complete 500 projects', isCompleted: false}
        ];
        this.loadTasks();
    }

    loadTasks() {
    	let taskHTML = this.tasks.reduce((html, task, index) => html += this.generateTaskHtml(task, index), ''
    	)
    	document.getElementById('taskList').innerHTML = taskHTML;
    }

    generateTaskHtml(task, index) {
    	return `
    		<li class="list-group-item checkbox">
    			<div class="row">
    				<div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
    					<label>
    					<input id="toggleTaskStatus" type="checkbox"
    						onchange="toDo.toogleTaskStatus(${index})" value="" class=""
    						${task.isCompleted ? 'checked' : ''}>
    					</label>
    				</div>
    				<div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isCompleted? 'complete': ''}">${task.task}</div>
                    <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                    	<a class="" href="/" onClick="toDo.deleteTask(event, ${index})">
                    		<i id="deleteTask" data-id="${index}" class="delete-icon glyphicon glyphicon-trash"></i>
                    	</a>
                    </div>
                </div>
            </li>

    	`;
    }
}

let toDo
// window.addEventListener('load', function() {
//     toDo = new ToDoClass();
// })

// Arrow Functions
// 
window.addEventListener("load", () => {
    toDo = new ToDoClass();
})