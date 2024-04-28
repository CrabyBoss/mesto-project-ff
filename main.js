(()=>{"use strict";function e(e){e.target.closest(".card").remove()}function t(e){e.target.classList.contains("card__like-button")&&e.target.classList.toggle("card__like-button_is-active")}function n(e){setTimeout((function(){e.classList.add("popup_is-opened")}),100),e.classList.add("popup_is-animated"),document.addEventListener("click",c),document.addEventListener("keydown",r)}function o(e){setTimeout((function(){e.classList.remove("popup_is-animated")}),600),e.classList.remove("popup_is-opened"),document.removeEventListener("click",c),document.removeEventListener("keydown",r)}function r(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}function c(e){e.target.classList.contains("popup")&&o(e.target)}var a=function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),r.classList.remove(o),r.textContent=""};function i(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?s(t,n):u(t,n)}var u=function(e,t){e.classList.add(t),e.setAttribute("disabled",!0)},s=function(e,t){e.classList.remove(t),e.removeAttribute("disabled")};function l(e,t){var n=t.inputSelector,o=t.submitButtonSelector,r=t.inactiveButtonClass,c=t.inputErrorClass,i=t.errorClass;Array.from(e.querySelectorAll(n)).forEach((function(t){a(e,t,c,i)}));var s=e.querySelector(o);u(s,r)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var p=document.querySelector(".content"),f=p.querySelector(".places__list");function m(e,n){var o=function(e,t,n,o){var r=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);r.querySelector(".card__title").textContent=e.name;var c=r.querySelector(".card__image");c.src=e.link,c.alt=e.name,c.addEventListener("click",n);var a=r.querySelector(".card__delete-button");e.cardOwnerId!=e.myId&&a.classList.add("card__delete-button-hidden"),a.addEventListener("click",(function(n){var o;(o=e.cardId,fetch("https://nomoreparties.co/v1/wff-cohort-11/cards/"+o,{method:"DELETE",headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1"}}).catch((function(e){return console.log(e)}))).catch((function(e){return console.log(e)})),t(n)}));var i=r.querySelector(".card__like-button");0!=e.likes&&e.likes.some((function(t){t._id===e.myId&&i.classList.add("card__like-button_is-active")}));var u=r.querySelector(".card__like-counts");return u.textContent=e.likes.length,i.addEventListener("click",(function(t){var n;i.classList.contains("card__like-button_is-active")?(n=e.cardId,fetch("https://nomoreparties.co/v1/wff-cohort-11/cards/likes/"+n,{method:"DELETE",headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(e){u.textContent=e.likes.length,o(t)})).catch((function(e){return console.log(e)})):function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-11/cards/likes/"+e,{method:"PUT",headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(e.cardId).then((function(e){u.textContent=e.likes.length,o(t)})).catch((function(e){return console.log(e)}))})),r}(e,n,L,t);f.prepend(o)}var v=p.querySelector(".profile__edit-button"),h=document.querySelector(".popup_type_edit"),_=p.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_new-card"),b=p.querySelector(".profile__image"),S=document.querySelector(".popup_type_change-avatar");document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){o(t),t.classList.contains("popup_type_edit")&&(q.value=w.textContent,j.value=x.textContent),t.classList.contains("popup_type_new-card")&&(z(),l(I,F)),t.classList.contains("popup_type_change-avatar")&&(D(),l(T,F))}))})),v.addEventListener("click",(function(){n(h),l(E,F)})),_.addEventListener("click",(function(){n(y),l(I,F)})),b.addEventListener("click",(function(){n(S),l(T,F)}));var g=document.querySelector(".popup_type_image"),k=g.querySelector(".popup__image"),C=g.querySelector(".popup__caption");function L(e){e.target.classList.contains("card__image")&&(k.src=e.target.src,k.alt=e.target.alt,C.textContent=e.target.alt,n(g))}var E=document.forms["edit-profile"],q=E.elements.name,j=E.elements.description,w=p.querySelector(".profile__title"),x=p.querySelector(".profile__description"),A=p.querySelector(".profile__image");E.addEventListener("submit",(function(e){var t;e.preventDefault(),Q(!0,E.elements["edit-button"]),(t={name:q.value,about:j.value},fetch("https://nomoreparties.co/v1/wff-cohort-11/users/me",{method:"PATCH",headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1","Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(e){w.textContent=e.name,x.textContent=e.about})).catch((function(e){console.log(e)})),Q(!1,E.elements["edit-button"]),o(document.querySelector(".popup_is-opened"))}));var I=document.forms["new-place"],B=I.elements["place-name"],P=I.elements.link;I.addEventListener("submit",(function(t){var n;t.preventDefault(),Q(!0,I.elements["new-card-button"]),(n={name:B.value,link:P.value},fetch("https://nomoreparties.co/v1/wff-cohort-11/cards",{method:"POST",headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1","Content-Type":"application/json"},body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(t){m({name:t.name,link:t.link,cardId:t._id,likes:0},e)})).catch((function(e){console.log(e)})),Q(!1,I.elements["new-card-button"]),o(document.querySelector(".popup_is-opened")),z()}));var T=document.forms["change-avatar"],O=T.elements.link;function z(){I.reset()}function D(){T.reset()}T.addEventListener("submit",(function(e){var t;e.preventDefault(),Q(!0,T.elements["change-avatar-button"]),(t=O.value,fetch("https://nomoreparties.co/v1/wff-cohort-11/users/me/avatar",{method:"PATCH",headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(e){A.style="background-image: url("+e.avatar+");"})).catch((function(e){console.log(e)})),Q(!1,T.elements["change-avatar-button"]),o(document.querySelector(".popup_is-opened")),D()}));var M,N,J,H,U,V,$,F={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};N=(M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}).formSelector,J=M.inputSelector,H=M.submitButtonSelector,U=M.inactiveButtonClass,V=M.inputErrorClass,$=M.errorClass,Array.from(document.querySelectorAll(N)).forEach((function(e){!function(e){var t=e.formElement,n=e.inputSelector,o=e.submitButtonSelector,r=e.inactiveButtonClass,c=e.inputErrorClass,u=e.errorClass,s=Array.from(t.querySelectorAll(n)),l=t.querySelector(o);i(s,l,r),s.forEach((function(e){e.addEventListener("input",(function(){!function(e,t,n,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?a(e,t,n,o):function(e,t,n,o,r){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),c.textContent=n,c.classList.add(r)}(e,t,t.validationMessage,n,o)}(t,e,c,u),i(s,l,r)}))}))}({formElement:e,inputSelector:J,submitButtonSelector:H,inactiveButtonClass:U,inputErrorClass:V,errorClass:$})})),Promise.all([fetch("https://nomoreparties.co/v1/wff-cohort-11/cards",{headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.log(e)})),fetch("https://nomoreparties.co/v1/wff-cohort-11/users/me",{headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.log(e)}))]).then((function(t){var n,o,r,c=(r=2,function(e){if(Array.isArray(e))return e}(o=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return i}}(o,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(o,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],i=c[1];a.reverse().forEach((function(t){return m({name:t.name,link:t.link,cardId:t._id,cardOwnerId:t.owner._id,myId:i._id,likes:t.likes},e)})),n={name:i.name,description:i.about,avatar:i.avatar},w.textContent=n.name,x.textContent=n.description,A.style="background-image: url("+n.avatar+");",q.value=w.textContent,j.value=x.textContent})).catch((function(e){console.log(e)}));var G="Сохранение...",K="Сохранить";function Q(e,t){t.textContent=e?G:K}})();