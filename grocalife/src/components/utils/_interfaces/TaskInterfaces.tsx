
export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    createdin: number[];
    duedate: number[];
    duration: [number, string]
    timespent: [number, string]

    showData: () => { id: number; title: string; description: string; status: string; createdin: number[]; duedate: number[]; duration: [number, string]; timespent: [number, string]; }
    startTask: (time: number[]) => void
    setTitle: (newData : string) => void
    setDescription: (newData : string) => void
    setTimeSpent: (duration: [number, string]) => void
}