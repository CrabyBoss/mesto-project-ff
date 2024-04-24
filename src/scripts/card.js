export function createCard(cardInf, deleteCard, openCard, likeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInf.name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInf.link; 
    cardImage.alt = cardInf.name;
    const cardLikeButton = cardElement.querySelector('.card__like-button')

    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);

    cardImage.addEventListener('click', openCard);
    cardLikeButton.addEventListener('click', likeCard);

    return cardElement;
}

export function deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

export function likeCard(evt) {
    if(evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active');
    }
}