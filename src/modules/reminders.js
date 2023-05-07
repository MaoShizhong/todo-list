export class Reminder {
    constructor(name, notes, importance) {
        this.name = name;
        this.notes = notes;
        this.importance = importance;
        this.category = 'Task';
    }
    
    updateDetails(name, notes, importance) {
        this.name = name;
        this.notes = notes;
        this.importance = importance;
    }
}