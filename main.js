(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-11",headers:{authorization:"2cc3e7e9-0d21-4ea2-bc8e-a555b1b668e1","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function n(t,n){(function(t){return fetch("".concat(e.baseUrl,"/cards/")+t,{method:"DELETE",headers:e.headers})})(n).then((function(){t.target.closest(".card").remove()})).catch((function(e){return console.log(e)}))}function r(e){e.target.classList.contains("card__like-button")&&e.target.classList.toggle("card__like-button_is-active")}function o(e){setTimeout((function(){e.classList.add("popup_is-opened")}),100),e.classList.add("popup_is-animated"),document.addEventListener("click",i),document.addEventListener("keydown",c)}function a(e){setTimeout((function(){e.classList.remove("popup_is-animated")}),600),e.classList.remove("popup_is-opened"),document.removeEventListener("click",i),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function i(e){e.target.classList.contains("popup")&&a(e.target)}var u=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.classList.remove(r),o.textContent=""};function s(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?d(t,n):l(t,n)}var l=function(e,t){e.classList.add(t),e.setAttribute("disabled",!0)},d=function(e,t){e.classList.remove(t),e.removeAttribute("disabled")};function p(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=t.inactiveButtonClass,a=t.inputErrorClass,c=t.errorClass;Array.from(e.querySelectorAll(n)).forEach((function(t){u(e,t,a,c)}));var i=e.querySelector(r);l(i,o)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".content"),v=m.querySelector(".places__list");function _(n,o){var a=function(n,r,o,a){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);c.querySelector(".card__title").textContent=n.name;var i=c.querySelector(".card__image");i.src=n.link,i.alt=n.name,i.addEventListener("click",o);var u=c.querySelector(".card__delete-button");n.cardOwnerId!=n.myId?u.classList.add("card__delete-button-hidden"):u.addEventListener("click",(function(e){r(e,n.cardId)}));var s=c.querySelector(".card__like-button");0!=n.likes&&n.likes.some((function(e){e._id===n.myId&&s.classList.add("card__like-button_is-active")}));var l=c.querySelector(".card__like-counts");return l.textContent=n.likes.length,s.addEventListener("click",(function(r){var o;(o=n.cardId,s.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/")+n,{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))}(o):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/")+n,{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(o)).then((function(e){l.textContent=e.likes.length,a(r)})).catch((function(e){return console.log(e)}))})),c}(n,o,q,r);v.prepend(a)}var y=m.querySelector(".profile__edit-button"),h=document.querySelector(".popup_type_edit"),b=m.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_new-card"),g=m.querySelector(".profile__image"),k=document.querySelector(".popup_type_change-avatar");document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){a(t)}))})),y.addEventListener("click",(function(){o(h),x.value=I.textContent,w.value=U.textContent,p(A,F)})),b.addEventListener("click",(function(){o(S),O.reset(),p(O,F)})),g.addEventListener("click",(function(){o(k),P.reset(),p(P,F)}));var C=document.querySelector(".popup_type_image"),E=C.querySelector(".popup__image"),L=C.querySelector(".popup__caption");function q(e){e.target.classList.contains("card__image")&&(E.src=e.target.src,E.alt=e.target.alt,L.textContent=e.target.alt,o(C))}var A=document.forms["edit-profile"],x=A.elements.name,w=A.elements.description,I=m.querySelector(".profile__title"),U=m.querySelector(".profile__description"),B=m.querySelector(".profile__image");A.addEventListener("submit",(function(n){var r;n.preventDefault(),Q(!0,A.elements["edit-button"]),(r={name:x.value,about:w.value},fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r.name,about:r.about})}).then((function(e){return t(e)}))).then((function(e){I.textContent=e.name,U.textContent=e.about})).catch((function(e){console.log(e)})).finally((function(){return Q(!1,A.elements["edit-button"])})),a(document.querySelector(".popup_is-opened"))}));var O=document.forms["new-place"],T=O.elements["place-name"],j=O.elements.link;O.addEventListener("submit",(function(r){var o;r.preventDefault(),Q(!0,O.elements["new-card-button"]),(o={name:T.value,link:j.value},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:o.name,link:o.link})}).then((function(e){return t(e)}))).then((function(e){_({name:e.name,link:e.link,cardId:e._id,likes:0},n)})).catch((function(e){console.log(e)})).finally((function(){return Q(!1,O.elements["new-card-button"])})),a(document.querySelector(".popup_is-opened"))}));var P=document.forms["change-avatar"],D=P.elements.link;P.addEventListener("submit",(function(n){var r;n.preventDefault(),Q(!0,P.elements["change-avatar-button"]),(r=D.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){B.style="background-image: url("+e.avatar+");"})).catch((function(e){console.log(e)})).finally((function(){return Q(!1,P.elements["change-avatar-button"])})),a(document.querySelector(".popup_is-opened"))}));var M,N,J,H,V,z,$,F={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};N=(M=F).formSelector,J=M.inputSelector,H=M.submitButtonSelector,V=M.inactiveButtonClass,z=M.inputErrorClass,$=M.errorClass,Array.from(document.querySelectorAll(N)).forEach((function(e){!function(e){var t=e.formElement,n=e.inputSelector,r=e.submitButtonSelector,o=e.inactiveButtonClass,a=e.inputErrorClass,c=e.errorClass,i=Array.from(t.querySelectorAll(n)),l=t.querySelector(r);s(i,l,o),i.forEach((function(e){e.addEventListener("input",(function(){!function(e,t,n,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,n,r):function(e,t,n,r,o){var a=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),a.textContent=n,a.classList.add(o)}(e,t,t.validationMessage,n,r)}(t,e,a,c),s(i,l,o)}))}))}({formElement:e,inputSelector:J,submitButtonSelector:H,inactiveButtonClass:V,inputErrorClass:z,errorClass:$})})),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,r,o,a=(o=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(r,o)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],i=a[1];c.reverse().forEach((function(e){return _({name:e.name,link:e.link,cardId:e._id,cardOwnerId:e.owner._id,myId:i._id,likes:e.likes},n)})),t={name:i.name,description:i.about,avatar:i.avatar},I.textContent=t.name,U.textContent=t.description,B.style="background-image: url("+t.avatar+");",x.value=I.textContent,w.value=U.textContent})).catch((function(e){console.log(e)}));var G="Сохранение...",K="Сохранить";function Q(e,t){t.textContent=e?G:K}})();