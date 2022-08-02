export interface Task{
    id:string;
    title:string;
    dec:string;
    status: TaskStatus
}

export enum TaskStatus{
    DONE ='DONE',
    IN_PROGRESS='IN PROGRESS',
    OPEN='OPEN'
}