
export type CardType = {
    id: number;
    creator: string;
    createdate: [number, number, number];
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
    protected cardFeature : CardType['cardFeature']

    constructor({id, creator, createdate, cardFeature} : CardType) { 
        this._id = id;
        this._creator = creator;
        this._createdate = createdate;
        this.cardFeature = cardFeature
    }

    abstract getCardData (): CardType;
}


export class TaskCard extends Card {
    protected status: TaskStatus = TaskStatus.NotStarted;
    title: string;
    description: string;

    constructor({ id, creator, createdate, cardFeature = 'task', title, description }: CardType & {title: string, description: string}) {
        super({ id, creator, createdate, cardFeature });

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
            description: this.description
        })
        return {
            id: this._id,
            creator: this._creator,
            createdate: this._createdate,
            cardFeature: this.cardFeature,
            status: this.status,
            title: this.title,
            description: this.description
        };
        
    }
}

