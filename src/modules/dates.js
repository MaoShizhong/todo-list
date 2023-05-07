export function setDue(entry) {
    const currentDate = new Date();
    const due = entry.dueAsDate;

    return isSameDay(currentDate, due)  ? 'today'
        :  isSameWeek(currentDate, due) ? 'week'
        :  'future';
}

function isSameDay(current, toCheck) {
    return current.toDateString() === toCheck.toDateString();
}

function isSameWeek(current, toCheck) {
    const weekBoundary = current.getDate() + 7;
    current.setDate(weekBoundary);
    return current >= toCheck;
}