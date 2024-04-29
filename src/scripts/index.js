import '../index.css';
import {createCard, deleteCard, likeCard} from './card.js';
import {openPopup, closePopup} from './modal.js';
import {enableValidation, clearValidation} from './validation.js';

const mainContent = document.querySelector('.content');
const cardsContainer = mainContent.querySelector('.places__list');

function getCard(cardInf, deleteCard) {
    const cardElement = createCard(cardInf, deleteCard, openCard, likeCard);
    cardsContainer.prepend(cardElement);
}

const profileButton = mainContent.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');

const newPlaceAddButton = mainContent.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');

const changeAvatarButton = mainContent.querySelector('.profile__image');
const changeAvatarPopup = document.querySelector('.popup_type_change-avatar')

/// событие для закрывающихся кнопок

const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach(closeButton => {
    const closestPopup = closeButton.closest('.popup');
    
    closeButton.addEventListener('click', () => {
        closePopup(closestPopup);
    });
    
})

// события для открывающих кнопок

profileButton.addEventListener('click', () => {
    openPopup(profilePopup);
    resetEditForm();
    clearValidation(formEditElement, validationConfig);
});

newPlaceAddButton.addEventListener('click', () => {
    openPopup(newPlacePopup);
    resetCreateForm();
    clearValidation(formCreateElement, validationConfig);
});

changeAvatarButton.addEventListener('click', () => {
    openPopup(changeAvatarPopup);
    resetChangeAvatarForm();
    clearValidation(formChangeAvatarElement, validationConfig);
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

// edit form

const formEditElement = document.forms['edit-profile'];

const nameInput = formEditElement.elements.name;
const jobInput = formEditElement.elements.description;

const profileTitle = mainContent.querySelector('.profile__title');
const profileDescription = mainContent.querySelector('.profile__description');
const profileAvatarPicture = mainContent.querySelector('.profile__image');

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(true, formEditElement.elements['edit-button']);

    sendUserData({name: nameInput.value, about: jobInput.value})
        .then(newUserDataConfig => {
            profileTitle.textContent = newUserDataConfig.name;
            profileDescription.textContent = newUserDataConfig.about;
        })
        .catch(err => {console.log(err)})
        .finally(() => renderLoading(false, formEditElement.elements['edit-button']));

    closePopup(document.querySelector('.popup_is-opened'));
}

formEditElement.addEventListener('submit', handleEditFormSubmit);

// create form

const formCreateElement = document.forms['new-place'];
const newCardNameInput = formCreateElement.elements['place-name'];
const newCardUrlInput = formCreateElement.elements.link;

function handleCreateFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(true, formCreateElement.elements['new-card-button']);
    sendCardData({name: newCardNameInput.value, link: newCardUrlInput.value})
        .then(newcardDataConfig => {
            getCard({name: newcardDataConfig.name,
                link: newcardDataConfig.link,
                cardId: newcardDataConfig._id,
                likes: 0}, deleteCard);
        })
        .catch(err => {console.log(err)})
        .finally(() => renderLoading(false, formCreateElement.elements['new-card-button']));
    
    closePopup(document.querySelector('.popup_is-opened'));
}

formCreateElement.addEventListener('submit', handleCreateFormSubmit);

// change avatar form

const formChangeAvatarElement = document.forms['change-avatar'];
const newAvatarUrlInput = formChangeAvatarElement.elements.link;

function handleChangeAvatarFormSubmit(evt) {
    evt.preventDefault();
    renderLoading(true, formChangeAvatarElement.elements['change-avatar-button']);
    changeUserAvatar(newAvatarUrlInput.value)
        .then(newAvatarConfig => {
            profileAvatarPicture.style = "background-image: url(" + newAvatarConfig.avatar + ");";
        })
        .catch(err => {console.log(err)})
        .finally(() => renderLoading(false, formChangeAvatarElement.elements['change-avatar-button']));

    closePopup(document.querySelector('.popup_is-opened'));
}

formChangeAvatarElement.addEventListener('submit', handleChangeAvatarFormSubmit);

//reset functions for forms

function resetEditForm() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}

function resetCreateForm() {
    formCreateElement.reset();
}

function resetChangeAvatarForm() {
    formChangeAvatarElement.reset();
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

enableValidation(validationConfig);

// api

import {GetCardsArray, getUserData, sendUserData, sendCardData, changeUserAvatar} from './api.js';

// Добавляю карточки, меняю инфу профиля

Promise.all([GetCardsArray(), getUserData()])
    .then(([cardsArray, myUserData]) => {
        cardsArray.reverse().forEach(card => getCard({name: card.name,
            link: card.link,
            cardId: card._id,
            cardOwnerId: card.owner._id,
            myId: myUserData._id,
            likes: card.likes}, deleteCard))

        changeUserData({name: myUserData.name,
            description: myUserData.about,
            avatar: myUserData.avatar});
    })
    .catch(err => {console.log(err)});

function changeUserData(userDataConfig) {
    profileTitle.textContent = userDataConfig.name;
    profileDescription.textContent = userDataConfig.description;
    profileAvatarPicture.style = "background-image: url(" + userDataConfig.avatar + ");";

    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}

const isLoadingText = 'Сохранение...';
const originalText = 'Сохранить';

function renderLoading(isLoading, button) {
    button.textContent = isLoading ? isLoadingText : originalText;
}