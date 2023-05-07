import { Task } from './tasks.js';
import { Event } from './events.js';
import { Reminder } from './reminders.js';
import { generateTaskForm } from './type-changer.js';
import { addEntryToDisplay } from './display-control.js';
import { populateStorage } from './local-storage.js';

export const entries = [];

export function createNewEntry(e) {
    e.preventDefault();
    const formValues = [];

    const formInputs = e.target.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => formValues.push(input.value));

    const type = document.querySelector('#type-selector');
    switch (type.value) {
        case 'task':
            entries.push(new Task(...formValues));
            break;
        case 'event':
            entries.push(new Event(...formValues));
            break;
        case 'reminder':
            entries.push(new Reminder(...formValues));
            break;
    }

    const entry = entries[entries.length - 1];
    addEntryToDisplay(entry, entries.indexOf(entry));

    // reset form but retain default date/time values
    // e.preventDefault();
    closeAndResetForm(type);

    populateStorage();
}

function closeAndResetForm(typeSelector) {
    generateTaskForm();
    typeSelector.selectedIndex = 0;
    document.querySelector('#add-item-modal').close();
}

export function updateDataIndexes(divs, i) {
    divs.forEach(div => {
        const index = Number(div.dataset.index);
        if (index > i) {
            div.dataset.index = index - 1;
        }
    });
}