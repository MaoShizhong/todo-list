export function addEntryToDisplay(entry, index) {
    const listItem = document.createElement('div');
    listItem.classList.add('entry');
    listItem.dataset.index = index;
    listItem.dataset.category = entry.constructor.name;
    listItem.dataset.importance = entry.importance;

    listItem.appendChild(createLeftHalf(entry.constructor.name, entry.name, entry.notes));
    listItem.appendChild(createRightHalf(entry));
    listItem.style.borderRight = `0.5em solid var(--${entry.importance})`;

    const list = document.querySelector('#list');
    list.appendChild(listItem);
}

function createLeftHalf(type, name, notes) {
    // render default name heading
    name = (name === '') ? '-' : name;

    const div = document.createElement('div');
    div.classList.add('left');

    const tags = ['h4', 'h4', 'p'];
    const classes = ['category', 'name', 'notes'];
    const contents = [type, name, notes];

    tags.forEach((tag, i) => {
        const el = document.createElement(tag);
        el.classList.add(classes[i]);
        el.textContent = contents[i];
        div.appendChild(el);
    });

    return div;
}

function createRightHalf(entry) {
    const div = document.createElement('div');
    div.classList.add('right');

    const classes = ['details', 'edit', 'delete'];
    const btnNames = ['Details', 'Edit', 'X'];
    btnNames.forEach((name, i) => {
        const btn = document.createElement('button');
        btn.classList.add(classes[i]);
        btn.textContent = name;
        div.appendChild(btn);
    });

    const type = entry.constructor.name;
    if (type === 'Task') {
        appendDateField(div, 'Due: ', entry.dueDate);
    }
    else if (type === 'Event') {
        appendDateField(div, 'Starts: ', entry.startDate);
    }

    return div;
}

function appendDateField(div, heading, date) {
    const ddMMyyyy = `${date.slice(-2)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
    const p = document.createElement('p');
    p.classList.add('due');
    p.innerHTML = `<b>${heading}</b> ${ddMMyyyy}`;

    div.insertBefore(p, div.firstChild);
}