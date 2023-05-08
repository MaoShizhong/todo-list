import { createForm } from './forms';
import { setDue } from './dates.js';
import { entries, updateDataIndexes } from './entry-factory.js';
import { populateStorage } from './local-storage.js';
import { addTask, addEvent, addReminder } from './form-fields.js';

export function addEntryToDisplay(entry, index) {
    const listItem = document.createElement('div');
    listItem.classList.add('entry');
    listItem.dataset.index = index;
    listItem.dataset.category = entry.category;
    listItem.dataset.importance = entry.importance;
    
    if (entry.category !== 'Reminder') {
       listItem.dataset.due = setDue(entry);  
    }

    listItem.appendChild(createLeftHalf(entry.category, entry.name, entry.notes));
    listItem.appendChild(createRightHalf(entry));
    listItem.style.boxShadow = `-0.5em 0 var(--${entry.importance}) inset`;

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

    const classes = ['details', 'delete'];
    const btnNames = ['Details', 'X'];
    btnNames.forEach((name, i) => {
        const btn = document.createElement('button');
        btn.classList.add(classes[i]);
        btn.classList.add('list-btn');
        btn.textContent = name;
        div.appendChild(btn);
    });

    div.firstChild.addEventListener('click', openDetails.bind(null, entry));
    div.querySelector('.delete').addEventListener('click', deleteItem.bind(null, entry));

    if (entry.category !== 'Reminder') {
        appendDateField(div, entry);
    }

    return div;
}

function appendDateField(div, entry) {
    const ddMMyyyy = convertToDDMMYYYY(entry.due);
    const p = document.createElement('p');
    p.classList.add('due');
    p.innerHTML = `<b>${entry.category === 'Task' ? 'Due:' : 'Starts:'}</b> ${ddMMyyyy}`;

    div.insertBefore(p, div.firstChild);
}

function convertToDDMMYYYY(date) {
    return date === null ? 0 : `${date.slice(-2)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
}

function openDetails(entry) {
    const modal = document.querySelector('#details');
    modal.showModal();

    // tie modal to instance of object
    modal.dataset.item = entries.indexOf(entry);
    
    const form = details.querySelector('form');
    form.replaceChildren();

    const fields = (entry.category === 'Task')  ? addTask
                :  (entry.category === 'Event') ? addEvent
                                                : addReminder;
    const fragment = createForm(fields, modal, entry.category === 'Event');
    form.appendChild(fragment);

    setEntryValues(entry, form);

    const edit = modal.querySelector('#edit');
    edit.addEventListener('click', enableEdit);
}

function setEntryValues(entry, form) {
    const fields = form.querySelectorAll('input, textarea, select');
    const entryValues = [...Object.values(entry)];

    fields.forEach((field, i) => {
        // retain '-' for empty name field only
        field.defaultValue = (entryValues[i] === '' && i === 0) ? '-' : entryValues[i];
        field.disabled = true;
        if (field.tagName === 'SELECT') {
            field.value = entryValues[i];
        }
    });
}

function enableEdit() {
    const inputs = document.querySelector('#details')
                           .querySelectorAll('input, textarea, select');
    inputs.forEach(input => input.disabled = false);

    changeEditBtnToCancelSave();
}

function changeEditBtnToCancelSave() {
    const replacementBtns = document.createDocumentFragment();
    const btns = {'cancel': 'Cancel', 'save': 'Save'};
    for (const id in btns) {
        const button = document.createElement('button');
        button.setAttribute('id', id);
        button.setAttribute('type', 'button');
        button.textContent = btns[id];
        replacementBtns.appendChild(button);
    }

    const btnDiv = document.querySelector('#details>form>div:last-child');
    btnDiv.replaceChild(replacementBtns, btnDiv.lastChild);

    cancel.addEventListener('click', revertDetails);
    save.addEventListener('click', saveUpdatedDetails);
}

function changeCancelSaveToEdit() {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('id', 'edit');
    editBtn.setAttribute('type', 'button');
    editBtn.addEventListener('click', enableEdit);

    const btnDiv = document.querySelector('#details>form>div:last-child');
    btnDiv.removeChild(btnDiv.lastChild);
    btnDiv.replaceChild(editBtn, btnDiv.lastChild);
}

function revertDetails() {
    const fields = document.querySelector('#details')
                           .querySelectorAll('input, textarea, select');
    fields.forEach(field => {
        field.value = field.defaultValue;
        field.disabled = true;
    });

    changeCancelSaveToEdit();
}

function saveUpdatedDetails() {
    const modal = document.querySelector('#details');
    const fields = modal.querySelectorAll('input, textarea, select');
    const fieldValues = Array.from(fields).map(field => field.value);
    const details = [...fieldValues];
    const entry = entries[Number(modal.dataset.item)];

    entry.updateDetails(...details);
    populateStorage();

    fields.forEach(field => {
        field.defaultValue = field.value;
        field.disabled = true;
    });
    changeCancelSaveToEdit();

    updateEntryVisualsInDOM(entry);
}

function updateEntryVisualsInDOM(entry) {
    const index = entries.indexOf(entry);
    const listItem = document.querySelector(`[data-index="${index}"]`);

    const fieldsToUpdate = listItem.querySelectorAll('h4, p');
    const due = entry.category !== 'Reminder' ? entry.due
                                     : null;

    const valuesToInsert = [
        entry.category,
        entry.name,
        entry.notes,
        `<b>${entry.category === 'Task' ? 'Due:' : 'Starts:'}</b> ${convertToDDMMYYYY(due)}`
    ];

    // valuesToInsert[2] will not be read for a Reminder update
    fieldsToUpdate.forEach((field, i) => field.innerHTML = valuesToInsert[i]);
    listItem.style.boxShadow = `-0.5em 0 var(--${entry.importance}) inset`;
    listItem.dataset.importance = entry.importance;
    listItem.dataset.due = entry.category !== 'Reminder' ? setDue(entry) : null;
}

function deleteItem(entry) {
    const i = entries.indexOf(entry);
    const listItems = document.querySelectorAll('.entry');
    entries.splice(i, 1);
    listItems[i].replaceChildren();
    listItems[i].remove();
    updateDataIndexes(listItems, i);
    populateStorage();
}