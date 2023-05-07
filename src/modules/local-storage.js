import { Task } from './tasks.js';
import { Event } from './events.js';
import { Reminder } from './reminders.js';
import { entries } from './entry-factory.js';
import { addEntryToDisplay } from './display-control.js';

export function populateStorage() {
    localStorage.setItem('entries', JSON.stringify(entries));
}

export function displayListItemsFromStorage() {
    const listItems = JSON.parse(localStorage.getItem('entries'));
    listItems.forEach(item => {
        const constructorArgs = [...Object.values(item)].slice(0, -1);

        switch (item.category) {
            case 'Task':
                entries.push(new Task(...constructorArgs));
                break;
            case 'event':
                entries.push(new Event(...constructorArgs));
                break;
            case 'reminder':
                entries.push(new Reminder(...constructorArgs));
                break;
        }

        const entry = entries[entries.length - 1];
        addEntryToDisplay(entry, entries.indexOf(entry));
    });
}