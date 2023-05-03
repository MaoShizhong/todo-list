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
    appendLabels(fields, form);

    form.querySelector('input[type="date"]').defaultValue = new Date().toISOString().slice(0, 10);

    appendBtns(form);
}

function generateEventForm() {
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fields = [
        'Name:<input type="text" autocomplete="off">',
        'Location:<input type="text" autocomplete="off">',
        'Notes:<textarea autocomplete="off"></textarea>',
        'Importance:<select name="importance"><option value="high" selected>High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
    ];
    appendLabels(fields, form);

    const start = createDateTimeDiv('Start date:', 'Start time:', '00:00');
    const end = createDateTimeDiv('End date:', 'End time:', '23:59');

    const location = form.querySelector('label:nth-child(3)');
    form.insertBefore(start, location);
    form.insertBefore(end, location);

    appendBtns(form);
}

function generateReminderForm() {
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fields = [
        'Name:<input type="text" autocomplete="off">',
        'Notes:<textarea autocomplete="off"></textarea>',
        'Importance:<select name="importance"><option value="high" selected>High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
    ];
    appendLabels(fields, form);

    appendBtns(form);
}

function appendLabels(fields, form) {
    fields.forEach(field => {
        const label = document.createElement('label');
        label.innerHTML = field;
        form.appendChild(label);
    });
}

function createDateTimeDiv(date, time, defaultTime) {
    const dateField = document.createElement('div');
    const inputTypes = ['date', 'time'];
    

    [date, time].forEach((arg, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', inputTypes[i]);
        label.textContent = arg;

        input.defaultValue = (arg === date) ? new Date().toISOString().slice(0, 10)
                                            : defaultTime;

        label.appendChild(input);
        dateField.appendChild(label);
    });

    return dateField;
}

function appendBtns(form) {
    const btns = document.createElement('div');
    const close = document.createElement('button');
    const reset = document.createElement('button');
    const submit = document.createElement('button');

    const btnNames = ['Close','Clear', 'Submit'];
    const btnIds = ['close-modal', 'reset', 'submit'];
    const btnAttrVal = ['button', 'reset', 'submit'];

    [close, reset, submit].forEach((btn, i) => {
        btn.textContent = btnNames[i];
        btn.setAttribute('id', btnIds[i]);
        btn.setAttribute('type', btnAttrVal[i]);
        btns.appendChild(btn)
    });

    const modal = document.querySelector('#add-item-modal');
    btns.querySelector('#close-modal').addEventListener('click', () => modal.close());
    form.appendChild(btns);
}