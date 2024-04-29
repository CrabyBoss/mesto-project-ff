import {deleteCardRequest, addLikeRequest, deleteLikeRequest} from './api';

export function createCard(cardInf, deleteCard, openCard, likeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInf.name;
    
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardInf.link; 
    cardImage.alt = cardInf.name;
    cardImage.addEventListener('click', openCard);
    
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    if(cardInf.cardOwnerId != cardInf.myId) {
        cardDeleteButton.classList.add('card__delete-button-hidden')
    } else {
        cardDeleteButton.addEventListener('click',(evt) => {
            deleteCard(evt, cardInf.cardId);
        });
    }

    const cardLikeButton = cardElement.querySelector('.card__like-button');
    if(cardInf.likes != 0) {
        cardInf.likes.some(element => {
            if(element._id === cardInf.myId) {
                cardLikeButton.classList.add('card__like-button_is-active');
            }
        });
    }
    const cardLikeCounts = cardElement.querySelector('.card__like-counts');
    cardLikeCounts.textContent = cardInf.likes.length;
    cardLikeButton.addEventListener('click', (evt) => {
        const likeMethod = (cardId) => cardLikeButton.classList.contains('card__like-button_is-active') ? deleteLikeRequest(cardId) : addLikeRequest(cardId);
            likeMethod(cardInf.cardId)
                .then(newCardConfig => { 
                    cardLikeCounts.textContent = newCardConfig.likes.length; 
                    likeCard(evt); 
                })
                .catch(err => console.log(err));
    });
    
    return cardElement;
}

export function deleteCard(evt, cardId) {
    deleteCardRequest(cardId)
        .then(() => {
            const card = evt.target.closest('.card');
            card.remove();
        })
        .catch(err => console.log(err));
}

export function likeCard(evt) {
    if(evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active');
    }
}
