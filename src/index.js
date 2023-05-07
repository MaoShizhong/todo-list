import { changeForm, generateTaskForm } from './modules/type-changer.js'
import { createNewEntry } from './modules/entry-factory.js';
import { filterCategories, filterImportance } from './modules/filters.js';
import './style.css';

// initialise using 'task' as default display type
generateTaskForm();

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const addItem = document.querySelector('#add-item-modal');
const typeSelector = document.querySelector('#type-selector');
const newEntryForm = document.querySelector('#item-details');
const categories = document.querySelectorAll('#categories input[type="checkbox"]');
const importance = document.querySelectorAll('#importance input[type="checkbox"]');


openModal.addEventListener('click', () => addItem.showModal());
closeModal.addEventListener('click', () => addItem.close());
typeSelector.addEventListener('change', changeForm);
newEntryForm.addEventListener('submit', createNewEntry);
categories.forEach(filter => filter.addEventListener('click', filterCategories));
importance.forEach(filter => filter.addEventListener('click', filterImportance));