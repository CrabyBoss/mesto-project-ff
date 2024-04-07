import { resetCreateForm, resetEditForm } from "./index.js";

export function openPopup(popup) {
    setTimeout(() => {
        popup.classList.add('popup_is-opened');
    }, 100);
    popup.classList.add('popup_is-animated');

    document.addEventListener('click', closeByClickOnOverlay);
    document.addEventListener('keydown', closeByEscape);
}

export function closePopup(popup) {
    setTimeout(() => {
        popup.classList.remove('popup_is-animated');
    }, 600);
    popup.classList.remove('popup_is-opened');

    document.removeEventListener('click', closeByClickOnOverlay);
    document.removeEventListener('keydown', closeByEscape);

    if(popup.classList.contains('popup_type_edit')) {
        resetEditForm();
    }

    if(popup.classList.contains('popup_type_new-card')) {
        resetCreateForm();
    }
}

function closeByEscape(evt) {
    if(evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_is-opened'));
    }
}

function closeByClickOnOverlay(evt) {
    if(evt.target.classList.contains('popup')) {
        closePopup(document.querySelector('.popup_is-opened'));
    }
}