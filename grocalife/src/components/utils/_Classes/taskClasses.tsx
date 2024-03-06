import { Task } from "../_interfaces/TaskInterfaces";

export type StatusTypes= {
    taskTypes: 'not-started' | 'in-progress' | 'completed' | 'blocked' | 'archived'
}

export class Card { 
    id: number;
    title: string;
    description: string;
    status: StatusTypes['taskTypes'];
    createdin: number[];
    duedate: number[];

    constructor(
            id: number, 
            title: string, 
            description: string, 
            status: StatusTypes['taskTypes'], 
            createdin: number[],
            duedate: number[],

        ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdin = createdin;
        this.duedate = duedate;

    }
    
    showData(): Omit<Task, 'showData' | 'startTask' | 'setTitle' | 'setDescription' | 'setStatus'> { 
        return {
           id: this.id,
           title: this.title,
           description: this.description,
           status: this.status,
           createdin: this.createdin,
           duedate: this.duedate,
        };
   }

    setTitle(newTitle: string) { 
        this.title = newTitle;
    }
    setDescription(newDescription: string) { 
        this.description = newDescription;
    }
    setStatus(newStatus : StatusTypes['taskTypes']) { 
        this.status = newStatus
    }
    startTask(startTime: number[]) { 
        this.createdin = startTime
    }

}



// -------------------- Robin's Notes --------------------
//interface person { ...., sayHi?: () => void}
// const persons: Person[] = [ ... { ... , sayHi: () => console.log('Hi')}]
//person[0].sayHi?.();
// means if this methos is there, fire it.
