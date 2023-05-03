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

function generateTaskForm() {
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fields = [
        'Name:<input type="text" autocomplete="off">',
        'Due date:<input type="date"></input>',
        'Notes:<textarea autocomplete="off"></textarea>',
        'Importance:<select name="importance"><option value="high" selected>High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
    ];
    fields.forEach(field => {
        const label = document.createElement('label');
        label.innerHTML = field;
        form.appendChild(label);
    });

    appendBtns(form);
}

function generateEventForm() {
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fields = [
        'Name:<input type="text" autocomplete="off">',
        'Due date:<input type="date"></input>',
        'Location:<input type="text" autocomplete="off">',
        'Notes:<textarea autocomplete="off"></textarea>',
        'Importance:<select name="importance"><option value="high" selected>High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
    ];
    fields.forEach(field => {
        const label = document.createElement('label');
        label.innerHTML = field;
        form.appendChild(label);
    });

    const times = document.createElement('div');
    const timeFields= ['Start time:', 'End time:'];
    timeFields.forEach(time => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'time');
        label.textContent = time;
        label.appendChild(input);
        times.appendChild(label);
    });

    const location = form.querySelector('label:nth-child(3)');
    form.insertBefore(times, location);

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
    fields.forEach(field => {
        const label = document.createElement('label');
        label.innerHTML = field;
        form.appendChild(label);
    });

    appendBtns(form);
}

function appendBtns(form) {
    const btns = document.createElement('div');
    const close = document.createElement('button');
    const reset = document.createElement('button');
    const submit = document.createElement('button');

    const btnNames = ['Close','Clear', 'Submit'];
    const btnIds = ['close', 'reset', 'submit'];
    const btnAttr = ['formmmethod', 'type', 'type'];
    const btnAttrVal = ['dialog', 'reset', 'submit'];

    [close, reset, submit].forEach((btn, i) => {
        btn.textContent = btnNames[i];
        btn.setAttribute('id', btnIds[i]);
        btn.setAttribute(btnAttr[i], btnAttrVal[i]);
        btns.appendChild(btn)
    });
    form.appendChild(btns);
}