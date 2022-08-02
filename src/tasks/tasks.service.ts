import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
    private tasks:Task[] = [];

    getAllTask():Task[]{
        return this.tasks;
    }

    getTaskByID(id:string):Task{
         return this.tasks.find(task=>task.id===id);
    }


    createTask(title:string,dec:string):Task{
        const id = new Date().toString();
        const task:Task={
            id,
            title,
            dec,
            status:TaskStatus.OPEN
        }
        this.tasks.push(task)
        return task
    }

    deleteTask(id:string){
        this.tasks = this.tasks.filter(task=>task.id !== id)
    }

    updateTask(id:string,taskstatus:TaskStatus):Task{
        let task=this.getTaskByID(id)
        task.status=taskstatus

        return task
    }
}
