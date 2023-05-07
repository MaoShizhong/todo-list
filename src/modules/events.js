export class Event {
    constructor(name, location, startDate, startTime, endDate, endTime, notes, importance) {
        this.name = name;
        this.location = location;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.notes = notes;
        this.importance = importance;
    }

    updateDetails(name, location, startDate, startTime, endDate, endTime, notes, importance) {
        this.name = name;
        this.location = location;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.notes = notes;
        this.importance = importance;
    }
}