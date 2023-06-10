import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';

@Injectable()

export class TasksService {

    // simulate a database
    private tasks: Task[] = [{
        id: 'a6g5sdfg67df5g67df5g7s',
        title: 'Task 1',
        description: 'Description 1',
        status: TaskStatus.PENDING,
    }];

    getAllTasks() {
        return this.tasks;
    }

    getTaskById( id:string ): Task {
        return this.tasks.find( task => task.id === id );
    }
    
    creteTask( title:string, description:string ) {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.PENDING,
        };
        this.tasks.push( task );
        return task;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter( task => task.id !== id );
    }

    updateTask( id:string, updateFields: Partial<Task> ) {
        const task = this.getTaskById( id );
        const newTask = Object.assign( task, updateFields );
        this.tasks = this.tasks.map( task => task.id === id ? newTask : task );
        return newTask;
    }




}
