import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { title } from 'process';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskservice:TasksService){}
    
    @Get()
    getAllTask():Task[]{
        return this.taskservice.getAllTask()
    }

    @Post()
    createTask(@Body('title') title:string , @Body('dec') dec:string):Task{
        return this.taskservice.createTask(title,dec)
    }

    @Get('/:id')
    getTaskByID(@Param('id') id:string):Task{
        return this.taskservice.getTaskByID(id)
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string){
        this.taskservice.deleteTask(id)
        return `Task Delete Complete : ${id} `
    }
    @Patch('/:id')
    updateTask(@Param('id') id:string,
    @Body('status') status:TaskStatus){
        
        return this.taskservice.updateTask(id,status)
    }
}
