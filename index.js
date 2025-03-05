const inputNode = document.getElementById ('input-product');
const searchBtnNode = document.getElementById ('search_button');

const inputEmailNode = document.getElementById ('email-input');
const subscribeBtnNode = document.getElementById ('subscribe_button');

const bodyNode = document.querySelector('body');
const popupNode = document.getElementById('popup');


const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const getRequest = () => {
    const request = inputNode.value;
    return request
}
const searchBtnHandler = () => {
    console.log(getRequest())
}

const getEmail = () => {
    const request = inputEmailNode.value;
    return request
}
const clearInput = (text) => {
    text.value = '';
}
const togglePopup = () => {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    setTimeout(() => {
        popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
        bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    }, 2000);
}
const subscribeBtnHandler = () => {
    console.log(getEmail());
    clearInput(inputEmailNode);
    togglePopup();
}

searchBtnNode.addEventListener('click', searchBtnHandler);
subscribeBtnNode.addEventListener('click', subscribeBtnHandler);



