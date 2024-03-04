
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

    abstract getCardData (): void;
}

export class TaskCard extends Card {
    protected status: TaskStatus = TaskStatus.NotStarted;
    constructor({ id, creator, createdate, cardFeature = 'task' }: CardType) {
        super({ id, creator, createdate, cardFeature });
    }

    getCardData() {
        console.log({
            id: this._id,
            creator: this._creator,
            createdate: this._createdate,
            cardFeature: this.cardFeature
        });
    }
}

