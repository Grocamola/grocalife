

export type CardType = {
    id: number;
    creator: string;
    createdate: [number, number, number];
    dueDate: [number, number, number];
    cardFeature?: 'task' | 'appointment';
}
export enum TaskStatus {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Blocked = 'Blocked',
    Completed = 'Completed',
    Archived = 'Archived'
}