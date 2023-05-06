import { createForm, createDateTimeDiv } from './forms.js';

export function changeForm(e) {
    const type = e.target.value;
    switch (type) {
        case 'task':
            generateTaskForm();
            break;
        case 'event':
            generateEventForm();
            break;
        case 'reminder':
            generateReminderForm();
            break;
    }
}

export function generateTaskForm() {
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fields = [
        'Name:<input type="text" autocomplete="off">',
        'Due date:<input type="date"></input>',
        'Notes:<textarea autocomplete="off"></textarea>',
        'Importance:<select name="importance"><option value="high" selected>High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
    ];
    const fragment = createForm(fields);
    form.appendChild(fragment);

    form.querySelector('input[type="date"]').defaultValue = new Date().toISOString().slice(0, 10);
}

function generateEventForm() {
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fields = [
        'Name:<input type="text" class="vert-flex" autocomplete="off">',
        'Location:<input type="text" class="vert-flex" autocomplete="off">',
        'Notes:<textarea autocomplete="off"></textarea>',
        'Importance:<select name="importance"><option value="high" selected>High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
    ];
    const fragment = createForm(fields);
    form.appendChild(fragment);

    const start = createDateTimeDiv('Start date:', 'Start time:', '00:00');
    const end = createDateTimeDiv('End date:', 'End time:', '23:59');

    const location = form.querySelector('label:nth-child(3)');
    form.insertBefore(start, location);
    form.insertBefore(end, location);
}

function generateReminderForm() {
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fields = [
        'Name:<input type="text" autocomplete="off">',
        'Notes:<textarea autocomplete="off"></textarea>',
        'Importance:<select name="importance"><option value="high" selected>High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
    ];
    const fragment = createForm(fields);
    form.appendChild(fragment);
}