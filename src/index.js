import { changeForm, generateTaskForm } from './modules/type-changer.js'
import { createNewEntry } from './modules/entry-factory.js';
import './style.css';

// initialise using 'task' as default display type
generateTaskForm();

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const addItem = document.querySelector('#add-item-modal');
const typeSelector = document.querySelector('#type-selector');
const newEntryForm = document.querySelector('#item-details');


openModal.addEventListener('click', () => addItem.showModal());
closeModal.addEventListener('click', () => addItem.close());
typeSelector.addEventListener('change', changeForm);
newEntryForm.addEventListener('submit', createNewEntry);
