export function setDue(entry) {
    const currentDate = new Date();
    const due = entry.dueAsDate;

    return isInPast(currentDate, due)   ? 'past'
        :  isSameDay(currentDate, due)  ? 'today'
        :  isSameWeek(currentDate, due) ? 'week'
        :  'future';
}

function isInPast(current, toCheck) {
    current.setHours(0, 0, 0, 0);
    toCheck.setHours(0, 0, 0, 0);
    return toCheck < current;
}

function isSameDay(current, toCheck) {
    return current.toDateString() === toCheck.toDateString();
}

function isSameWeek(current, toCheck) {
    const weekBoundary = current.getDate() + 7;
    current.setDate(weekBoundary);
    return current >= toCheck;
}