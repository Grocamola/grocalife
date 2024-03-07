
export type CardType = {
    id: number;
    creator: string;
    createdate: [number, number, number];
    dueDate: [number, number, number];
    cardFeature?: 'task' | 'appointment';
}
enum TaskStatus {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Blocked = 'Blocked',
    Completed = 'Completed',
    Archived = 'Archived'
}


export abstract class Card {
    protected _id: CardType['id'];
    protected _creator: CardType['creator'];
    protected _createdate: CardType['createdate'];
    protected cardFeature : CardType['cardFeature'];
    dueDate: CardType['dueDate']

    constructor({id, creator, createdate, cardFeature, dueDate} : CardType) { 
        this._id = id;
        this._creator = creator;
        this._createdate = createdate;
        this.cardFeature = cardFeature;
        this.dueDate = dueDate
    }

    abstract getCardData (): CardType;
}


export class TaskCard extends Card {
    protected status: TaskStatus = TaskStatus.NotStarted;
    title: string;
    description: string;

    constructor({ id, creator, createdate, cardFeature = 'task', title, description, dueDate }: CardType & {title: string, description: string}) {
        super({ id, creator, createdate, cardFeature, dueDate });

        this.title = title;
        this.description = description;
    }

    getCardData() {
        console.log({
            id: this._id,
            creator: this._creator,
            createdate: this._createdate,
            cardFeature: this.cardFeature,
            status: this.status,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate
        })
        return {
            id: this._id,
            creator: this._creator,
            createdate: this._createdate,
            cardFeature: this.cardFeature,
            status: this.status,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate
        };
        
    }
}

