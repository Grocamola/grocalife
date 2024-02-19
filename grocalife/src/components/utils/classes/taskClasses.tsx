


export class Card { 
    id: number;
    title: string;
    description: string;
    status: string;

    constructor(id: number, title: string, description: string, status: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
    
    get showData() { 
         return {
            "id": this.id,
            "title": this.title,
            "description": this.description,
            "status": this.status
         }
    }

}