const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-11',
    headers: {
      authorization: '2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1',
      'Content-Type': 'application/json'
    }
}

const handleResponse = res => {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export function getUserData() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
        })
        .then(res => handleResponse(res));
}

export function GetCardsArray() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
        })
        .then(res => handleResponse(res));
}

export function sendUserData(userData) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: userData.name,
            about: userData.about
        })
        })
        .then(res => handleResponse(res));
}

export function sendCardData(cardData) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: cardData.name,
            link: cardData.link
        })
        })
        .then(res => handleResponse(res));
}

export function deleteCardRequest(cardId) {
    return fetch(`${config.baseUrl}/cards/` + cardId, {
        method: 'DELETE',
        headers: config.headers,
    })
}

export function addLikeRequest(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/` + cardId, {
        method: 'PUT',
        headers: config.headers,
    })
        .then(res => handleResponse(res));
}

export function deleteLikeRequest(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/` + cardId, {
        method: 'DELETE',
        headers: config.headers,
    })
        .then(res => handleResponse(res));
}

export function changeUserAvatar(avatarUrl) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatarUrl,
        })
    })
        .then(res => handleResponse(res));
}