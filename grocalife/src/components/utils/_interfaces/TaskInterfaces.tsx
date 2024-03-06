
export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    createdin: number[];
    duedate: number[];

    showData: () => { id: number; title: string; description: string; status: string; createdin: number[]; duedate: number[]; }
    startTask: (time: number[]) => void
    setTitle: (newData : string) => void
    setDescription: (newData : string) => void
    setStatus: (newTask : 'not-started' | 'in-progress' | 'completed' | 'blocked' | 'archived') => void
}