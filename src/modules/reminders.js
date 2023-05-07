export class Reminder {
    constructor(name, notes, importance) {
        this.name = name;
        this.notes = notes;
        this.importance = importance;
        this.category = 'Reminder';
    }
    
    updateDetails(name, notes, importance) {
        this.name = name;
        this.notes = notes;
        this.importance = importance;
    }
}