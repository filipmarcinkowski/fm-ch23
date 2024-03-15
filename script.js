'use strict';
const form = document.querySelector('.form');
const successMsg = document.querySelector('.success');

const btnConfirm = document.querySelector('.btn-confirm');
const btnContinue = document.querySelector('.btn-continue');

const inputFields = document.querySelectorAll('.input');
const cardNumber = document.querySelectorAll('.number');

const correctNum = /^\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4}$/g;

const emptyMsg = `<p class="err-msg  err-empty margin-b">Can't be blank</p>`;
const numErrMsg = `<p class="err-msg   err-num margin-b ">Wrong format, numbers only</p>`;

const checkCard = function (e) {
  e.preventDefault();
  inputFields.forEach(checkData);
};

const removeErrMsg = function (i) {
  i.classList.remove('err-color');
  if (
    i.nextElementSibling &&
    i.nextElementSibling.classList.contains('err-msg')
  )
    i.nextElementSibling.remove();
};

const checkData = function (i) {
  const isNumber = i.classList.contains('number');

  if (i.value === '') {
    console.log(i);
    removeErrMsg(i);
    i.classList.add('err-color');
    i.insertAdjacentHTML('afterend', emptyMsg);
  }

  if (i.value !== '') {
    if (isNumber) {
      const storeNum = new RegExp(correctNum);
      const num = storeNum.test(i.value);

      if (num === true) {
        removeErrMsg(i);
        document.querySelector(`.card-${i.getAttribute('id')}`).textContent =
          i.value;
      } else {
        removeErrMsg(i);
        i.classList.add('err-color');
        i.insertAdjacentHTML('afterend', numErrMsg);
        document.querySelector(`.card-${i.getAttribute('id')}`).textContent =
          i.value;
      }
    } else {
      removeErrMsg(i);
      document.querySelector(`.card-${i.getAttribute('id')}`).textContent =
        i.value;
    }
  }
};

const isProperValue = function (input) {};

btnConfirm.addEventListener('click', checkCard);
