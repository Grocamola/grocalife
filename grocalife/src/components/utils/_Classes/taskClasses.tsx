import { Task } from "../_interfaces/TaskInterfaces";

export class Card { 
    id: number;
    title: string;
    description: string;
    status: string;
    createdin: number[];
    duedate: number[];
    duration: [number, string];
    timespent: [number, string]

    constructor(
            id: number, 
            title: string, 
            description: string, 
            status: string, 
            createdin: number[],
            duedate: number[],
            duration: [number, string],
            timespent: [number, string],
        ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdin = createdin;
        this.duedate = duedate;
        this.duration = duration;
        this.timespent = timespent;
    }
    
    showData(): Omit<Task, 'showData' | 'startTask' | 'setTitle' | 'setDescription' | 'setTimeSpent'> { 
        return {
           id: this.id,
           title: this.title,
           description: this.description,
           status: this.status,
           createdin: this.createdin,
           duedate: this.duedate,
           duration: this.duration,
           timespent: this.timespent
        };
   }

    setTitle(newTitle: string) { 
        this.title = newTitle;
    }
    setDescription(newDescription: string) { 
        this.description = newDescription;
    }
    setStatus(newStatus : "not-started" | "in-progress" | "Completed" | "Archived") { 
        this.status = newStatus
    }
    startTask(startTime: number[]) { 
        this.createdin = startTime
    }
    setTimeSpent(duration: [number, string]) { 
        this.timespent = duration
    }

}