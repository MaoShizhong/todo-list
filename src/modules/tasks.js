export class Task {
    constructor(name, dueDate, notes, importance) {
        this.name = name;
        this.dueDate = dueDate;
        this.notes = notes;
        this.importance = importance;
        this.category = 'Task';
    }

    updateDetails(name, dueDate, notes, importance) {
        this.name = name;
        this.dueDate = dueDate;
        this.notes = notes;
        this.importance = importance;
    }

    get due() {
        return this.dueDate;
    }

    get dueAsDate() {
        return new Date(this.dueDate);
    }
}