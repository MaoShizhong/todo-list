export function createForm(fields) {
    const fragment = document.createDocumentFragment();

    fields.forEach(field => {
        const label = document.createElement('label');
        label.innerHTML = field;
        fragment.appendChild(label);
    });

    appendBtns(fragment);

    return fragment;
}

export function createDateTimeDiv(date, time, defaultTime) {
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

function appendBtns(fragment) {
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
    fragment.appendChild(btns);
}