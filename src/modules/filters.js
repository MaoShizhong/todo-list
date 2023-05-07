export function filterCategories(e) {
    const entries = document.querySelectorAll(`[data-category="${e.target.name}"]`);
    entries.forEach(entry => {
        if (e.target.checked) {
            entry.classList.remove('category-hidden');
        }
        else {
            entry.classList.add('category-hidden');
        }
    });
}

export function filterImportance(e) {
    const entries = document.querySelectorAll(`[data-importance="${e.target.name}"]`);
    entries.forEach(entry => {
        if (e.target.checked) {
            entry.classList.remove('importance-hidden');
        }
        else {
            entry.classList.add('importance-hidden');
        }
    });
}

export function filterDate(e) {
    const filter = e.target.getAttribute('value');
    switch (filter) {
        case 'all':
            showAllItems();
            break;
        case 'today':
            showTodaysItems();
            break;
        case 'week':
            showThisWeeksItems();
            break;
    }
}

function showAllItems() {
    const entries = document.querySelectorAll('#list>*');
    entries.forEach(entry => entry.classList.remove('due-date-hidden'));
}

function showTodaysItems() {
    const today = document.querySelectorAll('[data-due="today"]');
    const notToday = document.querySelectorAll('#list>*:not([data-due="today"])');
    
    today.forEach(entry => entry.classList.remove('due-date-hidden'));
    notToday.forEach(entry => entry.classList.add('due-date-hidden'));
}

function showThisWeeksItems() {
    const weekSelector = '[data-due="week"], [data-due="today"]';
    const thisWeek = document.querySelectorAll(`${weekSelector}`);
    const notThisWeek = document.querySelectorAll(`#list>*:not(${weekSelector})`);
    
    thisWeek.forEach(entry => entry.classList.remove('due-date-hidden'));
    notThisWeek.forEach(entry => entry.classList.add('due-date-hidden'));
}