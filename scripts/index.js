// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const mainContent = document.querySelector('.content');
const cardsContainer = mainContent.querySelector('.places__list');

function createCard(cardInf, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = cardInf.name;
    cardElement.querySelector('.card__image').setAttribute('src', cardInf.link);

    cardsContainer.append(cardElement);

    cardElement.querySelector('.card__delete-button').addEventListener('click', evt => deleteCard(evt));
}

function deleteCard(evt) {
    let card = evt.target.closest('.card');
    card.remove();
}

initialCards.forEach(card => createCard(card, deleteCard));
