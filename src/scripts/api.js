export function getUserData() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-11/users/me', {
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1'
        }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((myUserData) => myUserData)
        .catch(err => console.log(err));
}

export function GetCardsArray() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-11/cards', {
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1'
        }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(cardsArray => cardsArray)
        .catch(err => console.log(err));
}

export function sendUserData(userData) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-11/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userData.name,
            about: userData.about
        })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(newUserDataConfig => newUserDataConfig)
        .catch(err => console.log(err));
}

export function sendCardData(cardData) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-11/cards', {
        method: 'POST',
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: cardData.name,
            link: cardData.link
        })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(newcardDataConfig => newcardDataConfig)
        .catch(err => console.log(err));
}

export function deleteCardRequest(cardId) {
    return fetch("https://nomoreparties.co/v1/wff-cohort-11/cards/" + cardId, {
        method: 'DELETE',
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1',
        }
    })
        .catch(err => console.log(err));
}

export function addLikeRequest(cardId) {
    return fetch("https://nomoreparties.co/v1/wff-cohort-11/cards/likes/" + cardId, {
        method: 'PUT',
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1',
        }
    })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(newCardConfig => newCardConfig)
        .catch(err => console.log(err));
}

export function deleteLikeRequest(cardId) {
    return fetch("https://nomoreparties.co/v1/wff-cohort-11/cards/likes/" + cardId, {
        method: 'DELETE',
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1',
        }
    })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(newCardConfig => newCardConfig)
        .catch(err => console.log(err));
}

export function changeUserAvatar(avatarUrl) {
    return fetch("https://nomoreparties.co/v1/wff-cohort-11/users/me/avatar", {
        method: 'PATCH',
        headers: {
            authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: avatarUrl,
        })
    })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(newAvatarConfig => newAvatarConfig)
        .catch(err => console.log(err));
}