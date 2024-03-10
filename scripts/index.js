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

    const cardTitle = cardElement.querySelector(".card__title");
    cardTitle.textContent = cardInf.name;
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = cardInf.link; 
    cardImage.alt = cardInf.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', evt => deleteCard(evt));

    return cardElement;
}

function getCard(cardInf, deleteCard) {
    const cardElement = createCard(cardInf, deleteCard);
    cardsContainer.append(cardElement);
}

function deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

initialCards.forEach(card => getCard(card, deleteCard));
