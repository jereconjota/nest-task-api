import { Body, Controller, Delete, Get, Post, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor( private tasksService: TasksService ) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) {
        console.log( 'newTask', newTask );
        return this.tasksService.creteTask( newTask.title, newTask.description );
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask( id );
        return { message: `Task with id ${id} deleted` };
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: Partial<UpdateTaskDto>) {
        return this.tasksService.updateTask( id, updateFields );
    }
}
