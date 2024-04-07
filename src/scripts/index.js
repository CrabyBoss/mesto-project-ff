// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import '../index.css';
import {initialCards} from './maincards.js';
import {createCard, deleteCard, openCard, likeCard} from './card.js';
import {openPopup, closePopup} from './modal.js';

export const mainContent = document.querySelector('.content');
export const cardsContainer = mainContent.querySelector('.places__list');

function getCard(cardInf, deleteCard) {
    const cardElement = createCard(cardInf, deleteCard, openCard, likeCard);
    cardsContainer.prepend(cardElement);
}

initialCards.forEach(card => getCard(card, deleteCard));

// 6 СПРИНТ...

const profileButton = mainContent.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');

const newPlaceAddButton = mainContent.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');

/// событие для закрывающихся кнопок

const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => closePopup(closeButton.closest('.popup')));
})

// события для открывающих кнопок

profileButton.addEventListener('click', () => openPopup(profilePopup));

newPlaceAddButton.addEventListener('click', () => openPopup(newPlacePopup));

/// edit form

const formEditElement = document.forms['edit-profile'];

const nameInput = formEditElement.elements.name;
const jobInput = formEditElement.elements.description;

const profileTitle = mainContent.querySelector('.profile__title');
const profileDescription = mainContent.querySelector('.profile__description');

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closePopup(document.querySelector('.popup_is-opened'));
}

formEditElement.addEventListener('submit', handleEditFormSubmit);

/// create form

const formCreateElement = document.forms['new-place'];

function handleCreateFormSubmit(evt) {
    evt.preventDefault();
    const newCardNameInput = formCreateElement.elements['place-name'].value;
    const newCardUrlInput = formCreateElement.elements.link.value;
    getCard({name: newCardNameInput, link: newCardUrlInput}, deleteCard);

    closePopup(document.querySelector('.popup_is-opened'));
}

formCreateElement.addEventListener('submit', handleCreateFormSubmit);

///reset functions for forms

export function resetEditForm() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}

export function resetCreateForm() {
    formCreateElement.reset();
}