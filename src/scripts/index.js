// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import '../index.css';
import {initialCards} from './maincards.js';
import {createCard, deleteCard, likeCard} from './card.js';
import {openPopup, closePopup} from './modal.js';
import {enableValidation, clearValidation} from './validation.js';

const mainContent = document.querySelector('.content');
const cardsContainer = mainContent.querySelector('.places__list');

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
    const closestPopup = closeButton.closest('.popup');
    
    closeButton.addEventListener('click', () => {
        closePopup(closestPopup)

        if(closestPopup.classList.contains('popup_type_edit')) {
            resetEditForm();
        }

        if(closestPopup.classList.contains('popup_type_new-card')) {
            resetCreateForm();
            clearValidation(formCreateElement, [newCardNameInput, newCardUrlInput]);
        }

    });
    
})

// события для открывающих кнопок

profileButton.addEventListener('click', () => {
    openPopup(profilePopup);
    clearValidation(formEditElement, [nameInput, jobInput]);
});

newPlaceAddButton.addEventListener('click', () => {
    openPopup(newPlacePopup);
    clearValidation(formCreateElement, [newCardNameInput, newCardUrlInput]);
});

// открытие карточки

const imagePopup = document.querySelector('.popup_type_image');
const popupImageConteiner = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

export function openCard(evt) {
    if(evt.target.classList.contains('card__image')) {
        popupImageConteiner.src = evt.target.src;
        popupImageConteiner.alt = evt.target.alt;
        popupCaption.textContent = evt.target.alt;
        openPopup(imagePopup);
    }
}

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

const newCardNameInput = formCreateElement.elements['place-name'];
const newCardUrlInput = formCreateElement.elements.link;

function handleCreateFormSubmit(evt) {
    evt.preventDefault();
    getCard({name: newCardNameInput.value, link: newCardUrlInput.value}, deleteCard);

    closePopup(document.querySelector('.popup_is-opened'));
    resetCreateForm();
}

formCreateElement.addEventListener('submit', handleCreateFormSubmit);

///reset functions for forms

function resetEditForm() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}

function resetCreateForm() {
    formCreateElement.reset();
}

// Включение валидации всех форм

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};

enableValidation();