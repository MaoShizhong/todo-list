import { changeForm, generateTaskForm } from './modules/type-changer.js'
import { createNewEntry } from './modules/entry-factory.js';
import { filterCategories, filterImportance, filterDate } from './modules/filters.js';
import { populateStorage, displayListItemsFromStorage } from './modules/local-storage.js';
import './style.css';

// initialise using 'task' as default display type
generateTaskForm();

// create storage or if storage exists, load stored list items
if (!localStorage.getItem('entries')) {
    populateStorage();
}
else {
    displayListItemsFromStorage();
}

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const addItem = document.querySelector('#add-item-modal');
const typeSelector = document.querySelector('#type-selector');
const newEntryForm = document.querySelector('#item-details');
const categories = document.querySelectorAll('#categories input[type="checkbox"]');
const importance = document.querySelectorAll('#importance input[type="checkbox"]');
const sidebarFilters = document.querySelectorAll('li');

openModal.addEventListener('click', () => addItem.showModal());
closeModal.addEventListener('click', () => addItem.close());
typeSelector.addEventListener('change', changeForm);
newEntryForm.addEventListener('submit', createNewEntry);
categories.forEach(filter => filter.addEventListener('click', filterCategories));
importance.forEach(filter => filter.addEventListener('click', filterImportance));
sidebarFilters.forEach(filter => filter.addEventListener('click', filterDate));

