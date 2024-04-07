import {cardsContainer} from './index.js';
import {openPopup} from './modal.js';

export function createCard(cardInf, deleteCard, openCard, likeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInf.name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInf.link; 
    cardImage.alt = cardInf.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);

    cardsContainer.addEventListener('click', openCard);
    cardsContainer.addEventListener('click', likeCard);

    return cardElement;
}

export function deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

const imagePopup = document.querySelector('.popup_type_image');
const popupImageConteiner = imagePopup.querySelector('.popup__image');

export function openCard(evt) {
    if(evt.target.classList.contains('card__image')) {
        popupImageConteiner.src = evt.target.src;
        popupImageConteiner.alt = evt.target.alt;
        imagePopup.querySelector('.popup__caption').textContent = evt.target.alt;
        openPopup(imagePopup);
    }
}

export function likeCard(evt) {
    if(evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active');
    }
}